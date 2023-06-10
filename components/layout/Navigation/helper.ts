export const getIsActiveLink = (href: string, pathname: string) => {
  if (href === "/") return pathname === href;
  return pathname.startsWith(href);
};
