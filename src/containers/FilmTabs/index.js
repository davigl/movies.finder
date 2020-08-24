import React from 'react';
import { FaInfoCircle, FaComment } from 'react-icons/fa';

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
        <Tab>
          <ButtonTab isActive>
            <FaInfoCircle />
            <span>Details</span>
          </ButtonTab>
        </Tab>
        <Tab>
          <ButtonTab isActive>
            <FaComment />
            <span>Reviews</span>
          </ButtonTab>
        </Tab>
      </TabsWrapper>
    </BackgroundTabs>
  );
}
