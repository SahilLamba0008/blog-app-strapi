"use client";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";

const ClientDataFetching: NextPage = () => {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://localhost:1337/api/articles?populate=*",
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await res.json();
        setRes(jsonData.data);
        console.log(jsonData.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  console.log("Response ->", res);

  return (
    <div>
      <h1 className="mt-10 underline">Client Data Fetching :</h1>
      {res.map((article: any, index) => (
        <div key={index} className="mt-5">
          {article.attributes.title}
        </div>
      ))}
    </div>
  );
};

export default ClientDataFetching;
