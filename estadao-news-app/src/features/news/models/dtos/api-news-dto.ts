export interface NewsDTO {
  hat: string;
  url: string;
  title: string;
  image: string;
  thumbnail: string;
  content: string;
}

export interface NewsEntities extends NewsDTO {
  id: string
}

export interface NewsCompleteDTO extends NewsEntities {
  date_time_publication: string;
}

export interface NewsModel {
  id: string;
}