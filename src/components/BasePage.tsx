import { ReactNode } from 'react';

export function BasePage(props: IProps) {
  return <div className="bg-slate-100 border">{props.children}</div>;
}

interface IProps {
  children: ReactNode;
  className?: string;
}
