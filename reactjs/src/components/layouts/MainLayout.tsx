import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  MenuItemStyles,
  Sidebar,
  SubMenu,
  useProSidebar
} from "react-pro-sidebar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { BarChart } from "../../icons/BarChart";
import { Book } from "../../icons/Book";
import { Calendar } from "../../icons/Calendar";
import { Diamond } from "../../icons/Diamond";
import { Global } from "../../icons/Global";
import { InkBottle } from "../../icons/InkBottle";
import { Service } from "../../icons/Service";
import { ShoppingCart } from "../../icons/ShoppingCart";
import { Badge } from "../Badge";
import { SidebarHeader } from "../SidebarHeader";
import { Typography } from "../Typography";
import "./MainLayout.scss";
export default function MainLayout() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mail");
  type Theme = "light" | "dark";

  const themes = {
    light: {
      sidebar: {
        backgroundColor: "#fff",
        color: "#607489",
      },
      menu: {
        menuContent: "#fbfcfd",
        icon: "#0098e5",
        hover: {
          backgroundColor: "#e6f2fd",
          color: "#44596e",
        },
        active: {
          backgroundColor: "#13395e",
          color: "#b6c8d9",
        },
        disabled: {
          color: "#3e5e7e",
        },
      },
    },
    dark: {
      sidebar: {
        backgroundColor: "#0b2948",
        color: "#8ba1b7",
      },
      menu: {
        menuContent: "#082440",
        icon: "#59d0ff",
        hover: {
          backgroundColor: "#0e3052",
          color: "#b6c8d9",
        },
        active: {
          backgroundColor: "#13395e",
          color: "#b6c8d9",
        },
        disabled: {
          color: "#3e5e7e",
        },
      },
    },
  };

  const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();

  const [isRTL, setIsRTL] = React.useState<boolean>(false);
  const [theme, setTheme] = React.useState<Theme>("light");

  // handle on RTL change event
  const handleRTLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsRTL(e.target.checked);
  };

  // handle on theme change event
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const menuClasses = {
    root: "ps-menu-root",
    menuItemRoot: "ps-menuitem-root",
    subMenuRoot: "ps-submenu-root",
    button: "ps-menu-button",
    prefix: "ps-menu-prefix",
    suffix: "ps-menu-suffix",
    label: "ps-menu-label",
    icon: "ps-menu-icon",
    subMenuContent: "ps-submenu-content",
    SubMenuExpandIcon: "ps-submenu-expand-icon",
    disabled: "ps-disabled",
    active: "ps-active",
    open: "ps-open",
  };

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: {
      backgroundColor: themes[theme].menu.menuContent,
    },
    button: {
      [`&.${menuClasses.active}`]: {
        backgroundColor: themes[theme].menu.active.backgroundColor,
        color: themes[theme].menu.active.color,
      },
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: themes[theme].menu.hover.backgroundColor,
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <>
    <div>
    <div className="flex flex-col" >
    <div style={{"flex":"0 1 auto"}}>
        <nav className="bg-gray-100">
          <div className="mx-auto px-4">
          <div className="mobile-menu hidden md:hidden">
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Features
            </a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Pricing
            </a>
          </div>
            <div className="flex justify-between">
              <div className="flex space-x-4">
              <div className="flex items-center">
                <button className="mobile-menu-button" onClick={()=>collapseSidebar()}>
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
                {/* <div>
                  <a
                    href="#"
                    className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                  >
                    <svg
                      className="h-6 w-6 mr-1 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    <span className="font-bold">Better Dev</span>
                  </a>
                </div> */}
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a href="" className="py-5 px-3">
                 hoang@prediction3d.com!
                </a>
                <a
                  href=""
                  className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
                >
                  Logout
                </a>
              </div>

         
            </div>
          </div>

         
        </nav>
      </div>
      <div
        style={{
          display: "flex",
          direction: isRTL ? "rtl" : "ltr",
        }}
        // className="h-screen relative"
      >
        <Sidebar
          image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
          rtl={isRTL}
          breakPoint="lg"
          backgroundColor={themes[theme].sidebar.backgroundColor}
          rootStyles={{
            color: themes[theme].sidebar.color,
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <SidebarHeader
              style={{ marginBottom: "24px", marginTop: "16px" }}
            />
            <div style={{ flex: 1, marginBottom: "32px" }}>
              <div style={{ padding: "0 24px", marginBottom: "8px" }}>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  style={{
                    opacity: collapsed ? 0 : 0.7,
                    letterSpacing: "0.5px",
                  }}
                >
                  General
                </Typography>
              </div>
              <Menu menuItemStyles={menuItemStyles}>
                <SubMenu
                  label="Plan"
                  icon={<BarChart />}
                  // suffix={
                  //   <Badge variant="danger" shape="circle">
                  //     6
                  //   </Badge>
                  // }
                >
                  <MenuItem component={<Link to="/biz-plan" />}>Biz Plan</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                  <MenuItem>Menu Item 3</MenuItem>
                </SubMenu>
                <SubMenu label="Sub Menu" icon={<Global />}>
                  <MenuItem>Menu Item 1</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                </SubMenu>
                <SubMenu label="Sub Menu 2" icon={<InkBottle />}>
                  <MenuItem>Menu Item 1</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                </SubMenu>
                <SubMenu label="Sub Menu 3" icon={<Diamond />}>
                  <MenuItem>Menu Item 1</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                  <SubMenu label="Sub Menu 4">
                    <MenuItem>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item2</MenuItem>
                    <SubMenu label="Sub Menu 5">
                      <MenuItem>Menu Item 1</MenuItem>
                      <MenuItem>Menu Item 2</MenuItem>
                    </SubMenu>
                  </SubMenu>
                </SubMenu>
                <SubMenu label="Sub Menu" icon={<ShoppingCart />}>
                  <MenuItem>Menu Item 1</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                  <MenuItem>Menu Item 3</MenuItem>
                </SubMenu>
              </Menu>

              <div
                style={{
                  padding: "0 24px",
                  marginBottom: "8px",
                  marginTop: "32px",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={600}
                  style={{
                    opacity: collapsed ? 0 : 0.7,
                    letterSpacing: "0.5px",
                  }}
                >
                  Extra
                </Typography>
              </div>

              <Menu menuItemStyles={menuItemStyles}>
                <MenuItem
                  icon={<Calendar />}
                  suffix={<Badge variant="success">New</Badge>}
                >
                  Menu 1
                </MenuItem>
                <MenuItem icon={<Book />}>Menu 2</MenuItem>
                <MenuItem icon={<Service />}>Menu 3</MenuItem>
              </Menu>
            </div>
            {/* <SidebarFooter collapsed={collapsed} /> */}
          </div>
        </Sidebar>
        <main style={{"flexGrow":"1", "overflow":"auto"}}>
          <Outlet />
        </main>
      </div>
      </div>
      </div>
    </>
  );
}
