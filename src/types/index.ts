import { Subscription } from 'rxjs';

export interface CreateRxContextOption<Options, Observables> {
  creator: (options: Options) => {
    observables: Observables;
    subscriptions: Subscription[];
  };
}
