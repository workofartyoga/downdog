import { IDomainModel } from './domain-model';
import { IViewModel } from './view-model';

export interface IApplicationState {
  domain: IDomainModel;
  views: IViewModel;
}
