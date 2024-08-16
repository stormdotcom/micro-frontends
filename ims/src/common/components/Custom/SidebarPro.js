/* eslint-disable no-unused-vars */
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { STATE_REDUCER_KEY } from "../../../modules/user/home/constants";
import logo from "../../../assets/images/hm_logo.png";
import PROJECT_PROPS from "../../../../projectconfig";

const SidebarPro = ({ menu }) => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector((state) => state[STATE_REDUCER_KEY].isMenuOpen);

    return (
        <Sidebar
            collapsed={!isMenuOpen}
            width="270px"
            collapsedWidth="80px"
            rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    backgroundColor: "#ffffff",
                    color: "#000000"
                }
            }}
        >
            {/* Sidebar Header */}
            <div
                style={{
                    padding: "16px",
                    textAlign: "center",
                    borderBottom: "1px solid grey",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: isMenuOpen ? "flex-start" : "center"
                }}
            >
                <img
                    src={logo} // Replace with your logo path
                    alt="Brand Logo"
                    style={{
                        width: isMenuOpen ? "40px" : "30px",
                        height: "auto",
                        marginRight: isMenuOpen ? "10px" : "0",
                        transition: "margin 0.3s"
                    }}
                />
                {isMenuOpen && (
                    <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#000000" }}>
                        {PROJECT_PROPS.BRAND}
                    </span>
                )}
            </div>

            {/* Sidebar Menu */}
            <Menu
                menuItemStyles={{
                    button: ({ level, active }) => {
                        return {
                            color: active ? "#ffffff" : "#d1d5db",
                            backgroundColor: active ? "#1f2937" : "transparent",
                            ["&.active"]: {
                                backgroundColor: "#1f2937",
                                color: "#fff"
                            }
                        };
                    }
                }}
            >
                {menu.map((item) => (
                    item.children ? (
                        <SubMenu
                            key={item.title}
                            label={<p className="text-black"> {item.title}</p>}
                            icon={<item.icon className="text-black w-5 h-5" />}
                            rootStyles={{
                                backgroundColor: "#ffffff",
                                borderBottom: "1px solid grey"
                            }}
                        >
                            {item.children.map((child) => (
                                <MenuItem
                                    icon={child.icon && <child.icon className="text-black w-5 h-5" />}
                                    key={child.title}
                                    component={<Link to={child.to} />}
                                >
                                    <p className="text-black">{child.title}</p>
                                </MenuItem>
                            ))}
                        </SubMenu>
                    ) : (
                        <MenuItem
                            key={item.title}
                            icon={<item.icon className="text-black w-5 h-5" />}
                            component={<Link to={item.to} />}
                        >
                            <p className="text-black">{item.title}</p>
                        </MenuItem>
                    )
                ))}
            </Menu>
        </Sidebar>
    );
};

export default SidebarPro;
