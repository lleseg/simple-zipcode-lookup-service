import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, waitFor } from "@testing-library/react";
import Search, { ZIP_CODE } from "../Search";
// import { InMemoryCache } from "@apollo/client";
// import { renderApollo, cleanup, waitForElement } from "../../utils/test-utils";

const mockZipCode = {
  zipCode: "90210",
  country: "United States",
  countryAbbreviation: "US",
  places: [
    {
      city: "Beverly Hills",
      longitude: "-118.4065",
      state: "California",
      stateAbbreviation: "CA",
      latitude: "34.0901",
    },
  ],
};

describe("<Search />", () => {
  afterEach(cleanup);

  it("renders search container", async () => {
    const mocks = [
      {
        request: { query: ZIP_CODE },
        result: {
          data: {
            zipCode: [mockZipCode],
          },
        },
      },
    ];

    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Search />
      </MockedProvider>
    );

    const heading = await waitFor(() =>
      getByText(
        `Complete the following form and then click on the submit button to get the zip code information you're looking for!`
      )
    );
    const zipCode = await waitFor(() => getByText(`Zip code`));
    const country = await waitFor(() => getByText(`Country`));
    const submit = await waitFor(() => getByText(`Submit`));

    expect(heading).toBeInTheDocument();
    expect(zipCode).toBeInTheDocument();
    expect(country).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });
});
