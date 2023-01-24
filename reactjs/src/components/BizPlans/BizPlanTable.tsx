import { Fragment } from "react";

export default function BizPlanTable() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      fixed: true,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      fixed: true,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "2023 Business Plan - Elliott Homes",
      dataIndex: "name",
      key: "name",
      children: [
        {
          title: "Comunity",
          dataIndex: "name",
          key: "name",
          minWidth: 350,
        },
        {
          title: "Avg $   ",
          dataIndex: "name",
          key: "name",
          fixed: true,
          width: "150",
        },
        {
          title: "GM %",
          dataIndex: "age",
          key: "age",
          fixed: true,
          width: "150",
        },
        {
          title: "Backlog to start year",
          dataIndex: "backlog",
          key: "backlog",
          fixed: true,
          width: "150",
        },
        {
          title: "of units",
          dataIndex: "ofUnit",
          key: "ofUnit",
          fixed: true,
          width: "150",
        },
        {
          title: "Plan",
          dataIndex: "plan",
          key: "plan",
          fixed: true,
          width: "150px",
        },
      ]
    },
    {
      title: "January",
      dataIndex: "january",
      key: "january",
      width: "150px",
    },
    {
      title: "February",
      dataIndex: "february",
      key: "february",
      width: "150px",
    },
    {
      title: "March",
      dataIndex: "march",
      key: "march",
      width: "150px",
    },
    {
      title: "April",
      dataIndex: "april",
      key: "april",
      width: "150px",
    },
    {
      title: "May",
      dataIndex: "may",
      key: "may",
      width: "150px",
    },
    {
      title: "June",
      dataIndex: "address",
      key: "address",
      width: "150px",
    },
    {
      title: "July",
      dataIndex: "july",
      key: "july",
      width: "150px",
    },
    {
      title: "August",
      dataIndex: "august",
      key: "august",
    },
    {
      title: "September",
      dataIndex: "september",
      key: "september",
    },
    {
      title: "April",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "October",
      dataIndex: "october",
      key: "october",
    },
    {
      title: "November",
      dataIndex: "november",
      key: "november",
    },
    {
      title: "December",
      dataIndex: "december",
      key: "december",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
  ];

  return (
    <Fragment>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Bussiness Plan</h2>
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            {/* <colgroup>
              <col className="w-5" />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-5" />
              <col className="w-5" />
              <col className="w-5" />
              <col className="w-5" />
              <col className="w-5" />
              <col className="w-5" />
              <col className="w-5" />
            </colgroup> */}
            <thead>
              <tr className="dark:bg-gray-700">
                <th className="p-3" style={{"minWidth":"200px"}}>Comunity</th>
                <th className="p-3">AVG $%</th>
                <th className="p-3">GM%</th>
                <th className="p-3">Spec Plan</th>
                <th className="p-3">Backlog to start year</th>
                <th className="p-3"># ofUnits</th>
                <th className="p-3">PLAN</th>
                <th className="p-3">January</th>
                <th className="p-3">February</th>
                <th className="p-3">March</th>
                <th className="p-3">April</th>
                <th className="p-3 w-5">June</th>
                <th className="p-3 w-5">July</th>
                <th className="p-3 w-5">August</th>
                <th className="p-3 w-5">September</th>
                <th className="p-3 w-5">October</th>
                <th className="p-3 w-5">November</th>
                <th className="p-3 w-5">Demcember</th>
              </tr>
            </thead>
            <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
              <tr>
                <td className="px-3 dark:text-gray-400">
                  pre sol started
                </td>
                <td className="px-3 py-2">
                  <p>of unit 2</p>
                </td>
                <td className="px-3 py-2">
                  <span>UI Designer</span>
                  <p className="dark:text-gray-400">Spirit Media</p>
                </td>
                <td className="px-3 py-2">
                  <p>555-873-9812</p>
                </td>
                <td className="px-3 py-2">
                  <p>dwight@adams.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>71 Cherry Court, SO</p>
                  <p className="dark:text-gray-400">United Kingdom</p>
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    title="Open details"
                    className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-3 text-2xl font-medium dark:text-gray-400"></td>
                <td className="px-3 py-2">
                  <p>Richie Allen</p>
                </td>
                <td className="px-3 py-2">
                  <span>Geothermal Technician</span>
                  <p className="dark:text-gray-400">Icecorps</p>
                </td>
                <td className="px-3 py-2">
                  <p>555-129-0761</p>
                </td>
                <td className="px-3 py-2">
                  <p>richie@allen.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>Knesebeckstrasse 32, Obersteinebach</p>
                  <p className="dark:text-gray-400">Germany</p>
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    title="Open details"
                    className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
              <tr>
                <td className="px-3 text-2xl font-medium dark:text-gray-400">
                  B
                </td>
                <td className="px-3 py-2">
                  <p>Alex Bridges</p>
                </td>
                <td className="px-3 py-2">
                  <span>Administrative Services Manager</span>
                  <p className="dark:text-gray-400">Smilectronics</p>
                </td>
                <td className="px-3 py-2">
                  <p>555-238-9890</p>
                </td>
                <td className="px-3 py-2">
                  <p>alex@bridges.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>Hooivelden 117, Kortrijk</p>
                  <p className="dark:text-gray-400">Belgium</p>
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    title="Open details"
                    className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-3 text-2xl font-medium dark:text-gray-400"></td>
                <td className="px-3 py-2">
                  <p>Lynette Brown</p>
                </td>
                <td className="px-3 py-2">
                  <span>Camera Operator</span>
                  <p className="dark:text-gray-400">Surge Enterprises</p>
                </td>
                <td className="px-3 py-2">
                  <p>555-521-5712</p>
                </td>
                <td className="px-3 py-2">
                  <p>lynette@brown.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>22 rue de la Boétie, Poitiers</p>
                  <p className="dark:text-gray-400">France</p>
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    title="Open details"
                    className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
              <tr>
                <td className="px-3 text-2xl font-medium dark:text-gray-400">
                  C
                </td>
                <td className="px-3 py-2">
                  <p>Mariah Claxton</p>
                </td>
                <td className="px-3 py-2">
                  <span>Nuclear Technician</span>
                  <p className="dark:text-gray-400">White Wolf Brews</p>
                </td>
                <td className="px-3 py-2">
                  <p>555-654-9810</p>
                </td>
                <td className="px-3 py-2">
                  <p>mariah@claxton.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>R Oliveirinhas 71, Maia</p>
                  <p className="dark:text-gray-400">Portugal</p>
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    title="Open details"
                    className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-3 text-2xl font-medium dark:text-gray-400"></td>
                <td className="px-3 py-2">
                  <p>Hermila Craig</p>
                </td>
                <td className="px-3 py-2">
                  <span>Production Engineer</span>
                  <p className="dark:text-gray-400">Cavernetworks Co.</p>
                </td>
                <td className="px-3 py-2">
                  <p>555-091-8401</p>
                </td>
                <td className="px-3 py-2">
                  <p>hermila@craig.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>Rua da Rapina 89, Espeja</p>
                  <p className="dark:text-gray-400">Spain</p>
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    title="Open details"
                    className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}
