import {
  Button,
  Checkbox,
  Input,
  Modal,
  notification,
  Radio,
  Tabs,
} from 'antd';
import { Fragment, useEffect, useRef, useState } from 'react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import _ from 'lodash';
// import useRef from 'react';
import { editAssembly, editMaterials } from '../../../api/bimModelApi';
// import '../../../assets/tab-table.scss';
import ModelDetailHelper from '../ModelDetailHelper';
import { useForgeStore } from '../../../store/forgeStore';
import PriceRenderer from './PriceRenderer';

export default function TableMaterial(props: any) {
  const [selectedType, setSelectedType] = useState<string>('material');
  const selectedTypeRef = useRef('material');

  useEffect(() => {
    selectedTypeRef.current = selectedType;
  }, [selectedType]);

  const { setRevitElements, revitElements } = useForgeStore();
  const [currentEditItem, setCurrentEditItem] = useState<any>([]);
  const [inforDialogRef, setInforDialogRef] = useState<any>([]);
  const [ar, setAr] = useState<any>([]);
  const [materialData, setMaterialData] = useState<any>([]);
  const [gridApi, setGridApi] = useState<any>();
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [form, setForm] = useState<any>({});
  const [checkUpdateSimilar, setCheckUpdateSimilar] = useState(false);
  const [selectedTabEdit, setSelectedTabEdit] = useState(1);
  const [notify, contextHolder] = notification.useNotification();
  const [totalCost, setTotalCost] = useState<any>();
  useEffect(() => {
    groupData();
  }, [selectedType, revitElements]);

  let autoGroupColumnDef = {
    // showRowGroup: true,
    minWidth: 160,
    flex: 1,
    headerName: 'Group',
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

  function EditRender(props: any) {
    return (
      <div className='h-full grid content-center'>
        <Button
          onClick={(e) => {
            currentEditItem.value = props.data;
            setCheckUpdateSimilar(false);
            let assembly = '';
            let material = '';
            if (props.data.parentKey) {
              const element = revitElements.find((x) => x.id == props.data.id);
              material = element?.material as string;
              assembly = element?.assemblyCode as string;
            } else {
              if (selectedTypeRef.current == 'material') {
                material = props.data.group;
              } else if (selectedTypeRef.current == 'assemblyCode') {
                assembly = props.data.group;
              }
            }
            setForm({
              assembly: assembly,
              material: material,
            });
            setEditModalOpen(true);
          }}
        >
          Edit
        </Button>
      </div>
    );
  }

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

  const submitForm = async () => {
    if (checkUpdateSimilar || currentEditItem.value.group) {
      const parentKey = currentEditItem.value.group
        ? currentEditItem.value.group
        : currentEditItem.value.parentKey;
      const ids = ar
        .filter((x: any) => x.parentKey == parentKey)
        .map((x: any) => x.id);
      if (selectedTabEdit == 1) {
        const payload = ids.map((x: any) => ({
          id: x,
          material: form.material,
        }));

        editMaterials(payload)
          .then((res) => {
            sucessNotify();
          })
          .catch((err) => {
            editFailedNotify();
          });
      } else if (selectedTabEdit == 2) {
        const payload = ids.map((x: any) => ({
          id: x,
          assemblyCode: form.assembly,
        }));
        editAssembly(payload)
          .then((res) => {
            sucessNotify();
          })
          .catch((err) => {
            editFailedNotify();
          });
      }
    } else {
      const id = currentEditItem.value?.id;
      if (selectedTabEdit == 1) {
        editMaterials([
          {
            id,
            material: form.material,
          },
        ])
          .then((res) => {
            sucessNotify();
          })
          .catch((err) => {
            editFailedNotify();
          });
      } else if (selectedTabEdit == 2) {
        editAssembly([
          {
            id: id,
            assemblyCode: form.assembly,
          },
        ])
          .then((res) => {
            sucessNotify();
          })
          .catch((err) => {
            editFailedNotify();
          });
      }
    }
  };

  const onGridReady = () => {};

  /* Function */

  function getContextMenuItems(params: any) {
    var result = [
      {
        name: 'Edit ',
        action: () => {
          currentEditItem.value = params.node.data;
          let assembly = '';
          let material = '';
          if (params.node.data.parentKey) {
            const element = revitElements.find((x) => x.id == props.data.id);
            material = element?.material as string;
            assembly = element?.assemblyCode as string;
          } else {
            if (selectedType == 'material') {
              material = params.node.data.group;
            } else if (selectedType == 'assemblyCode') {
              assembly = params.node.data.group;
            }
          }
          setCheckUpdateSimilar(false);
          setForm({
            assembly: assembly,
            material: material,
          });
          setEditModalOpen(true);
        },
      },
    ];
    return result;
  }

  function getCostByItems(items: any) {
    let EquipmentCost = 0.0;
    let MaterialCost = 0.0;
    let LaborCost = 0.0;
    let TotalCost = 0.0;

    for (const item of items) {
      if (item.BaseCosts != null) {
        if (item.BaseCosts.EquipmentCost > 0) {
          EquipmentCost += item.BaseCosts.EquipmentCost;
        }

        if (item.BaseCosts.MaterialCost > 0) {
          MaterialCost += item.BaseCosts.MaterialCost;
        }

        if (item.BaseCosts.LaborCost > 0) {
          LaborCost += item.BaseCosts.LaborCost;
        }

        if (item.BaseCosts.EquipmentCost > 0) {
          TotalCost += item.BaseCosts.TotalCost;
        }
      }
    }

    return {
      EquipmentCost: _.round(EquipmentCost, 2),
      MaterialCost: _.round(MaterialCost, 2),
      LaborCost: _.round(LaborCost, 2),
      TotalCost: _.round(TotalCost, 2),
    };
  }

  function countAIFilled(items: any) {
    try {
      return items.filter((x: any) => x.ML_filled == 1).length;
    } catch (error) {
      console.log('error', error);
      return 0;
    }
  }
  const groupData = () => {
    if (revitElements.length > 0) {
      let array: any = [];
      let parents: any = [];
      const groupByMaterial = _.groupBy(revitElements, selectedType);

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
          BaseCosts: getCostByItems(items),
          name: `Count : ${items.length}`,
          countAi: countAIFilled(items),
          codeDescription: '',
        };

        if (selectedType == 'assmelbyCode') {
          parent.codeDescription = '';
        }

        array.push(parent);
        parents.push(parent);

        items.forEach((item, index: number) => {
          const child = {
            id: item.id,
            revitId: item.revitId,
            BaseCosts: item.baseCosts,
            LineNumber: '',
            CostShortDescription: item,
            CostDescription: '',
            group: item.id,
            name: item.typeName,
            orgHierarchy: [kk, item.revitId],
            parentKey: kk,
          };
          array.push(child);
        });
        /* End Foreach */
      });
      /* End Foreach */
      setAr(array);
      let totalCost = getCostByItems(parents);
      setTotalCost(totalCost);
    } else {
    }
  };

  const defaultColDef = {
    sortable: true,
    resizable: true,
    flex: 1,
  };

  function getDataPath(data: any) {
    return data.orgHierarchy;
  }

  /* ---- */

  /* Column */
  const [columnDefs] = useState<any>([
    {
      headerName: 'Name',
      field: 'name',
      tooltipField: 'assembly',
      editable: true,
      filter: 'agTextColumnFilter',
      resizable: true,
      width: 200,
    },
    {
      headerName: 'Price',
      resizable: true,
      flex: 1,
      minWidth: 285,
      cellRendererSelector: (params: any) => {
        return {
          component: PriceRenderer,
          params: {
            BaseCodes: params.node.data.BaseCosts,
          },
        };
      },
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

  const rowHeight = 55;
  return (
    <div className='h-full'>
      {contextHolder}

      <div className='flex flex-row gap-8 items-center mb-2'>
        {/* Radio */}
        <p className='text-[#015990]'>Choose Group Type :</p>
        <div className='field-radiobutton mt-1 flex items-center justify-between'>
          <Radio.Group
            onChange={(e) => {
              setSelectedType(e.target.value);
            }}
            value={selectedType}
          >
            <Radio value='material'>Material</Radio>
            <Radio value='category'>Category</Radio>
            <Radio value='assemblyCode'>Assembly</Radio>
          </Radio.Group>
        </div>
      </div>
      {/* Grid */}
      <div
        className='ag-theme-alpine'
        style={{ height: '100%', width: '100%' }}
      >
        <AgGridReact
          getContextMenuItems={getContextMenuItems}
          rowData={ar}
          rowSelection='multiple'
          headerHeight={30}
          detailRowAutoHeight={true}
          enableRangeSelection={true}
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
          onSelectionChanged={onSelectionChanged}
        ></AgGridReact>
        <div className='grid grid-cols-2 grid-rows-2 gap-1 mt-3 total-cost'>
          <span className=' text-2xl'>
            T.EQPMNT Cost :{totalCost?.EquipmentCost ?? 0}
          </span>
          <span className=' text-2xl'>
            T.MTRL Cost: {totalCost?.MaterialCost ?? 0}
          </span>
          <span className=' text-2xl'>
            T.LBR Cost : {totalCost?.LaborCost ?? 0}
          </span>
          <span className='text-2xl font-bold text-[#025F9A]'>
            Total Cost :{totalCost?.TotalCost ?? 0}
          </span>
        </div>
      </div>

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
                label: `Material`,
                key: '1',
                children: (
                  <Fragment>
                    <Input
                      className='mt-0 my-2 w-100'
                      placeholder='Key in new Material'
                      // style={styleInput}
                      value={form.material}
                      required
                      onChange={(e) => {
                        setForm({ ...form, material: e.target.value });
                      }}
                    />
                  </Fragment>
                ),
              },
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
              {
                label: `Cost Line`,
                key: '3',
                children: '<TableMaterial></TableMaterial>',
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

function GroupColumnShowAiFilled(props: any) {
  console.log('GroupColumnShowAiFilled', props);
  const { data } = props;

  return (
    <div>
      <p>
        {data.group}
        {data.codeDescription ? `-${data.codeDescription}` : ''}
      </p>
      {data.countAi > 0 && (
        <p className='text-[#45BCA0]'>AI Filled : {data.countAi}</p>
      )}
    </div>
  );
}
