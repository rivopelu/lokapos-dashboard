import { Route, Routes } from 'react-router-dom';
import { BasePage } from './components/BasePage';
import { routeList } from './routes/route-list';
import { ToastContainer } from 'react-toastify';
import { toast, Toaster } from 'react-hot-toast';
import { STYLE_VARIABLE } from './constants/style-variable.tsx';
import { NotificationService } from './services/notification.service.ts';
import { useEffect } from 'react';
import { NotificationToastUi } from './components/NotificationToastUi.tsx';

export default function App() {
  const notificationService = new NotificationService();

  useEffect(() => {
    notificationService.onMessage().then((res) => {
      toast.custom((e) => <NotificationToastUi message={res} options={e} />);
    });
  }, []);

  return (
    <div className="bg-slate-100">
      <Toaster position={'top-right'} containerStyle={{ top: STYLE_VARIABLE.SIZE.TOP_BAR_HEIGHT + 12 }} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        {routeList.map((item, i) => {
          const Element = item.elements;
          return (
            <Route
              key={i}
              path={item.route}
              element={
                <BasePage type={item.type}>
                  <Element />
                </BasePage>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}
