import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'memdb',
  connector: 'memory',
  localStorage: '',
  file: ''
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MemdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'memdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.memdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
