import { Toast, toast } from 'react-hot-toast';
import { NotificationPayload } from '@firebase/messaging';
import { IconButton } from '@mui/material';
import { MdClear } from 'react-icons/md';

export function NotificationToastUi(props: IProps) {
  const t = props.options;
  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className={'h-6 w-6 bg-green-600 rounded-full'}></div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">{props.message.title}</p>
            <p className="mt-1 text-sm text-gray-500">{props.message.body}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l items-center justify-center px-4 border-gray-200">
       <div>
         <IconButton
           onClick={() => toast.dismiss(t.id)}
         >
           <MdClear/>
         </IconButton>
       </div>
      </div>
    </div>
  );
}

interface IProps {
  options: Toast;
  message: NotificationPayload;
}
