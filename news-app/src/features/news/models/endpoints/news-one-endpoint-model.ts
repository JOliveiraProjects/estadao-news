
import {
  BaseEndpointResponseModel,
  transformBaseEndpointResponse,
} from '../../../../services/api-service/models/base-endpoint-response-model';

import { NewsCompleteDTO, NewsModel } from '../dtos/api-news-dto';

export interface NewsOneRequestModel extends NewsModel {}

export interface NewsOneResponseModel extends BaseEndpointResponseModel<NewsCompleteDTO> { }

export const transformNewsOneResponse = ({
  newsDTO,
  ...rest
}: any): NewsOneResponseModel => {
  return transformBaseEndpointResponse(rest, newsDTO);
};
