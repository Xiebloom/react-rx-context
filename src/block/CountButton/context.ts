import { createCountButtonStream } from '../../creator';
import { createRxContext } from '../../lib';

export const { useContext: useCountButton, Provider: CountButtonProvider } = createRxContext({
  creator: createCountButtonStream,
});
