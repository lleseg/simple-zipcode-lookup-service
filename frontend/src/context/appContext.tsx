/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

type Place = {
  __typename: string;
  city: string;
  latitude: string;
  longitude: string;
  state: string;
  stateAbbreviation: string;
};

type Result = {
  __typename: string;
  country: string;
  countryAbbreviation: string;
  places: Place[];
  zipCode: string;
};

type ResultData = {
  zipCode: Result;
};

type ResultLocalStorage = {
  country: string;
  city: string;
  state: string;
  zipCode: string;
};

type AppProps = {
  children: ReactNode;
};

export type AppContextType = {
  last5Results: ResultLocalStorage[];

  clearHistory: () => void;
  updateLast5Results: (newResults: ResultData) => void;
};

export const AppContext = createContext<AppContextType>({
  last5Results: [],
  clearHistory: () => null,
  updateLast5Results: (newResults) => null,
});

export function AppProvider({ children }: AppProps) {
  const [last5Results, setLast5Results] = useState<ResultLocalStorage[]>(
    JSON.parse(localStorage.getItem("last-5-results") as string) || []
  );

  useEffect(() => {
    localStorage.setItem("last-5-results", JSON.stringify(last5Results));
  }, [last5Results]);

  const clearHistory = () => {
    setLast5Results([]);
  };

  const updateLast5Results = (newResults: ResultData) => {
    if (!newResults) return;

    const newPlaces = newResults?.zipCode?.places?.slice(-5);

    const mappedResults = newPlaces.map((place: Place) => ({
      zipCode: newResults?.zipCode?.zipCode,
      country: newResults?.zipCode?.country,
      city: place.city,
      state: place.state,
    }));

    const newLast5Results = [
      ...mappedResults,
      ...last5Results.slice(newPlaces.length - 1, 4),
    ];

    setLast5Results(newLast5Results);
  };

  const value = useMemo(
    () => ({ clearHistory, last5Results, updateLast5Results }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [last5Results]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
