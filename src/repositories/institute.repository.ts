import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MemdbDataSource} from '../datasources';
import {Institute, InstituteRelations} from '../models';

export class InstituteRepository extends DefaultCrudRepository<
  Institute,
  typeof Institute.prototype.id,
  InstituteRelations
> {
  constructor(
    @inject('datasources.memdb') dataSource: MemdbDataSource,
  ) {
    super(Institute, dataSource);
  }
}
