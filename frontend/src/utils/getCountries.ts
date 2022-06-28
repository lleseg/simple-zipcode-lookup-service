import { getCountries as listCountries } from "country-state-picker";

function getCountries() {
  return listCountries().map((country: any) => {
    // eslint-disable-next-line no-param-reassign
    if (country.code === "gg") country.name = "Guernsey";

    return country;
  });
}

export default getCountries;
