import React from 'react';

import { useFeatureFlag } from '../featureFlagClient/ffHook';
import { launchBannerFlagKey } from '../featureFlagClient/feature-flag-config';

// Problem:
//     This should be conditionally rendered based on feature flag enrolment.
// Feature flag name:
//     general-render-launch-banner
// Setup:
//     Show to users with flag value: true
const PromotionalBanner = () => {
  const [bannerFlag] = useFeatureFlag(launchBannerFlagKey);

  return (
    <>
      {bannerFlag ? (
        <div className='promotional-banner'>
          <p>50% launch sale! Use code TAKEHOME</p>
        </div>
      ) : null}
    </>
  );
};

export const PageLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div className={`page-layout ${className}`}>
      <PromotionalBanner />
      {children}
    </div>
  );
};
