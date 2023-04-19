import React from 'react';
import { useMedication } from '../mock-data';
import { RequestReviewButton } from './request-review-button';
import { useFeatureFlag } from '../featureFlagClient/ffHook';
import { profileSectionFlagKey } from '../featureFlagClient/feature-flag-config';

// Problem:
//     This should be conditionally rendered based on feature flag enrolment.
// Feature flag name:
//     profile-render-details-section
// Setup:
//     Show to users with flag value 'variation'
export const MedicationDetails = () => {
  const [flagKey] = useFeatureFlag(profileSectionFlagKey);
  const medication = useMedication();

  return (
    <>
      {flagKey === 'variation' ? (
        <div>
          <ul>
            <li>Common side effects: {medication.sideEffects}</li>
            <li>Warning signs: {medication.warnings}</li>
          </ul>
          <p>Experiencing any of these? Please contact your doctor</p>
          <RequestReviewButton />
        </div>
      ) : null}
    </>
  );
};
