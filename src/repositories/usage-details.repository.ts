import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MemdbDataSource} from '../datasources';
import {UsageDetails, UsageDetailsRelations} from '../models';

export class UsageDetailsRepository extends DefaultCrudRepository<
  UsageDetails,
  typeof UsageDetails.prototype.id,
  UsageDetailsRelations
> {
  constructor(
    @inject('datasources.memdb') dataSource: MemdbDataSource,
  ) {
    super(UsageDetails, dataSource);
  }
}
