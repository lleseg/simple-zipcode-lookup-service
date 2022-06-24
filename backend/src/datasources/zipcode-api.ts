// TODO: type everything
import { RESTDataSource } from 'apollo-datasource-rest';

class ZipCodeAPI extends RESTDataSource {
  constructor() {
    super();
    // TODO: set this as an environment variable
    this.baseURL = 'http://api.zippopotam.us/';
  }

  async getZipCode(countryCode: String, zipCode: String) {
    return this.get(`${countryCode}/${zipCode}`);
  }
}

export default ZipCodeAPI;
