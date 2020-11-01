import React, { useState } from 'react';
import { GiHearts } from 'react-icons/gi';

import ShareButton from '~/components/ShareButton';

import {
  FloatButton, DonationWrapper, DonationTitle,
  Divisor, Group, Donation, DonationValue, DonationButton,
  Wrapper, OptionsImage
} from './styles';

export default function UserDonation() {
  const [show, setShow] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  function handleButton() {
    setShow(!show);
    setIsLoaded(true);
  }

  return (
    <>
      {isLoaded
         && (
         <Wrapper show={show}>
           <DonationWrapper show={show}>
             <Group>
               <DonationTitle>Monthly Donation</DonationTitle>
               <Divisor />
               <Donation>
                 <GiHearts />
                 <DonationValue>$3 / month</DonationValue>
               </Donation>
               <Donation>
                 <GiHearts />
                 <DonationValue>$5 / month</DonationValue>
               </Donation>
               <Donation>
                 <GiHearts />
                 <DonationValue>$7 / month</DonationValue>
               </Donation>
               <Donation>
                 <GiHearts />
                 <DonationValue>$10 / month</DonationValue>
               </Donation>
               <Donation>
                 <GiHearts />
                 <DonationValue>$25 / month</DonationValue>
               </Donation>
               <DonationButton href="https://www.paypal.com/donate/?hosted_button_id=VYDKE5X3V4X5C" target="_blank">
                 Start Now
               </DonationButton>
             </Group>
             <Group>
               <DonationTitle>One-Time Donation</DonationTitle>
               <Divisor />
               <Donation>
                 <DonationValue>You can also become a Spontaeous Supporter with a one-time
                   donation in any amount
                 </DonationValue>
               </Donation>
               <DonationButton href="https://www.paypal.com/donate/?hosted_button_id=VYDKE5X3V4X5C" target="_blank">
                 Give Now
               </DonationButton>
             </Group>
           </DonationWrapper>
         </Wrapper>
         )}
      <FloatButton
        onClick={handleButton}
      >
        <OptionsImage />
      </FloatButton>
    </>
  );
}
