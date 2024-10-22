import { useEffect } from 'react';
import { RxCountButtonEntry } from '../../components/CountButton';
import { CountButtonProvider } from './context';

export function RxCountButtonBlock() {
  useEffect(() => {
    console.log('btn Block mount!!!!');

    return () => {
      console.log('btn BLock unmount!!!!');
    };
  }, []);

  return (
    <CountButtonProvider maxCount={8}>
      <RxCountButtonEntry />
    </CountButtonProvider>
  );
}
