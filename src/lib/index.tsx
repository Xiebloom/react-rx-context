import React, { useEffect } from 'react';
import { CreateRxContextOption } from '../types';

/**
 * - 生成给 creator 提供 options 的 Provider，以组件的 props 形式传入参数给到 creator，连接 react 和 modal
 * - 提供 useContext 函数给到子组件，可利用 creator 生成的 streams
 * - 仅在初次挂载时调用 creator
 * - 组件卸载时消除副作用
 */
export function createRxContext<Options, Observables>({
  creator,
}: CreateRxContextOption<Options, Observables>) {
  const context = React.createContext<Observables>(null as unknown as Observables);
  const Provider = context.Provider;

  const useContext = () => React.useContext(context);

  return {
    useContext,
    Provider: function RxContext({ children, ...options }: React.PropsWithChildren<Options>) {
      const { observables, subscriptions } = React.useMemo(() => creator(options), []);

      useEffect(() => {
        // console.log('use creator mount!');
        return () => {
          // console.log('use creator unmount!!!');
          subscriptions.forEach(s => s.unsubscribe());
        };
      }, []);

      return <Provider value={observables}>{children}</Provider>;
    },
  };
}
