import { SITE, SIDEBAR, type SidebarItem } from "../config";
import { formatUrl } from "./tools";

export type PageMeta = {
  pageTitle: string;
  documentTitle: string;
  description: string;
  isHome: boolean;
  sidebarItem?: SidebarItem;
};

export function getPageMeta(
  pathname: string,
  content: { title?: string; description?: string } = {}
): PageMeta {
  const currentPath = formatUrl(pathname || "/") || "/";
  const isHome = currentPath === "/";
  const sidebarItem = SIDEBAR.find(
    (item) => item.link && formatUrl(item.link) === currentPath
  );

  const pageTitle =
    content.title || sidebarItem?.text || SITE.title;
  const description =
    content.description || sidebarItem?.description || SITE.description;
  const documentTitle = isHome
    ? SITE.title
    : pageTitle === SITE.title
      ? SITE.title
      : `${pageTitle} - ${SITE.title}`;

  return {
    pageTitle,
    documentTitle,
    description,
    isHome,
    sidebarItem,
  };
}
