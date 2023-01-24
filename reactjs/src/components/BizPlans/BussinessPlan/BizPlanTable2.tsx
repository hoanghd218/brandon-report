import { Table } from "antd";
import { Fragment } from "react";
import "./BizPlan.scss";
import { dataSource } from "./dataSource";
export default function BizPlanTable2() {
  const columns:Array<any> = [
    {
      title: "2023 Business Plan - Elliott Homes",
      dataIndex: "name",
      key: "name",
      align: "center",
      className: "biz-plan-column",
      children: [
        {
          title: "Community",
          dataIndex: "community",
          key: "community",
          align: "center",
          with: "300px",
          className: "comunity",
          render: (text:any, record:any) => ( 
            <>
            {record.backlog == 'pre sold started' ?
            <span className="font-bold">
              {text}
            </span>
            : 
            <span>{text}</span>
            }
            </>
          ),
        },
        {
          title: "Avg $   ",
          dataIndex: "avg",
          className: "avg",
          key: "avg",
          align: "center",
          width: "150",
        },
        {
          title: "GM %",
          dataIndex: "gm",
          key: "gm",
          className: "gm",
          align: "center",
          width: "150",
        },
        {
          title: "Spec Plan",
          dataIndex: "spec",
          key: "spec",
          align: "center",
          className: "spec",
          width: "150",
        },
        {
          title: "Backlog to start year",
          dataIndex: "backlog",
          key: "backlog",
          className: "backlog",
          align: "center",
          width: "150",
        },
        {
          title: "of units",
          dataIndex: "ofUnits",
          className: "ofUnits",
          key: "ofUnit",
          align: "center",
          width: "150",
        },
        {
          title: "PLAN",
          dataIndex: "plan",
          key: "plan",
          align: "center",
          className: "plan",
          width: "150px",
        },
      ],
    },
    {
      title: "January",
      dataIndex: "1",
      key: "1",
      className: "month-col",
      align: "center",
      children: [
        {
          title: "1",
          dataIndex: "1",
          align: "center",
          key: "1",
        },
      ],
    },
    {
      title: "February",
      dataIndex: "february",
      key: "february",
      className: "month-col",
      align: "center",
      children: [
        {
          title: "2",
          dataIndex: "1",
          align: "center",
          key: "1",
        },
      ],
    },
    {
      title: "March",
      dataIndex: "march",
      key: "march",
      className: "month-col",
      align: "center",
      children: [
        {
          title: "3",
          dataIndex: "1",
          align: "center",
          key: "1",
        },
      ],
    },
    {
      title: "April",
      dataIndex: "april",
      key: "april",
      className: "month-col",
      align: "center",
      children: [
        {
          title: "4",
          dataIndex: "1",
          align: "center",
          key: "1",
        },
      ],
    },
    {
      title: "May",
      dataIndex: "may",
      key: "may",
      className: "month-col",
      align: "center",
      children: [
        {
          title: "5",
          dataIndex: "1",
          align: "center",
          key: "1",
        },
      ],
    },
    {
      title: "June",
      dataIndex: "address",
      key: "address",
      className: "month-col",
      align: "center",
      children: [
        {
          title: "6",
          dataIndex: "1",
          align: "center",
          key: "1",
        },
      ],
    },
    {
      title: "July",
      dataIndex: "july",
      key: "july",
      className: "month-col",
      align: "center",
      children: [
        {
          title: "7",
          dataIndex: "1",
          align: "center",
          key: "1",
        },
      ],
    },
    {
      title: "August",
      dataIndex: "august",
      align: "center",
      key: "august",
      className: "month-col",
      children: [
        {
          title: "8",
          dataIndex: "1",
          align: "center",
          key: "1",
        },
      ],
    },
    {
      title: "September",
      dataIndex: "september",
      key: "september",
      align: "center",
      className: "month-col",
      children: [
        {
          title: "9",
          dataIndex: "1",
          align: "center",
          key: "1",
        },
      ],
    },
    {
      title: "October",
      dataIndex: "october",
      key: "october",
      className: "month-col",
      align: "center",
      children: [
        {
          title: "10",
          dataIndex: "1",
          align: "center",
          key: "1",
        },
      ],
    },
    {
      title: "November",
      dataIndex: "november",
      align: "center",
      key: "november",
      className: "month-col",
      children: [
        {
          title: "11",
          dataIndex: "1",
          align: "center",
          key: "1",
        },
      ],
    },
    {
      title: "December",
      dataIndex: "december",
      align: "center",
      key: "december",
      className: "month-col",
      children: [
        {
          title: "12",
          dataIndex: "1",
          align: "center",
          key: "1",
        },
      ],
    },
    {
      title: "Total",
      dataIndex: "total",
      align: "center",
      key: "total",
      className: "month-col",
    },
  ];
  return (
    <Fragment>
      <div className="biz-plan-tbl">
        <Table
          columns={columns}
          dataSource={dataSource}
          bordered
          size="small"
          pagination={false}
          summary={(pageData) => {
            return (
              <>
                <Table.Summary fixed={"top"}>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0} colSpan={3}>
                    <span className="font-bold text-center">
                    TOTAL - Non-SFR Homes
                    </span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <span className="font-bold text-center">
                    39
                    </span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">Pre sold started</li>
                        <li className="font-bold text-center">Pre sold not started</li>
                        <li className="font-bold text-center">Spec Started</li>
                    </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">58</li>
                        <li className="font-bold text-center">11</li>
                        <li className="font-bold text-center">45</li>
                    </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">SALES</li>
                        <li className="font-bold text-center">Slot Starts</li>
                        <li className="font-bold text-center">SETTLEMENTS</li>
                    </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">16</li>
                    </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">16</li>
                    </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">16</li>
                    </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">16</li>
                    </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">16</li>
                    </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">16</li>
                    </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">16</li>
                    </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">16</li>
                    </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">16</li>
                    </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">16</li>
                    </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">16</li>
                    </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">16</li>
                    </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">16</li>
                    </ul>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              </>
            );
          }}
        />
      </div>
    </Fragment>
  );
}
