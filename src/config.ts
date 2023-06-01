export const SITE = {
  title: "豆津账本",
  description: "一个专为同人展摊主而生的记账辅助工具",
  defaultLanguage: "zh_CN",
  // twitter: "@jordienr",
  github: "MinatoHikari/Doujin-Ledger-Release",
  // linkedin: "linkedinUsername",
};

export const OPEN_GRAPH = {
  image: {
    src: "/appicon",
    alt: "/appicon",
  },
  twitter: "",
};

export const SIDEBAR = [
  { text: "核心", header: true },
  { text: "前言/首次打开", link: "/core/introduction" },
  { text: "开展前准备", link: "/core/prepare" },
  { text: "单据", link: "/core/tickets" },
  { text: "快照", link: "/core/snapshot" },

  { text: "进阶", header: true },
  { text: "多人协作", link: "/advanced/cooperate" },
  { text: "同步快照/货品", link: "/advanced/sync" },
  { text: "使用远程数据库", link: "/advanced/remote" },

  { text: "页面图文说明", header: true },
  { text: "新单据", link: "/explain/tickets" },
  { text: "对账", link: "/explain/statistics" },
  { text: "快照", link: "/explain/snapshot" },

  { text: "其他", header: true },
  { text: "版本历史", link: "/others/log" },
  { text: "下载渠道", link: "/others/download" },
  { text: "数据迁移/备份", link: "/others/backup" },
  { text: "关于豆津账本", link: "/others/about" },
];