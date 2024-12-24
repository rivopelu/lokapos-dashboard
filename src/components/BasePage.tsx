import { ReactNode } from 'react';
import { PAGE_TYPE_ENUM } from '../enums/page-type-enum';
import { SideBar } from './Sidebar';
import { STYLE_VARIABLE } from '../constants/style-variable';
import { TopBar } from './Topbar';

export function BasePage(props: IProps) {
  if (props.type === PAGE_TYPE_ENUM.PRIMARY) {
    return (
      <div className="flex">
        <SideBar />
        <TopBar />
        <div className={'  w-full flex-1'}>
          <div style={{ height: STYLE_VARIABLE.SIZE.TOP_BAR_HEIGHT }}></div>
          <div className={'grid gap-8'}>{props.children}</div>
          <div style={{ height: STYLE_VARIABLE.SIZE.TOP_BAR_HEIGHT }}></div>
        </div>
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
