export interface ICategoryAttribute {
  title: string;
  slug: string;
}

export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IResourceMeta {
  pagination: IPagination;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

export interface IImageData {
  data: {
    attributes: {
      url: string;
      formats: {
        small: {
          url: string;
        };
      };
    };
  };
}

export interface IAuthor {
  data: {
    attributes: {
      firstName: string;
      lastName: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

export interface IArticleAttributes {
  title: string;
  body: string;
  slug: string;
  Image: IImageData;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: IAuthor;
  keywords: string[];
}

export interface IArticle {
  id: number;
  attributes: IArticleAttributes;
}
