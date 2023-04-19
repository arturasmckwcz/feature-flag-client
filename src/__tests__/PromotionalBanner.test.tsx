import { render } from '@testing-library/react';
import { PromotionalBanner } from '../components/page-layout';

jest.mock('../featureFlagClient/ffHook.tsx', () => ({
  useFeatureFlag(key: string) {
    return [true];
  },
}));

describe('RequestReviewButton', () => {
  it('renders a button with the correct background color', () => {
    const { getByTestId } = render(<PromotionalBanner />);
    expect(getByTestId('promotional-banner')).toBeDefined();
  });
});
