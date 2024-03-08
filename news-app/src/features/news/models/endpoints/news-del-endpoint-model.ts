import {
  BaseEndpointResponseModel,
  transformBaseEndpointResponse,
} from '../../../../services/api-service/models/base-endpoint-response-model';
import { NewsModel } from '../dtos/api-news-dto';

export interface NewsDelRequestModel extends NewsModel {}

export interface NewsDelResponseModel extends BaseEndpointResponseModel { }

export const transformNewsDelResponse = ({
  newsDTO,
  ...rest
}: any): NewsDelResponseModel => {
  return transformBaseEndpointResponse(rest, newsDTO);
};
