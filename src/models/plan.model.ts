import {Entity, model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - plan
 * plan
 */
@model({name: 'plan'})
export class Plan extends Entity {
  constructor(data?: Partial<Plan>) {
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
  noOfExams_toBeAdded: number;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'integer',
  format: 'int64',
  minimum: -9223372036854776000,
  maximum: 9223372036854776000,
}})
  noOfStudents_toBeAdded: number;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string'
  //pattern: '^\\d{3}-\\d{2}-\\d{4}$',
}})
  effective_startDate: string;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'integer',
  format: 'int64',
  minimum: -9223372036854776000,
  maximum: 9223372036854776000,
}})
  durationInMonths: number;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'integer',
  format: 'int64',
  minimum: -9223372036854776000,
  maximum: 9223372036854776000,
}})
  totalPrice: number;

}

export interface PlanRelations {
  // describe navigational properties here
}

export type PlanWithRelations = Plan & PlanRelations;


