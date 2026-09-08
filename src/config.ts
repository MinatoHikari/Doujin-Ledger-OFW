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
    src: "/appicon.png",
    alt: "豆津账本",
    width: 1000,
    height: 1000,
    type: "image/png",
  },
  twitter: "",
};

export type SidebarItem = {
  text: string;
  header?: boolean;
  link?: string;
  description?: string;
};

export const SIDEBAR: SidebarItem[] = [
  { text: "核心", header: true },
  {
    text: "前言/首次打开",
    link: "/core/introduction",
    description: "了解豆津账本是什么、能做什么，以及首次打开时的使用说明",
  },
  {
    text: "开展前准备",
    link: "/core/prepare",
    description: "出摊前如何录入货品、设置价格与库存，做好开展准备",
  },
  {
    text: "单据",
    link: "/core/tickets",
    description: "如何创建、编辑与管理交易单据",
  },
  {
    text: "快照",
    link: "/core/snapshot",
    description: "使用快照保存与恢复摊位数据状态",
  },

  { text: "进阶", header: true },
  {
    text: "多人协作",
    link: "/advanced/cooperate",
    description: "多人同时记账与协作出摊的使用方法",
  },
  {
    text: "同步快照/货品",
    link: "/advanced/sync-data",
    description: "在设备之间同步快照与货品数据",
  },
  {
    text: "使用远程数据库",
    link: "/advanced/remote-database",
    description: "连接远程数据库实现跨设备数据共享",
  },
  {
    text: "数据迁移/备份",
    link: "/advanced/backup",
    description: "导出导入货品与订单、CSV 编辑规范与备份迁移",
  },

  { text: "页面图文说明", header: true },
  {
    text: "新单据",
    link: "/explain/tickets",
    description: "新单据页面的图文操作说明",
  },
  {
    text: "对账",
    link: "/explain/statistics",
    description: "对账与统计页面的图文操作说明",
  },
  {
    text: "快照",
    link: "/explain/snapshot",
    description: "快照页面的图文操作说明",
  },
  {
    text: "货品",
    link: "/explain/goods",
    description: "货品管理页面的图文操作说明",
  },
  {
    text: "设置",
    link: "/explain/settings",
    description: "设置页面的图文操作说明",
  },

  { text: "其他", header: true },
  {
    text: "版本历史",
    link: "/others/log",
    description: "豆津账本各版本更新记录",
  },
  {
    text: "常见问题",
    link: "/others/questions",
    description: "使用豆津账本时的常见问题与解答",
  },
  {
    text: "下载渠道",
    link: "/others/download",
    description: "官方安装包下载渠道与获取方式",
  },
  {
    text: "关于豆津账本",
    link: "/others/about",
    description: "关于豆津账本、使用须知与讨论群组",
  },
];

export const LastestRelease = {
  url: "https://openlist.ztzl.moe/d/tianyi/doujin-ledger-3.3.0.apk?sign=GK-0Tc-JlJeQDwWGVspo5Doq5pNv8qPumZs7sSkUtgM=:0",
  version: "3.3.0",
};
