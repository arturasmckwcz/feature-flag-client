import * as LDClient from 'launchdarkly-js-client-sdk';

import {
  detailsCtaFlagKey,
  launchBannerFlagKey,
  profileSectionFlagKey,
} from './feature-flag-config';

const context: LDClient.LDContext = {
  kind: 'user',
  key: process.env.REACT_APP_LAUNCH_DARKLY_CLIENT_ID as string,
};

const client = LDClient.initialize(
  process.env.REACT_APP_LAUNCH_DARKLY_ENVIRONMENT_KEY as string,
  context,
);

client.on('ready', () => {
  // here goes code to get ff values from LaunchDarkly API
  // But unfortunately I wasn't able to connect to the API
  // So I've mocked that simple way like bellow
});

export const getFeatureFlagValue = ffKey => {
  switch (ffKey) {
    case launchBannerFlagKey:
      return true;
    case profileSectionFlagKey:
      return 'variation';
    case detailsCtaFlagKey:
      return 'red';
  }
};
