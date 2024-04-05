export type SidebarLinks = {
  title: string;
  icon: React.ReactNode;
  href: string;
  isExternal?: boolean;
};

type SidebarLinksType = {
  [key: string]: SidebarLinks[];
}[keyof { [key: string]: SidebarLinks[] }];

const navlinks: SidebarLinksType = [{}];
