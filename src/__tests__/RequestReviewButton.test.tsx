import { render } from '@testing-library/react';
import { RequestReviewButton } from '../components/request-review-button';

jest.mock('../featureFlagClient/ffHook.tsx', () => ({
  useFeatureFlag(key: string) {
    return ['red'];
  },
}));

describe('RequestReviewButton', () => {
  it('renders a button with the correct background color', () => {
    const { getByRole } = render(<RequestReviewButton />);
    const buttonStyle = window.getComputedStyle(getByRole('button'));
    expect(buttonStyle['background-color']).toBe('red');
  });
});
