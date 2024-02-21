export interface BaseEndpointResponseModel<T = unknown> {
  status:
    | {
        type: string;
        description: string;
      }
    | undefined;
  data?: T;
}

export const transformBaseEndpointResponse = <T = any>(
  resp: any,
  data?: T
): BaseEndpointResponseModel<T> => {
  return {
    status: {
      type: resp?.status,
      description: resp?.descricaoStatus,
    },
    data,
  };
};
