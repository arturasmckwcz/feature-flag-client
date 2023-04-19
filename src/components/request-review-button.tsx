import React from 'react';

import { useFeatureFlag } from '../featureFlagClient/ffHook';
import { detailsCtaFlagKey } from '../featureFlagClient/feature-flag-config';

// Problem:
//     This should be coloured based on FF value
// Feature flag name:
//     details-section-cta-colour
// Setup:
//     Fill background color with flag value.
export const RequestReviewButton = () => {
  const [backgroundColor] = useFeatureFlag(detailsCtaFlagKey);

  return (
    <button style={{ backgroundColor: (backgroundColor as string) ?? 'grey' }}>
      Request doctor review
    </button>
  );
};
