const menu_data = [
    {
      id: 1,
      has_dropdown: false,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      has_dropdown: false,
      title: "About Us",
      link: "/who-we-are",
    },
    {
      id: 3,
      has_dropdown: true,
      title: "Services",
      link: "#",
      sub_menus: [
        { link: "/blogger-outreach", title: "Blogger Outreach" },
        { link: "/cannabis-backlinks", title: "Cannabis Backlinks " },
        { link: "/casino-backlinks", title: "Casino Backlinks" },
        { link: "/country-specific", title: "Country Specific" },
        { link: "/guest-posting", title: "Guest Posts" },
        { link: "/link-insertion", title: "Link Insertions" },
        { link: "/saas-backlinks", title: "SaaS Backlinks" },
        { link: "/white-label-services", title: "White Label Link Building" },
      ],
    },
    {
      id: 4,
      mega_menu: false,
      has_dropdown: false,
      title: "Blog",
      link: "/blog",
      // sub_menus: [
      //   { link: "/blog", title: "Blog" },
      //   { link: "/blog-details", title: "Blog Details" },
      // ],
    },
    {
      id: 5,
      mega_menu: false,
      has_dropdown: false,
      title: "Contact",
      link: "/contact",
    },
  ];
  export default menu_data;