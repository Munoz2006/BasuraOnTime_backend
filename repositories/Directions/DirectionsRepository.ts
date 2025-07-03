import axios from 'axios';

export class GeocodingRepository {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async reverseGeocode(lat: number, lng: number) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json`;

    const response = await axios.get(url, {
      params: {
        latlng: `${lat},${lng}`,
        key: this.apiKey
      }
    });

    return response.data;
  }
}
