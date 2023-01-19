import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import { Button } from 'antd';
import { useState } from 'react';
import { getScheduleCsv } from '../../../api/aiApi';
import '../../../assets/tab-table.scss';
import ModelDetailHelper from '../ModelDetailHelper';
export default function ElementTab(props: any) {
  const [scheduleCsv, setScheduleCsv] = useState<Array<any>>([]);
  const handleGetScheduleCsv = () => {
    getScheduleCsv(props.modelId)
      .then((res) => {
        setScheduleCsv(res.data.data);
      })
      .catch((err) => {});
  };

  const [columnDefs] = useState<any>([
    {
      headerName: 'Model Id',
      field: 'Revit_id',
      tooltipField: 'modelid',
      editable: false,
      filter: 'agTextColumnFilter',
      resizable: true,
      checkboxSelection: true,
      minWidth: 150,
    },
    {
      headerName: 'Category',
      field: 'Task_Name',
      tooltipField: 'Category',
      editable: false,
      filter: 'agTextColumnFilter',
      resizable: true,
      minWidth: 150,
    },
    {
      headerName: 'Assembly Code',
      field: 'Assembly Code',
      tooltipField: 'assembly',
      editable: false,
      filter: 'agTextColumnFilter',
      resizable: true,
      minWidth: 150,
    },
  ]);

  const defaultColDef = {
    sortable: true,
    resizable: true,
    flex: 1,
  };
  const rowHeight = 50;
  return (
    <div className='h-full'>
      <Button type='primary' onClick={handleGetScheduleCsv}>
        Get Schedule
      </Button>
      <div className='ag-theme-alpine mt-2 grid-elements-height'>
        <AgGridReact
          rowData={scheduleCsv} // Row Data for Rows
          rowSelection={'multiple'}
          headerHeight={30}
          detailRowAutoHeight={true}
          suppressRowClickSelection={true}
          //  enableRangeSelection={true}
          columnDefs={columnDefs}
          rowHeight={rowHeight}
          rowMultiSelectWithClick={true}
          //  onCellClicked={handleClickCell}
          onSelectionChanged={(e) => {
            const selectedRows = e.api.getSelectedRows();
            console.log('selectedRows', selectedRows);
            ModelDetailHelper.highlightItemsByIds(
              selectedRows.map((x) => x.Revit_id.toString()),
              true
            );
          }}
          className='ag-theme-alpine z-50'
          //  autoGroupColumnDef={autoGroupColumnDef}
          getRowId={(params) => params?.data?.Revit_id}
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
        ></AgGridReact>
      </div>
    </div>
  );
}
