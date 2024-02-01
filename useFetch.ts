import { useEffect, useState } from "react";

type UseFetchState<DataType> = {
  data: DataType[] | undefined;
  isLoading: boolean;
  hasError: null;
};

export const useFetch = <DataType extends Record<string, string>>(
  url: string
) => {
  const [state, setState] = useState<UseFetchState<DataType>>({
    data: undefined,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });
    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
