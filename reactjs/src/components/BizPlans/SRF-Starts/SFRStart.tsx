import { Table } from "antd";
import { Fragment } from "react";
import { dataSourceSRF } from "./dataSource";
import "./SRF.scss";
export default function SFRStart() {
  const columns: any = [
    {
      title: "SFR Starts",
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
          render: (text: any, record: any) => (
            <>
            {
              console.log('record', record)
            }
              {record.avg == "Lost Price" ? (
                <span className="font-bold">{text}</span>
              ) : (
                <span>{text}</span>
              )}
            </>
          ),
        },
        {
          title: "",
          dataIndex: "avg",
          className: "avg",
          key: "avg",
          align: "center",
          width: "150",
        },
        {
          title: "",
          dataIndex: "gm",
          key: "gm",
          className: "gm",
          align: "center",
          width: "150",
        },
        {
          title: "",
          dataIndex: "spec",
          key: "spec",
          align: "center",
          className: "spec",
          width: "150",
        },
        {
          title: "",
          dataIndex: "backlog",
          key: "backlog",
          className: "backlog",
          align: "center",
          width: "150",
        },
        {
          title: "",
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
      <div className="srf-starts">
        <Table
          columns={columns}
          dataSource={dataSourceSRF}
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
                      <span className="font-bold text-center">39</span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">
                          Pre sold started
                        </li>
                        <li className="font-bold text-center">
                          Pre sold not started
                        </li>
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
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={20}>
                    <span >*</span>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0} colSpan={6}>
                    <div></div>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">
                        House Revenue
                        </li>
                        <li className="font-bold text-center">
                        House Gross $
                        </li>
                        <li className="font-bold text-center">GM %</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="text-center">4.448.000
</li>
                        <li className="text-center">1.159.460
</li>
                        <li className="font-bold text-center">26,1%
</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="text-center">8.931.233</li>
                        <li className="text-center">2.391.279</li>
                        <li className="font-bold text-center">26,8%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="text-center">4.529.233</li>
                        <li className="text-center">1.273.239</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1} className="bg-gray">
                      <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">4.529.233</li>
                        <li className="text-center">1.273.239</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">8.931.233</li>
                        <li className="text-center">2.391.279</li>
                        <li className="font-bold text-center">26,8%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">4.529.233</li>
                        <li className="text-center">1.273.239</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">8.931.233</li>
                        <li className="text-center">2.391.279</li>
                        <li className="font-bold text-center">26,8%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">4.529.233</li>
                        <li className="text-center">1.273.239</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">8.931.233</li>
                        <li className="text-center">2.391.279</li>
                        <li className="font-bold text-center">26,8%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">4.529.233</li>
                        <li className="text-center">1.273.239</li>
                        <li className="font-bold text-center">16</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">8.931.233</li>
                        <li className="text-center">2.391.279</li>
                        <li className="font-bold text-center">26,8%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">4.529.233</li>
                        <li className="text-center">1.273.239</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={20}>
                    <span >*</span>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0} colSpan={6}>
                    <div></div>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">
                        House Revenue
                        </li>
                        <li className="font-bold text-center">GM %</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="text-center">4.448.000
</li>
                        <li className="font-bold text-center">26,1%
</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="text-center">8.931.233</li>
                        <li className="font-bold text-center">26,8%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="text-center">4.529.233</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1} className="bg-gray">
                      <ul>
                        <li className="font-bold text-center">28</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">4.529.233</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">8.931.233</li>
                        <li className="font-bold text-center">26,8%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">4.529.233</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">8.931.233</li>
                        <li className="font-bold text-center">26,8%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">4.529.233</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">8.931.233</li>
                        <li className="font-bold text-center">26,8%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">4.529.233</li>
                        <li className="font-bold text-center">16</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">8.931.233</li>
                        <li className="font-bold text-center">26,8%</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">4.529.233</li>
                        <li className="font-bold text-center">23.3%</li>
                      </ul>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={20}>
                    <span >*</span>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0} colSpan={6}>
                    <div></div>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                      <ul>
                        <li className="font-bold text-center">
                        Rental Income
                        </li>
                        <li className="font-bold text-center">EL Revenue</li>
                        <li className="font-bold text-center">EL Cost</li>
                        <li className="font-bold text-center">EL Profit</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                      </ul>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                    <ul>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                        <li className="text-center">0</li>
                      </ul>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={20}>
                    <div style={{height: "25px"}}></div>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0} colSpan={6}>
                      <div></div>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                        <span className="font-bold text-center">
                        SFR Cash Out

                        </span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                        <span className="text-center">
                       0
                        </span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                        <span className="text-center">
                       0
                        </span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                        <span className="text-center">
                       0
                        </span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                        <span className="text-center">
                       0
                        </span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                        <span className="text-center">
                       0
                        </span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                        <span className="text-center">
                       0
                        </span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                        <span className="text-center">
                       0
                        </span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                        <span className="text-center">
                       0
                        </span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                        <span className="text-center">
                       0
                        </span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                        <span className="text-center">
                       0
                        </span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                        <span className="text-center">
                       0
                        </span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                        <span className="text-center">
                       0
                        </span>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={1}>
                        <span className="text-center">
                       0
                        </span>
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
