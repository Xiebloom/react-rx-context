import { BehaviorSubject, Subject } from 'rxjs';

type CreateCountButtonStreamOptions = {
  maxCount: number;
};

export function createCountButtonStream({ maxCount }: CreateCountButtonStreamOptions) {
  const buttonClickInput$ = new Subject<undefined>();
  const buttonClickCount$ = new BehaviorSubject(0);

  const buttonInputSub = buttonClickInput$.subscribe(() => {
    const currentCount = buttonClickCount$.getValue();
    const nextCount = currentCount >= maxCount ? maxCount : currentCount + 1;
    buttonClickCount$.next(nextCount);
  });

  buttonClickInput$.next(undefined);

  return {
    observables: {
      buttonClickInput$,
      buttonClickCount$,
    },
    subscriptions: [buttonInputSub],
  };
}
