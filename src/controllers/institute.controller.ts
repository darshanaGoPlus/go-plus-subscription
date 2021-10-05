import {api, operation, param, requestBody} from '@loopback/rest';
import {Institute} from '../models/institute.model';
import {PlanDetails} from '../models/plan-details.model';
import {Plan} from '../models/plan.model';
import {InstituteRepository, PlanDetailsRepository, PlanRepository} from "../repositories";
import {repository} from "@loopback/repository";

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Institute.
 *
 * Everything about institute
 */
@api({
  components: {
    securitySchemes: {
      examplus_auth: {
        type: 'oauth2',
        flows: {
          implicit: {
            authorizationUrl: 'http://examplus.swagger.io/oauth/dialog',
            scopes: {
              'write:institute': 'modify institute in your account',
              'read:institute': 'read your institute',
            },
          },
        },
      },
      api_key: {
        type: 'apiKey',
        name: 'api_key',
        in: 'header',
      },
    },
    schemas: {
      contactPerson: {
        type: 'object',
        required: [
          'firstName',
          'lastName',
          'emailID',
          'contactNumber',
        ],
        properties: {
          firstName: {
            type: 'string',
          },
          lastName: {
            type: 'string',
          },
          emailID: {
            type: 'string',
          },
          contactNumber: {
            type: 'string',
          },
        },
      },
      Address: {
        type: 'object',
        required: [
          'line1',
          'line2',
          'city',
          'pincode',
          'state',
        ],
        properties: {
          line1: {
            type: 'string',
          },
          line2: {
            type: 'string',
          },
          city: {
            type: 'string',
          },
          pincode: {
            type: 'string',
          },
          state: {
            type: 'string',
          },
        },
      },
      plan: {
        type: 'object',
        required: [
          'noOfExams_toBeAdded',
          'noOfStudents_toBeAdded',
          'effective_startDate',
          'durationInMonths',
          'totalPrice',
        ],
        properties: {
          noOfExams_toBeAdded: {
            type: 'integer',
            format: 'int64',
          },
          noOfStudents_toBeAdded: {
            type: 'integer',
            format: 'int64',
          },
          effective_startDate: {
            type: 'string',
            pattern: '^\\d{3}-\\d{2}-\\d{4}$',
          },
          durationInMonths: {
            type: 'integer',
            format: 'int64',
          },
          totalPrice: {
            type: 'integer',
            format: 'int64',
          },
        },
      },
      planDetails: {
        type: 'object',
        required: [
          'noOfCreditsUsed',
          'noOfCreditsRemaining',
          'noOfStudentSlotsUsed',
          'noOfStudentSlotsLeft',
          'noOfDaysRemaining',
          'subscriptionstartDate',
          'durationInMonthsleft',
          'subscriptionEndDate',
          'totalPrice',
        ],
        properties: {
          noOfCreditsUsed: {
            type: 'integer',
            format: 'int64',
          },
          noOfCreditsRemaining: {
            type: 'integer',
            format: 'int64',
          },
          noOfStudentSlotsUsed: {
            type: 'integer',
            format: 'int64',
          },
          noOfStudentSlotsLeft: {
            type: 'integer',
            format: 'int64',
          },
          noOfDaysRemaining: {
            type: 'integer',
            format: 'int64',
          },
          subscriptionstartDate: {
            type: 'string',
            pattern: '^\\d{3}-\\d{2}-\\d{4}$',
          },
          durationInMonthsleft: {
            type: 'integer',
            format: 'int64',
          },
          subscriptionEndDate: {
            type: 'string',
            pattern: '^\\d{3}-\\d{2}-\\d{4}$',
          },
        },
      },
      Institute: {
        type: 'object',
        required: [
          'id',
          'name',
          'address',
          'contactPerson',
          'plan',
          'status',
          'branches',
        ],
        properties: {
          id: {
            type: 'string'
            //example: 'INS001',
          },
          name: {
            type: 'string'
            //example: 'Oxford University',
          },
          address: {
            $ref: '#/components/schemas/Address',
          },
          contactPerson: {
            $ref: '#/components/schemas/contactPerson',
          },
          plan: {
            $ref: '#/components/schemas/plan',
          },
          status: {
            type: 'string',
            enum: [
              'Active',
              'InActive',
              'AboutToExpire',
              'Cancelled',
            ],
          },
          branches: {
            type: 'string'
            //example: 'Electrical',
          },
        },
      },
      ApiResponse: {
        type: 'object',
        properties: {
          code: {
            type: 'integer',
            format: 'int32',
          },
          type: {
            type: 'string',
          },
          message: {
            type: 'string',
          },
        },
      },
    },
  },
  paths: {},
})
export class InstituteController {
  constructor(@repository(InstituteRepository)private repo:InstituteRepository,
              @repository(PlanRepository)private repo_plan:PlanRepository,
              @repository(PlanDetailsRepository)private repo_planDetails:PlanDetailsRepository) {}

/*@repository(PlanRepository)
private repo_plan:PlanRepository) {}*/

