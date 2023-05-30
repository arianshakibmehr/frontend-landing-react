import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Overview",
    path: "/overview",
    icon: <HiIcons.HiOutlineViewGrid />,
  },
  {
    title: "Comments",
    path: "/comments",
    icon: <FaIcons.FaComments />,
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <AiIcons.AiFillCalendar />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <AiIcons.AiFillProject />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Projects1",
        path: "/projects/projects1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Projects2",
        path: "/projects/projects2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

  {
    title: "Analytics",
    path: "/analytics",
    icon: <IoIcons.IoIosAnalytics />,
  },

  {
    title: "Reports",
    path: "/reports",
    icon: <MdIcons.MdReportProblem />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Reports1",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Reports 2",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
];
