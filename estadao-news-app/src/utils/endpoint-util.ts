import { FetchArgs } from '@reduxjs/toolkit/query/react';
import { ParamsStructure, queryParamsConstructor } from './query-url-constructor';

interface GenerateEndpoint extends Omit<FetchArgs, 'url' | 'headers' | 'params'> {
  params?: ParamsStructure;
  uri: string;
}

export const generateQueryProp = ({
  params,
  uri,
  ...rest
}: GenerateEndpoint): FetchArgs => {

  return {
    url: queryParamsConstructor(`${uri}`, {
      ...params,
    }),
    headers: undefined,
    validateStatus: (response : any, body: any) => {
      return response.status === 200 && body?.status !== 'ERRO';
    },
    async responseHandler(response: any) {
      return response.json();
    },
    ...rest,
  };
};
