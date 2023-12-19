import React from "react";
import { useGetDataQuery } from "../services/GetApiCall";

export default function GetData() {
  const { data, isError, isFetching, isLoading, isSuccess } = useGetDataQuery();

  const productsData = data && data.products;

  return (
    <div>
      Get Products Data from api-----------
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading data</p>}
      {isFetching && <p>Fetching......</p>}
      {isSuccess && (
        <div>
          {productsData.map((items) => (
            <div>
              <h4>{items.title}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
