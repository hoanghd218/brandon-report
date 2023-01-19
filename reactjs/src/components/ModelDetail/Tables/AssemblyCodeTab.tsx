import { AgGridReact } from 'ag-grid-react';
import { Button, Checkbox, Input, Modal, notification, Tabs } from 'antd';
import _ from 'lodash';
import { Fragment, useEffect, useState } from 'react';
import { editAssembly } from '../../../api/bimModelApi';
import '../../../assets/tab-table.scss';
import ModelDetailHelper from '../ModelDetailHelper';
import { useForgeStore } from '../../../store/forgeStore';
export default function AssemblyCodeTab(props: any) {
  const { setRevitElements, revitElements } = useForgeStore();
  const [assemblyArr, setAssemblyArr] = useState<any>([]);
  const [ar, setAr] = useState<any>([]);
  const [gridApi, setGridApi] = useState<any>();
  const [selectedTabEdit, setSelectedTabEdit] = useState(1);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [form, setForm] = useState<any>({});
  const [notify, contextHolder] = notification.useNotification();
  const [currentEditItem, setCurrentEditItem] = useState<any>([]);
  const [checkUpdateSimilar, setCheckUpdateSimilar] = useState(false);
  //functions
  function getContextMenuItems(params: any) {
    var result = [
      {
        name: 'Edit ',
        action: () => {
          currentEditItem.value = params.node.data;
          let assembly = '';
          setCheckUpdateSimilar(false);
          setForm({
            assembly: assembly,
          });
          setEditModalOpen(true);
        },
      },
    ];
    return result;
  }

  function EditRender(props: any) {
    return (
      <div className='h-full grid content-center'>
        <Button
          onClick={(e) => {
            currentEditItem.value = props.data;
            setCheckUpdateSimilar(false);
            let assembly = '';
            setForm({
              assembly: assembly,
            });
            setEditModalOpen(true);
          }}
        >
          Edit
        </Button>
      </div>
    );
  }
  useEffect(() => {
    groupData();
  }, [revitElements]);

  function groupData() {
    const arrAssemblyEmpty = revitElements.filter((x: any) => !x.assemblyCode);
    setAssemblyArr(arrAssemblyEmpty);
    if (arrAssemblyEmpty.length > 0) {
      let array: any = [];
      let parents: any = [];
      const groupByMaterial = _.groupBy(arrAssemblyEmpty, 'typeName');

      let keys = Object.keys(groupByMaterial);

      keys.sort();

      if (keys.includes('undefined')) {
        keys = ['undefined', ...keys.filter((x) => x != 'undefined')];
      }

      keys.forEach((key) => {
        const kk =
          _.isEmpty(key) || _.isNull(key) || key == 'undefined' || key == 'null'
            ? 'None'
            : key;
        const items = groupByMaterial[key];

        const parent = {
          id: kk,
          orgHierarchy: [kk],
          group: kk,
          name: `Count : ${items.length}`,
          codeDescription: '',
        };
        array.push(parent);
        parents.push(parent);

        items.forEach((item: any, index: number) => {
          const child = {
            id: item.id,
            BaseCosts: item.baseCosts,
            LineNumber: item.LineNumber,
            CostShortDescription: item.CostShortDescription,
            CostDescription: item.CostDescription,
            group: item.Id,
            name: item.typeName,
            orgHierarchy: [kk, item.revitId],
            parentKey: kk,
            revitId: item.revitId,
          };
          array.push(child);
        });
        /* End Foreach */
      });
      /* End Foreach */
      setAr(array);
      console.log('araary2,', array);
    } else {
    }
  }

  const handleClickCell = (e: any) => {
    let ids = [];
    if (e.data.group) {
      ids = ar
        .filter((x: any) => x.parentKey == e.data.group)
        .map((a: any) => a.orgHierarchy[1]);
    } else {
      ids.push(e.data.orgHierarchy[1]);
    }

    ModelDetailHelper.highlightItemsByIds(ids);
  };

  function getDataPath(data: any) {
    return data.orgHierarchy;
  }

  /* Column */

  const autoGroupColumnDef = {
    // showRowGroup: true,
    minWidth: 160,
    flex: 1,
    headerName: 'Family Name',
    sortable: true,
    resizable: true,
    // cellRenderer: 'agGroupCellRenderer',
    // cellRendererParams: (params: any) => ({
    //   suppressCount: true,
    //   suppressDoubleClickExpand: true,
    //   innerRenderer: GroupColumnShowAiFilled,
    //   innerRendererParams: params,
    // }),
  };

  const defaultColDef = {
    sortable: true,
    resizable: true,
    flex: 1,
  };
  const [columnDefs] = useState<any>([
    {
      headerName: 'Assembly Code',
      field: 'assemblyCode',
      tooltipField: 'assembly',
      editable: false,
      filter: 'agTextColumnFilter',
      resizable: true,
      width: 200,
    },
    {
      headerName: 'Edit',
      maxWidth: '100',

      resizable: false,
      cellRendererSelector: (params: any) => {
        return {
          component: EditRender,
          params: {
            BaseCodes: params.node.data.BaseCosts,
          },
        };
      },
    },
  ]);

  const sucessNotify = () => {
    props.reloadData();
    notify.success({
      message: 'Update Sucessfully',
      description: '',
      placement: 'topRight',
      duration: 3,
    });
    setEditModalOpen(false);
  };
  const editFailedNotify = () => {
    notify.error({
      message: 'Update Failed',
      description: '',
      placement: 'topRight',
      duration: 3,
    });
  };

  const submitForm = () => {
    if (!form.assembly) {
      notify.error({
        message: 'Please enter new assembly code',
        description: '',
        placement: 'topRight',
        duration: 3,
      });
      return;
    }
    let payload = null;
    if (checkUpdateSimilar || currentEditItem.value.group) {
      const parentKey = currentEditItem.value.group
        ? currentEditItem.value.group
        : currentEditItem.value.parentKey;
      const ids = ar
        .filter((x: any) => x.parentKey == parentKey)
        .map((x: any) => x.id);
      payload = ids.map((x: any) => ({
        id: x,
        assemblyCode: form.assembly,
      }));
    } else {
      const id = currentEditItem.value?.id;
      payload = [
        {
          id,
          assemblyCode: form.assembly,
        },
      ];
    }
    editAssembly(payload)
      .then((res) => {
        sucessNotify();
      })
      .catch((err) => {
        editFailedNotify();
      });
  };

  function onSelectionChanged() {
    const selectedRows = gridApi.getSelectedRows();
    let ids = new Array<number>();
    selectedRows.forEach((row: any) => {
      if (row.orgHierarchy.length == 1) {
        //find all children rows
        let items = ar.filter((x: any) => x.parentKey == row.orgHierarchy[0]);
        ids = ids.concat(items.map((x: any) => x.revitId));
      } else if (row.orgHierarchy.length == 2) {
        ids.push(row.revitId);
      }
    });

    let revitIds = ids.map((x) => x.toString());

    console.log('revitIds', revitIds);
    ModelDetailHelper.highlightItemsByIds(revitIds, true);
  }

  const rowHeight = 50;
  return (
    <div className='h-full'>
      {contextHolder}

      <AgGridReact
        getContextMenuItems={getContextMenuItems}
        rowData={ar}
        rowSelection='single'
        headerHeight={30}
        detailRowAutoHeight={true}
        enableRangeSelection={true}
        onSelectionChanged={onSelectionChanged}
        animateRows={true}
        columnDefs={columnDefs}
        rowHeight={rowHeight}
        onCellClicked={handleClickCell}
        className='ag-theme-alpine z-50'
        treeData={true}
        autoGroupColumnDef={autoGroupColumnDef}
        defaultColDef={defaultColDef}
        getDataPath={getDataPath}
        getRowId={(params) => params?.data?.id}
        onGridReady={(params) => {
          setGridApi(params.api);
        }}
      ></AgGridReact>
      <Modal
        width={550}
        title={'Update Items Form'}
        open={isEditModalOpen}
        onCancel={() => {
          setEditModalOpen(false);
        }}
        onOk={submitForm}
        okText='Submit'
        centered={true}
      >
        <div className=''>
          <Tabs
            type='card'
            onChange={(e: any) => {
              setSelectedTabEdit(e);
            }}
            defaultActiveKey='1'
            items={[
              {
                label: `Assembly Code`,
                key: '2',
                children: (
                  <Fragment>
                    <Input
                      className='mt-0 my-2 w-100'
                      placeholder='Key in new Assembly Code'
                      // style={styleInput}
                      value={form.assembly}
                      onChange={(e) => {
                        setForm({ ...form, assembly: e.target.value });
                      }}
                      required
                    />
                  </Fragment>
                ),
              },
            ]}
          />
        </div>
        {currentEditItem.value?.parentKey && (
          <Checkbox
            onChange={(e) => {
              setCheckUpdateSimilar(e.target.checked);
            }}
          >
            Update for all similar items
          </Checkbox>
        )}
      </Modal>
    </div>
  );
}
