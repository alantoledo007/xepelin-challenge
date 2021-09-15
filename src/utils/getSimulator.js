import { MOCK_TIMEOUT } from '@/constants';

export default function getSimulator(data) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(data);
    }, MOCK_TIMEOUT);
  });
}
