export type NewsRequest = {
    hat: string;
    url: string;
    title: string;
    image: string;
    thumbnail: string;
    content: string;
};

export type NewsUpdateRequest = {
    id: string;
    hat: string;
    url: string;
    title: string;
    image: string;
    thumbnail: string;
    content: string;
};
  
export type NewsGetRequest = {
    id: string;
};

export interface BaseEndpointResponseModel<T = unknown> {
    status?: number;
    data?: T;
    description?: string;
}