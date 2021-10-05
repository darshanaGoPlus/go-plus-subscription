import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {OpenapiDataSource} from '../datasources';

import {Institute} from '../models/institute.model';
import {PlanDetails} from '../models/plan-details.model';
import {Plan} from '../models/plan.model';

/**
 * The service interface is generated from OpenAPI spec with operations tagged
 * by Institute.
 * Everything about institute
 */
export interface InstituteService {
  /**
   * @param id Institute id
   * @param _requestBody Institute object that needs to be added
   */
  addInstitute(id: string, _requestBody: Institute): Promise<unknown>;

  /**
   * @param id Institute id
   * @param _requestBody Institute object that needs to be added to the store
   */
  updateInstitute(id: string, _requestBody: Institute): Promise<unknown>;

  /**
   * Returns a single Institute
   * @param id ID of Institute to return
   * @returns successful operation
   */
  getInstituteById(id: string): Promise<Institute>;

  /**
   * @param api_key 
   * @param id Institute id to delete
   */
  deleteInstitute(api_key: string | undefined, id: string): Promise<unknown>;

  /**
   * Multiple status values can be provided with comma separated strings
   * @param status Status values that need to be considered for filter
   * @returns successful operation
   */
  findInstituteByStatus(status: ('active' | 'inactive' | 'about-to-expire' | 'all')[]): Promise<Institute[]>;

  /**
   * Displays the current plan selected by the institute
   * @param id id of the Institute required to fetch plan
   * @returns successful operation
   */
  getInstituteCurrentPlan(id: string): Promise<PlanDetails[]>;

  /**
   * creates new plan for the institute
   * @param id Institute id
   * @param _requestBody Plan object that needs to be added
   */
  postNewInstitutePlan(id: number, _requestBody: Plan): Promise<unknown>;

  /**
   * renews plan for the institute
   * @param id Institute id
   * @param _requestBody Plan object that needs to be renewed
   */
  putRenewInstitutePlan(id: number, _requestBody: Plan): Promise<unknown>;

}

export class InstituteServiceProvider implements Provider<InstituteService> {
  constructor(
    // openapi must match the name property in the datasource json file
    @inject('datasources.openapi')
    protected dataSource: OpenapiDataSource = new OpenapiDataSource(),
  ) {}

  async value(): Promise<InstituteService> {
    const service = await getService<{apis: {'Institute': InstituteService}}>(
      this.dataSource,
    );
    return service.apis['Institute'];
  }
}
