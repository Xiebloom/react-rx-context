import React from 'react';
import { BehaviorSubject } from 'rxjs';

export function useBehaviorSubject<T>(s: BehaviorSubject<T>) {
  const [value, setValue] = React.useState(s.getValue());

  React.useEffect(() => {
    const sub = s.subscribe(v => setValue(v));
    return () => sub.unsubscribe();
  }, [s]);

  return value;
}
