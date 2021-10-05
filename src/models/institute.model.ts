import {Entity, model, property} from '@loopback/repository';
import {Address} from './address.model';
import {ContactPerson} from './contact-person.model';
import {Plan} from './plan.model';

/**
 * The model class is generated from OpenAPI schema - Institute
 * Institute
 */
@model({name: 'Institute'})
export class Institute extends Entity{
  constructor(data?: Partial<Institute>) {
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
  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  name: string;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  $ref: '#/components/schemas/Address',
}})
  address: Address;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  $ref: '#/components/schemas/contactPerson',
}})
  contactPerson: ContactPerson;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  $ref: '#/components/schemas/plan',
}})
  plan: Plan;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
  enum: [
    'Active',
    'InActive',
    'AboutToExpire',
    'Cancelled',
  ],
}})
  status: 'Active' | 'InActive' | 'AboutToExpire' | 'Cancelled';

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  branches: string;

}

export interface InstituteRelations {
  // describe navigational properties here
}

export type InstituteWithRelations = Institute & InstituteRelations;


