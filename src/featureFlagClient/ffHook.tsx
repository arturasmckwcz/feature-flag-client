import { useEffect, useState } from 'react';

import { getFeatureFlagValue } from './client';

export const useFeatureFlag = (ffKey: string) => {
  const [featureFlag, setFeatureFlag] = useState<unknown>();

  useEffect(() => {
    const ffValue = getFeatureFlagValue(ffKey);
    setFeatureFlag(ffValue);
  }, [ffKey, setFeatureFlag]);

  // This hook could be used to update feature flags dynamically if there'd be an opportunity
  // to hook on a stream
  return [featureFlag, setFeatureFlag];
};
