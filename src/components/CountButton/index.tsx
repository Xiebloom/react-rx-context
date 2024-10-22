import { useEffect } from 'react';
import { useBehaviorSubject } from '../../hooks/useBehaviorSubject';
import { useCountButton } from '../../block/CountButton/context';

export function RxCountButtonEntry() {
  const { buttonClickCount$, buttonClickInput$ } = useCountButton();

  const count = useBehaviorSubject(buttonClickCount$) as number;

  useEffect(() => {
    console.log('btn Entry block mount!!!!');

    return () => {
      console.log('btn Entry block unmount!!!!');
    };
  }, []);

  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          buttonClickInput$.next(void 0);
        }}
      >
        button
      </button>
    </>
  );
}
