import { Button } from '@mui/material';
import { t } from 'i18next';
import { MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CardBody, MainCard } from '../components/MainLogo';
import { PageContainer } from '../components/PageContainer';
import { useDataConstants } from '../hooks/useDataConstants';

export function MasterDataPage() {
  const data = useDataConstants();

  return (
    <div className="my-10">
      <PageContainer>
        <div className="grid grid-cols-2">
          {data.listTableMasterDataPage.map((item, i) => (
            <MainCard key={i}>
              <CardBody>
                <div className="flex items-center justify-between">
                  <div className=" items-center gap-4">
                    <div className="text-2xl capitalize font-semibold">{item.title}</div>
                    <div className="pt-1 capitalize text-slate-600 italic">{item.description}</div>
                  </div>
                  <Link to={item.route}>
                    <Button endIcon={<MdArrowForward />}>{t('visit')}</Button>
                  </Link>
                </div>
              </CardBody>
            </MainCard>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
