import {Entity,model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Address
 * Address
 */
@model({name: 'Address'})
export class Address extends Entity{
  constructor(data?: Partial<Address>) {
    if (data != null && typeof data === 'object') {
      super(data)
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
  line1: string;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  line2: string;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  city: string;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  pincode: string;

  /**
   *
   */
  @property({required: true, jsonSchema: {
  type: 'string',
}})
  state: string;

}

export interface AddressRelations {
  // describe navigational properties here
}

export type AddressWithRelations = Address & AddressRelations;


