import { Table } from "antd";
import { Fragment } from "react";
import "./BizPlan.scss";
import { dataSource } from "./dataSource";
export default function BizPlanTable2() {
//   const dataSource = [
//     {
//       community: "AL",
//       key: "1",
//       name: "Mike",
//       avg: "265.000",
//       gm: "25.0%",
//       spec: "",
//       backlog: "pre sold started",
//       ofUnits: "",
//       plan: "SALES",
//       1 : "3",
//       total: 40
//     },
//     {
//       community: "Audubon Lake",
//       key: "2",
//       name: "John",
//       avg: "",
//       gm: "",
//       spec: "5",
//       backlog: "pre sold not started",
//       ofUnits: "2",
//       plan: "STARTS (from slots)",
//       1 : "4",
//       total: 40
//     },
//     {
//       community: "FM",
//       key: "2",
//       name: "John",
//       gm: "",
//       spec: "",
//       avg: "Sales Person",
//       backlog: "spec started",
//       ofUnits: "",
//       plan: "SETTLEMENTS",
//       1 : "0",
//       total: 40
//     },
//   ];

  const columns = [
    {
      title: "2023 Business Plan - Elliott Homes",
      dataIndex: "name",
      key: "name",
      className: "biz-plan-column",
      children: [
        {
          title: "Community",
          dataIndex: "community",
          key: "community",
          with: "300px",
          className: "comunity",
        },
        {
          title: "Avg $   ",
          dataIndex: "avg",
          className: "avg",
          key: "avg",

          width: "150",
        },
        {
          title: "GM %",
          dataIndex: "gm",
          key: "gm",
          className: "gm",
          width: "150",
        },
        {
            title: "Spec Plan",
            dataIndex: "spec",
            key: "spec",
            className: "spec",
            width: "150",
          },
        {
          title: "Backlog to start year",
          dataIndex: "backlog",
          key: "backlog",
          className: "backlog",
          width: "150",
        },
        {
          title: "of units",
          dataIndex: "ofUnits",
          className: "ofUnits",
          key: "ofUnit",
          width: "150",
        },
        {
          title: "PLAN",
          dataIndex: "plan",
          key: "plan",
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
      children: [
        {
          title: "1",
          dataIndex: "1",
          key: "1",
        },
      ],
    },
    {
      title: "February",
      dataIndex: "february",
      key: "february",
      className: "month-col",
      children: [
        {
          title: "2",
          dataIndex: "1",
          key: "1",
        },
      ],
    },
    {
      title: "March",
      dataIndex: "march",
      key: "march",
      className: "month-col",
      children: [
        {
          title: "3",
          dataIndex: "1",
          key: "1",
        },
      ],
    },
    {
      title: "April",
      dataIndex: "april",
      key: "april",
      className: "month-col",
      children: [
        {
          title: "4",
          dataIndex: "1",
          key: "1",
        },
      ],
    },
    {
      title: "May",
      dataIndex: "may",
      key: "may",
      className: "month-col",
      children: [
        {
          title: "5",
          dataIndex: "1",
          key: "1",
        },
      ],
    },
    {
      title: "June",
      dataIndex: "address",
      key: "address",
      className: "month-col",
      children: [
        {
          title: "6",
          dataIndex: "1",
          key: "1",
        },
      ],
    },
    {
      title: "July",
      dataIndex: "july",
      key: "july",
      className: "month-col",
      children: [
        {
          title: "7",
          dataIndex: "1",
          key: "1",
        },
      ],
    },
    {
      title: "August",
      dataIndex: "august",
      key: "august",
      className: "month-col",
      children: [
        {
          title: "8",
          dataIndex: "1",
          key: "1",
        },
      ],
    },
    {
      title: "September",
      dataIndex: "september",
      key: "september",
      className: "month-col",
      children: [
        {
          title: "9",
          dataIndex: "1",
          key: "1",
        },
      ],
    },
    {
      title: "October",
      dataIndex: "october",
      key: "october",
      className: "month-col",
      children: [
        {
          title: "10",
          dataIndex: "1",
          key: "1",
        },
      ],
    },
    {
      title: "November",
      dataIndex: "november",
      key: "november",
      className: "month-col",
      children: [
        {
          title: "11",
          dataIndex: "1",
          key: "1",
        },
      ],
    },
    {
      title: "December",
      dataIndex: "december",
      key: "december",
      className: "month-col",
      children: [
        {
          title: "12",
          dataIndex: "1",
          key: "1",
        },
      ],
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      className: "month-col",
    },
  ];
  return (
    <Fragment>
      <div className="biz-plan-tbl">
        <Table columns={columns} dataSource={dataSource} bordered size="small"  />
      </div>
    </Fragment>
  );
}