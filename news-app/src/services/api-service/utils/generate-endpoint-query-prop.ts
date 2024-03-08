import { FetchArgs } from '@reduxjs/toolkit/query/react';
import { ParamsStructure, queryParamsConstructor } from '../../../utils/query-url-constructor';

interface GenerateEndpoint extends Omit<FetchArgs, 'url' | 'headers' | 'params'> {
  params?: ParamsStructure;
  uri: string;
}

export const generateEndpointQueryProp = ({
  method,
  params,
  uri,
  ...rest
}: GenerateEndpoint): FetchArgs => {
  return {
    url: queryParamsConstructor(uri, {
      ...params,
    }),
    method: method,
    headers: undefined,
    validateStatus: (response, body) => {
      return response.status === 200 && body?.status !== 'ERRO';
    },
    async responseHandler(response) {
      return response.json();
    },
    ...rest,
  };
};
