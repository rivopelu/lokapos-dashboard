import { ReactNode } from 'react';
import { PAGE_TYPE_ENUM } from '../enums/page-type-enum';
import { SideBar } from './Sidebar';

export function BasePage(props: IProps) {
  if (props.type === PAGE_TYPE_ENUM.PRIMARY) {
    return (
      <div>
        <SideBar />
        <div>{props.children}</div>
      </div>
    );
  } else {
    return <div>{props.children}</div>;
  }
}

interface IProps {
  children: ReactNode;
  className?: string;
  type: PAGE_TYPE_ENUM;
}
