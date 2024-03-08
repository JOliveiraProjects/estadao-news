import {
  BaseEndpointResponseModel,
  transformBaseEndpointResponse,
} from '../../../../services/api-service/models/base-endpoint-response-model';

import { NewsCompleteDTO, NewsDTO } from '../dtos/api-news-dto';


export interface NewsAddRequestModel extends NewsDTO {}

export interface NewsAddResponseModel extends BaseEndpointResponseModel<NewsCompleteDTO> { }
export const transformNewsAddResponse = ({
  newsDTO,
  ...rest
}: any): NewsAddResponseModel => {
  return transformBaseEndpointResponse(rest, newsDTO);
};
