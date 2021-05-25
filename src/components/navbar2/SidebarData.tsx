import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: 'Monthly count (all)',
    path: '/report/monthly-all',
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
    title: 'Monthly count (compact)',
    path: '/report/monthly-compact',
  },
  {
    title: 'Daily trend',
    path: '/report/daily',
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: 'Word cloud',
    path: '/report/wordcloud',
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: 'Admin tasks',
    path: '/report/admin-reports',
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  }
];
