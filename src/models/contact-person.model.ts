import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - contactPerson
 * contactPerson
 */
@model({name: 'contactPerson'})
export class ContactPerson {
  constructor(data?: Partial<ContactPerson>) {
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
  type: 'string',
}})
  firstName: string;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  lastName: string;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  emailID: string;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  contactNumber: string;

}

export interface ContactPersonRelations {
  // describe navigational properties here
}

export type ContactPersonWithRelations = ContactPerson & ContactPersonRelations;


