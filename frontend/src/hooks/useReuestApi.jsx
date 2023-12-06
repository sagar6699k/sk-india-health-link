import { useEffect, useState } from "react";
import { requestFromAPI } from "../utils/api";

const useReuestApi = (method, url, params) => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading("Loading..");
    setError(null);
    setData(null);

    requestFromAPI(method, url, params)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!" + err);
      });
  }, [method, url, params]);

  return { data, loading, error };
};

export default useReuestApi;
