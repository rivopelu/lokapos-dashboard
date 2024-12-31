import { MdInfo } from 'react-icons/md';
import { CardBody, MainCard } from './MainLogo';
import { IconType } from 'react-icons/lib';
import { ReactNode } from 'react';

export function CustomAlert(props: IProps) {
  const Icon = props.icon;
  return (
    <MainCard>
      <CardBody className="flex justify-between items-center gap-4 text-yellow-700">
        <div className="flex gap-4">
          {Icon && (
            <div>
              <MdInfo className="text-5xl" />
            </div>
          )}
          <div>
            <h1 className="font-semibold">{props.title}</h1>
            {props.description && <p className="opacity-70">{props.description}</p>}
          </div>
        </div>
        {props.rightContent && props.rightContent}
      </CardBody>
    </MainCard>
  );
}

interface IProps {
  icon?: IconType;
  title: string;
  description?: string;
  rightContent?: ReactNode;
}
