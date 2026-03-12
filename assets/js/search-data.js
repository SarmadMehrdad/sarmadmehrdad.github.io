// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Search, filter by topic and publication type, and browse my publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research-statement",
          title: "Research Statement",
          description: "Research Statement downloadable PDF.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research-statement/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae and downloadable PDF.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-thesis",
          title: "Thesis",
          description: "Dissertation overview and downloadable PDF.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/thesis/";
          },
        },{id: "nav-personal",
          title: "Personal",
          description: "This page is the less formal side of the website. It is where I let the site breathe a little.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/";
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
