import { useDataConstants } from '../../hooks/useDataConstants.ts';
import { useState } from 'react';

export function useSettingPage() {

  const [activeIndex, setActiveIndex] = useState(0);
  const dataSidebar = useDataConstants().settingPageMenuList



  return {dataSidebar, setActiveIndex, activeIndex};
}
