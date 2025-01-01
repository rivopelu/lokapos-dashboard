import { Button, Card, Divider } from '@mui/material';
import { t } from 'i18next';
import { MdAdd, MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CardBody, MainCard } from '../../components/MainLogo';
import { PageContainer } from '../../components/PageContainer';
import { useDataConstants } from '../../hooks/useDataConstants';
import { PageHeader } from '../../components/PageHeader';
import { useMasterDataPage } from './useMasterDataPage';

export function MasterDataPage() {
  const data = useDataConstants();
  const page = useMasterDataPage();

  return (
    <div className="my-10 grid gap-7">
      <PageContainer>
        <div>
          <PageHeader title={t('master_data')} />
        </div>
      </PageContainer>
      <Divider />
      <PageContainer className="g">
        <div className="grid ">
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
      <Divider />
      <PageContainer>
        <MainCard>
          <CardBody className="flex justify-between items-center">
            <h4 className="text-2xl">{t('categories')}</h4>
            <Button endIcon={<MdAdd />}>{t('add_new_category')}</Button>
          </CardBody>
          <Divider />
          <CardBody>
            <div className="grid gap-4 grid-cols-3">
              {page.listCategories.map((item, i) => (
                <MainCard key={i}>
                  <CardBody>
                    <div>{item.name}</div>
                  </CardBody>
                </MainCard>
              ))}
            </div>
          </CardBody>
        </MainCard>
      </PageContainer>
    </div>
  );
}
