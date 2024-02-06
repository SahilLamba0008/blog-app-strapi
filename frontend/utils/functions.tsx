import { IArticle, ICategory, ICollectionResponse } from "@/lib/types";
import { differenceInDays, format, parseISO } from "date-fns";

export const handleDateFormat = (timestamp: string): string => {
  /* timestamp : 2024-01-16T12:06:02.506Z */
  const parsedDate = new Date(timestamp);
  const result = format(parsedDate, "EEEE, dd-MMM-yyyy");
  return result;
};

export const totalPublishedDays = (timeStamp: string): string => {
  const parsedDate = parseISO(timeStamp);
  const currentDate = new Date();
  const daysDifference = differenceInDays(parsedDate, currentDate);
  return daysDifference
    .toString()
    .substring(1); /* to remove '-' from start, as output is eg."-10"*/
};

export const getKeywordClasses = (keywordLength: number) => {
  switch (true) {
    case keywordLength <= 4:
      return "bg-green-100 text-green-500";
    case keywordLength >= 5 && keywordLength <= 8:
      return "bg-red-100 text-red-400";
    case keywordLength > 8 && keywordLength <= 12:
      return "bg-purple-100 text-purple-500";
    case keywordLength === 7:
      return "bg-blue-100 text-blue-500";
    case keywordLength > 12 && keywordLength <= 14:
      return "bg-pink-100 text-pink-500";
    default:
      return "bg-orange-100 text-orange-500";
  }
};

export const getAllBlogs = async (): Promise<
  ICollectionResponse<IArticle[]>
> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      } // Prevent caching for fresh data
    );

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const data = await res.json();
    // console.log("Response data ->", data);
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getBlogData = async (
  blogId: string | string[] | undefined
): Promise<ICollectionResponse<IArticle[]>> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?filters[id][$eq]=${blogId}&populate=*`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getAllBlogswithPagination = async (
  blogsPerPage: number,
  pageIndex: string | string[],
  searchInput: string | string[] | undefined
): Promise<ICollectionResponse<IArticle[]>> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*&pagination[pageSize]=${blogsPerPage}&pagination[page]=${pageIndex}&filters[title][$containsi]=${searchInput}`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      } // Prevent caching for fresh data
    );

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const data = await res.json();
    // console.log("Response data ->", data);
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getBlogsPerCategory = async (
  slug: string | null,
  blogs_per_page: number,
  page: string | string[],
  searchInput: string | string[]
): Promise<ICollectionResponse<IArticle[]>> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?filters[category][slug][$eq]=${slug}&populate=*&pagination[pageSize]=${blogs_per_page}&pagination[page]=${page}&filters[title][$containsi]=${searchInput}`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      } // Prevent caching for fresh data
    );

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getBlogsCategories = async (): Promise<ICategory[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/categories`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const categories = await res.json();
    // console.log("Response categories ->", categories.data);
    return categories.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