  /**
   *
   *
   * @param id Institute id
   * @param _requestBody Institute object that needs to be added
   */
  @operation('post', '/institute/{id}', {
  tags: [
    'Institute',
  ],
  summary: 'Add a new institute',
  description: '',
  operationId: 'addInstitute',
  parameters: [
    {

      in: 'path',
      name: 'id',
      description: 'Institute id',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/Institute',
        },
      },
    },
    description: 'Institute object that needs to be added',
    required: true,
  },
  responses: {
    '405': {
      description: 'Invalid input',
    },
  },
  security: [
    {
      examplus_auth: [
        'write:institute',
        'read:institute',
      ],
    },
  ],
})
  async addInstitute(@param({
  in: 'path',
  name: 'id',
  description: 'Institute id',
  required: true,
  schema: {
    type: 'string',
  },
}) id: string, @requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/Institute',
      },
    },
  },
  description: 'Institute object that needs to be added',
  required: true,
}) _requestBody: Institute): Promise<unknown> {
    return this.repo.create(_requestBody);
  }

  /**
   *
   *
   * @param id Institute id
   * @param _requestBody Institute object that needs to be added to the store
   */
  @operation('put', '/institute/{id}', {
  tags: [
    'Institute',
  ],
  summary: 'Update an existing institute',
  description: '',
  operationId: 'updateInstitute',
  parameters: [
    {
      in: 'path',
      name: 'id',
      description: 'Institute id',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/Institute',
        },
      },
    },
    description: 'Institute object that needs to be added to the store',
    required: true,
  },
  responses: {
    '400': {
      description: 'Invalid ID supplied',
    },
    '404': {
      description: 'Institute not found',
    },
    '405': {
      description: 'Validation exception',
    },
  },
  security: [
    {
      examplus_auth: [
        'write:institute',
        'read:institute',
      ],
    },
  ],
})
  async updateInstitute(@param({
  in: 'path',
  name: 'id',
  description: 'Institute id',
  required: true,
  schema: {
    type: 'string',
  },
}) id: string, @requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/Institute',
      },
    },
  },
  description: 'Institute object that needs to be added to the store',
  required: true,
}) _requestBody: Institute): Promise<unknown> {
    return this.repo.update(_requestBody);
  }

  /**
   * Returns a single Institute
   *
   * @param id ID of Institute to return
   * @returns successful operation
   */
  @operation('get', '/institute/{id}', {
  tags: [
    'Institute',
  ],
  summary: 'Find Institute by ID',
  description: 'Returns a single Institute',
  operationId: 'getInstituteById',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'ID of Institute to return',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    '200': {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Institute',
          },
        },
      },
    },
    '400': {
      description: 'Invalid ID supplied',
    },
    '404': {
      description: 'Institute not found',
    },
  },
  security: [
    {
      api_key: [],
    },
  ],
})
  async getInstituteById(@param({
  name: 'id',
  in: 'path',
  description: 'ID of Institute to return',
  required: true,
  schema: {
    type: 'string',
    format: 'int64'
  },
}) id: string): Promise<Institute> {
    //return this.repo.findById(id);
    return this.repo.findById(id);
  }

  /**
   *
   *
   * @param api_key 
   * @param id Institute id to delete
   */
  @operation('delete', '/institute/{id}', {
  tags: [
    'Institute',
  ],
  summary: 'Deletes an institute',
  description: '',
  operationId: 'deleteInstitute',
  parameters: [
    {
      name: 'api_key',
      in: 'header',
      required: false,
      schema: {
        type: 'string',
      },
    },
    {
      name: 'id',
      in: 'path',
      description: 'Institute id to delete',
      required: true,
      schema: {
        type: 'string',
        format: 'int64',
      },
    },
  ],
  responses: {
    '200': {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: {
            "Status": "OK",
          },
        },
      },
    },
    '400': {
      description: 'Invalid ID supplied',
    },
    '404': {
      description: 'Institute not found',
    },
  },
  security: [
    {
      examplus_auth: [
        'write:institute',
        'read:institute',
      ],
    },
  ],
})
  async deleteInstitute(@param({
  name: 'api_key',
  in: 'header',
  required: false,
  schema: {
    type: 'string',
  },
}) api_key: string | undefined, @param({
  name: 'id',
  in: 'path',
  description: 'Institute id to delete',
  required: true,
  schema: {
    type: 'string',
    format: 'int64',
  },
}) id: string): Promise<unknown> {
    return this.repo.deleteById(id);
  }

  /**
   * Multiple status values can be provided with comma separated strings
   *
   * @param status Status values that need to be considered for filter
   * @returns successful operation
   */
  @operation('get', '/institute/findByStatus', {
  tags: [
    'Institute',
  ],
  summary: 'Finds Institute by status',
  description: 'Multiple status values can be provided with comma separated strings',
  operationId: 'findInstituteByStatus',
  parameters: [
    {
      name: 'status',
      in: 'query',
      description: 'Status values that need to be considered for filter',
      required: true,
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'string',
          enum: [
            'active',
            'inactive',
            'about-to-expire',
            'all',
          ],
          default: 'all',
        },
      },
    },
  ],
  responses: {
    '200': {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Institute',
            },
          },
        },
      },
    },
    '400': {
      description: 'Invalid status value',
    },
  },
  security: [
    {
      examplus_auth: [
        'write:institute',
        'read:institute',
      ],
    },
  ],
})
  async findInstituteByStatus(@param({
  name: 'status',
  in: 'query',
  description: 'Status values that need to be considered for filter',
  required: true,
  explode: true,
  schema: {
    type: 'array',
    items: {
      type: 'string',
      enum: [
        'active',
        'inactive',
        'about-to-expire',
        'all',
      ],
      default: 'all',
    },
  },
}) status: ('Active' | 'Inactive' | 'AboutToExpire' | 'Cancelled')[]): Promise<Institute[]> {
    //return this.repo.find({where: {status: "Active"}}); //checkk
    return [];
  }

  /**
   * Displays the current plan selected by the institute
   *
   * @param id id of the Institute required to fetch plan
   * @returns successful operation
   */
  @operation('get', '/institute/{id}/current_plan', {
  tags: [
    'Institute',
  ],
  summary: 'gets the plan selected for the institute',
  description: 'Displays the current plan selected by the institute',
  operationId: 'getInstituteCurrentPlan',
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'id of the Institute required to fetch plan',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    '200': {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/planDetails',
            },
          },
        },
      },
    },
    '400': {
      description: 'Invalid status value',
    },
  },
  security: [
    {
      examplus_auth: [
        'write:institute',
        'read:institute',
      ],
    },
  ],
})
  async getInstituteCurrentPlan(@param({
  name: 'id',
  in: 'path',
  description: 'id of the Institute required to fetch plan',
  required: true,
  schema: {
    type: 'string',
  },
}) id: string): Promise<Institute> {
    return this.repo.findById(id);
  }

  /**
   * creates new plan for the institute
   *
   * @param id Institute id
   * @param _requestBody Plan object that needs to be added
   */
  @operation('post', '/institute/{id}/createNewPlan', {
  tags: [
    'Institute',
  ],
  summary: 'creates a new plan for the institute',
  description: 'creates new plan for the institute',
  operationId: 'postNewInstitutePlan',
  parameters: [
    {
      in: 'path',
      name: 'id',
      description: 'Institute id',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/plan',
        },
      },
    },
    description: 'Plan object that needs to be added',
    required: true,
  },
  responses: {
    '405': {
      description: 'Invalid input',
    },
  },
  security: [
    {
      examplus_auth: [
        'write:institute',
        'read:institute',
      ],
    },
  ],
})
  async postNewInstitutePlan(@param({
  in: 'path',
  name: 'id',
  description: 'Institute id',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
  },
}) id: number, @requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/plan',
      },
    },
  },
  description: 'Plan object that needs to be added',
  required: true,
}) _requestBody: Plan): Promise<unknown> {
    return this.repo_plan.create(_requestBody);
  }

  /**
   * renews plan for the institute
   *
   * @param id Institute id
   * @param _requestBody Plan object that needs to be renewed
   */
  @operation('put', '/institute/{id}/renewPlan', {
  tags: [
    'Institute',
  ],
  summary: 'renews plan for the institute',
  description: 'renews plan for the institute',
  operationId: 'putRenewInstitutePlan',
  parameters: [
    {
      in: 'path',
      name: 'id',
      description: 'Institute id',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/plan',
        },
      },
    },
    description: 'Plan object that needs to be renewed',
    required: true,
  },
  responses: {
    '405': {
      description: 'Invalid input',
    },
  },
  security: [
    {
      examplus_auth: [
        'write:institute',
        'read:institute',
      ],
    },
  ],
})
  async putRenewInstitutePlan(@param({
  in: 'path',
  name: 'id',
  description: 'Institute id',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
  },
}) id: number, @requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/plan',
      },
    },
  },
  description: 'Plan object that needs to be renewed',
  required: true,
}) _requestBody: Institute): Promise<unknown> {
    return this.repo.update(_requestBody);
  }

}

