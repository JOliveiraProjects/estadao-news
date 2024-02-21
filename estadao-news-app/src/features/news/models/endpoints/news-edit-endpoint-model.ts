import {
  BaseEndpointResponseModel,
  transformBaseEndpointResponse,
} from '../../../../services/api-service/models/base-endpoint-response-model';

import { NewsCompleteDTO, NewsEntities } from '../dtos/api-news-dto';

export interface NewsEditRequestModel extends NewsEntities {}

export interface NewsEditResponseModel extends BaseEndpointResponseModel<NewsCompleteDTO> { }
export const transformNewsEditResponse = ({
  newsDTO,
  ...rest
}: any): NewsEditResponseModel => {
  return transformBaseEndpointResponse(rest, newsDTO);
};
