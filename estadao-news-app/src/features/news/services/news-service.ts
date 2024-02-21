import EnvConfig from '../../../infra/env-config';
import { apiService } from '../../../services/api-service/api.service';
import { generateQueryProp } from '../../../utils/endpoint-util';
import { 
  NewsAddRequestModel, 
  NewsAddResponseModel, 
  transformNewsAddResponse 
} from '../models/endpoints/news-add-endpoint-model';
import { 
  NewsAllResponseModel, 
  transformNewsAllResponse 
} from '../models/endpoints/news-all-endpoint-model';
import { 
  NewsDelRequestModel, 
  NewsDelResponseModel, 
  transformNewsDelResponse 
} from '../models/endpoints/news-del-endpoint-model';
import { 
  NewsEditRequestModel, 
  NewsEditResponseModel, 
  transformNewsEditResponse 
} from '../models/endpoints/news-edit-endpoint-model';
import { NewsOneRequestModel } from '../models/endpoints/news-one-endpoint-model';

export const authService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getAllNews: builder.query<NewsAllResponseModel, void>({
      query: () =>
        generateQueryProp({
          uri: `http://localhost:3001/news`,
          method: 'GET'
        }),
      transformResponse: transformNewsAllResponse,
    }),
    getOneNews: builder.query<NewsAllResponseModel, NewsOneRequestModel>({
      query: (args) =>
        generateQueryProp({
          uri: `${EnvConfig.baseApiUrl}/news/${args.id}`,
          method: 'GET'
        }),
      transformResponse: transformNewsAllResponse,
    }),
    addNews: builder.mutation<NewsAddResponseModel, NewsAddRequestModel>({
      query: (args) =>
        generateQueryProp({
          uri: `${EnvConfig.baseApiUrl}/news`,
          method: 'POST',
          body: args,
        }),
      transformResponse: transformNewsAddResponse,
    }),
    editNews: builder.mutation<NewsEditResponseModel, NewsEditRequestModel>({
      query: (args) =>
        generateQueryProp({
          uri: `${EnvConfig.baseApiUrl}/news/${args.id}`,
          method: 'PUT',
          body: args,
        }),
      transformResponse: transformNewsEditResponse,
    }),
    delNews: builder.mutation<NewsDelResponseModel, NewsDelRequestModel>({
      query: (args) =>
        generateQueryProp({
          uri: `${EnvConfig.baseApiUrl}/news/${args.id}`,
          method: 'DELETE',
          body: args,
        }),
      transformResponse: transformNewsDelResponse,
    }),
  }),
  overrideExisting: false,
});

export const {
   useAddNewsMutation,
   useEditNewsMutation,
   useDelNewsMutation,
   useGetAllNewsQuery,
   useGetOneNewsQuery,
   useLazyGetOneNewsQuery
} = authService;
