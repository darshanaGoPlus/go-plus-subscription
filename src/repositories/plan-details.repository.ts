import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MemdbDataSource} from '../datasources';
import {PlanDetails, PlanDetailsRelations} from '../models';

export class PlanDetailsRepository extends DefaultCrudRepository<
  PlanDetails,
  typeof PlanDetails.prototype.id,
  PlanDetailsRelations
> {
  constructor(
    @inject('datasources.memdb') dataSource: MemdbDataSource,
  ) {
    super(PlanDetails, dataSource);
  }
}
