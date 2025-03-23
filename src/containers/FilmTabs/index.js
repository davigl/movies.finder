import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import { Tab } from '@bumaga/tabs';

import { BackgroundTabs, TabsWrapper, ButtonTab } from './styles';

export default function FilmTabs() {
  return (
    <BackgroundTabs>
      <TabsWrapper>
        <Tab>
          <ButtonTab isActive>
            <FaInfoCircle />
            <span>Details</span>
          </ButtonTab>
        </Tab>
      </TabsWrapper>
    </BackgroundTabs>
  );
}
