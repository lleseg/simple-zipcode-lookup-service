import { RESTDataSource } from 'apollo-datasource-rest';

class ZipCodeAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = 'http://api.zippopotam.us/';
  }

  async getZipCode(countryCode: String, zipCode: String) {
    return this.get(`${countryCode}/${zipCode}`);
  }
}

export default ZipCodeAPI;
