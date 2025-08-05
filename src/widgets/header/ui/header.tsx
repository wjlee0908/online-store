import { HeaderView } from "./header-view";

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => {
  return <HeaderView title={title} />;
};
