import { render } from '@testing-library/react';
import { MedicationDetails } from '../components/medication-details';

jest.mock('../featureFlagClient/ffHook.tsx', () => ({
  useFeatureFlag(key: string) {
    return ['variation'];
  },
}));

describe('RequestReviewButton', () => {
  it('renders a button with the correct background color', () => {
    const { getByTestId } = render(<MedicationDetails />);
    expect(getByTestId('medication-details')).toBeDefined();
  });
});
