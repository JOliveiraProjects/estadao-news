import {
  BaseEndpointResponseModel,
  transformBaseEndpointResponse,
} from '../../../../services/api-service/models/base-endpoint-response-model';

import { NewsCompleteDTO } from '../dtos/api-news-dto';

export interface NewsAllResponseModel extends BaseEndpointResponseModel<NewsCompleteDTO[]> { }

export const transformNewsAllResponse = ({
  newsDTO,
  ...rest
}: any): NewsAllResponseModel => {
  return transformBaseEndpointResponse(rest, newsDTO);
};
