import {Entity, model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - planDetails
 * planDetails
 */
@model({name: 'planDetails'})
export class PlanDetails extends Entity{
  constructor(data?: Partial<PlanDetails>) {
    super(data)
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({id : true, required: true, jsonSchema: {
      type: 'string',
    }})
  id: string;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'integer',
  format: 'int64',
  minimum: -9223372036854776000,
  maximum: 9223372036854776000,
}})
  noOfCreditsUsed: number;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'integer',
  format: 'int64',
  minimum: -9223372036854776000,
  maximum: 9223372036854776000,
}})
  noOfCreditsRemaining: number;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'integer',
  format: 'int64',
  minimum: -9223372036854776000,
  maximum: 9223372036854776000,
}})
  noOfStudentSlotsUsed: number;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'integer',
  format: 'int64',
  minimum: -9223372036854776000,
  maximum: 9223372036854776000,
}})
  noOfStudentSlotsLeft: number;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'integer',
  format: 'int64',
  minimum: -9223372036854776000,
  maximum: 9223372036854776000,
}})
  noOfDaysRemaining: number;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string'
  //pattern: '^\\d{3}-\\d{2}-\\d{4}$',
}})
  subscriptionstartDate: string;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'integer',
  format: 'int64',
  minimum: -9223372036854776000,
  maximum: 9223372036854776000,
}})
  durationInMonthsleft: number;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
  pattern: '^\\d{3}-\\d{2}-\\d{4}$',
}})
  subscriptionEndDate: string;

}

export interface PlanDetailsRelations {
  // describe navigational properties here
}

export type PlanDetailsWithRelations = PlanDetails & PlanDetailsRelations;


