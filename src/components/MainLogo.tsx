import { ReactNode } from 'react';

export function MainCard(props: IProps) {
  return <div className="bg-white border">{props.children}</div>;
}

export function CardBody(props: IProps) {
  return <div className={`p-6 ${props.children}`}>{props.children}</div>;
}
interface IProps {
  children: ReactNode;
  className?: string;
}
