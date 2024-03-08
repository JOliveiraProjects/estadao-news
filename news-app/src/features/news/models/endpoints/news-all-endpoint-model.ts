import {
  BaseEndpointResponseModel,
  transformBaseEndpointResponse,
} from '../../../../services/api-service/models/base-endpoint-response-model';

import { NewsCompleteDTO } from '../dtos/api-news-dto';

export interface NewsAllResponseModel extends BaseEndpointResponseModel<NewsCompleteDTO[] | undefined> { }

export const transformNewsAllResponse = (
  response: BaseEndpointResponseModel<NewsCompleteDTO[] | undefined>
): BaseEndpointResponseModel<NewsCompleteDTO[] | undefined> => {
  return transformBaseEndpointResponse(response, response.data);
};
