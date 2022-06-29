/* eslint-disable no-unused-vars */
import { ReactNode, SyntheticEvent } from "react";

export type Place = {
  __typename: string;
  city: string;
  latitude: string;
  longitude: string;
  state: string;
  stateAbbreviation: string;
};

export type Result = {
  __typename: string;
  country: string;
  countryAbbreviation: string;
  places: Place[];
  zipCode: string;
};

export type ResultData = {
  zipCode: Result;
};

export type ResultLocalStorage = {
  country: string;
  city: string;
  state: string;
  zipCode: string;
};

export type ResultVars = {
  zipCode: string;
  countryCode: string;
};

export type AppProps = {
  children: ReactNode;
};

export type AppContextType = {
  last5Results: ResultLocalStorage[];

  clearHistory: () => void;
  updateLast5Results: (newResults: ResultData) => void;
};

export type ZipCodeInfoProps = {
  data: {
    zipCode: {
      __typename: string;
      country: string;
      countryAbbreviation: string;
      places: Place[];
      zipCode: string;
    };
  };
};

export type ZipCodeFormProps = {
  countryCode: string;
  handleChangeCountry: (e: SyntheticEvent<HTMLSelectElement>) => void;
  handleChangeZipCode: (e: SyntheticEvent<HTMLInputElement>) => void;
  handleSubmit: (e: SyntheticEvent<HTMLButtonElement>) => void;
  zipCode: string;
};
