import * as IoIcons from "react-icons/io";

export const orgPattern = "/:org([a-z0-9]+)/:year([0-9]{4})";

export const SidebarData = [
  {
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
    title: 'Monthly count (compact)',
    path: '/monthly-compact',
  },
  {
    title: 'Monthly count (all)',
    path: '/monthly-all',
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: 'Daily trend',
    path: '/daily',
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: 'Word cloud',
    path: '/wordcloud',
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: 'Admin tasks',
    path: '/admin-reports',
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  }
];
