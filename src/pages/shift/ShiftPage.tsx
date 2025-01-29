import { PageContainer } from '../../components/PageContainer.tsx';
import { useShiftPage } from './useShiftPage.ts';
import { Accordion, AccordionDetails, AccordionSummary, Avatar } from '@mui/material';
import { MdExpandMore } from 'react-icons/md';
import { t } from 'i18next';
import DateHelper from '../../helper/date-helper.ts';
import { LabelValueText } from '../../components/LabelValueText.tsx';

export function ShiftPage() {
  const page = useShiftPage();
  const dateHelper = new DateHelper();

  return (
    <div className={'mt-5'}>
      <PageContainer>
        <div className={'gap-2 grid'}>
          {page.listShift.map((item, i) => (
            <div key={i}>
              <Accordion>
                <AccordionSummary expandIcon={<MdExpandMore />}>
                  <div className={'grid grid-cols-3 gap-16  w-full'}>
                    <div className={'flex gap-4 items-center'}>
                      <div className={`h-3 w-3 ${item.is_active ? 'bg-green-600' : 'bg-red-600'} rounded-full`}></div>
                      <LabelValueText
                        label={t('start_date')}
                        value={dateHelper.toFormatDate(new Date(item.start_date), 'dd LLLL, yyyy - HH:mm')}
                      />
                    </div>
                    <LabelValueText
                      label={t('end_date')}
                      value={
                        item.end_date
                          ? dateHelper.toFormatDate(new Date(item.start_date), 'dd LLLL, yyyy - HH:mm')
                          : '-'
                      }
                    />
                    <LabelValueText label={t('merchant_name')} value={item.merchant_name} />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={'grid grid-cols-4 gap-3 mt-3'}>
                    {item.account.map((account, index) => (
                      <div key={index} className={'flex items-center gap-4 p-6 border'}>
                        <Avatar src={account.avatar} />
                        <div>
                          <div>{account.name}</div>
                          <div className={'text-slate-400'}>{account.email}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
