import {Entity,model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - usageDetails
 * usageDetails
 */
@model({name: 'usageDetails'})
export class UsageDetails extends Entity{
  constructor(data?: Partial<UsageDetails>) {
    super(data)
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({required: true, jsonSchema: {
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
  type: 'string',
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
}})
  subscriptionEndDate: string;

}

export interface UsageDetailsRelations {
  // describe navigational properties here
}

export type UsageDetailsWithRelations = UsageDetails & UsageDetailsRelations;


