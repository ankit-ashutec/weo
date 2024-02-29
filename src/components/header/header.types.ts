export interface HeaderProps {
  leftComponent?: () => React.JSX.Element | null;
  title: string;
  leftComponentPress?: () => void;
}
