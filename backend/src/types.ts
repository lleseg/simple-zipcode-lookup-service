export type ZipCodeArgs = { countryCode: string; zipCode: string };

export type Place = {
  city: string;
  longitude: string;
  state: string;
  stateAbbreviation: string;
  latitude: string;
};

export type Result = {
  zipCode: string;
  country: string;
  countryAbbreviation: string;
  places: Place[];
};
