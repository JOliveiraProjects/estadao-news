import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import EnvConfig from '../../infra/env-config';

const baseQuery = fetchBaseQuery({
  baseUrl: EnvConfig.baseApiUrl,
});

export const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['news'],
});
