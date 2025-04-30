const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Committees",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "UNESCO",
        path: "/unesco",
        newTab: false,
      },
      {
        id: 32,
        title: "INTERPOL",
        path: "/interpol",
        newTab: false,
      },
      {
        id: 33,
        title: "LEGAL",
        path: "/legal",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Logistics",
    path: "/logistics",
    newTab: false,
  },
  {
    id: 5,
    title: "Schedule",
    path: "/schedule",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 7,
    title: "FAQ",
    path: "/faq",
    newTab: false,
  },
  {
    id: 8,
    title: "Team",
    path: "/team",
    newTab: false,
  },
];
export default menuData;
