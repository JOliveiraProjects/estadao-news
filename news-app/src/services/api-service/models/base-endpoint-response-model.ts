export interface BaseEndpointResponseModel<T = unknown> {
  status?: number;
  data?: T;
  description?: string;
}

export const transformBaseEndpointResponse = <T = any>(
  resp: any,
  data?: T
): BaseEndpointResponseModel<T> => {
  return {
    status: resp?.status,
    description: resp?.descricaoStatus,
    data,
  };
};
