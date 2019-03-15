import { Injectable } from '@angular/core';
import { endpointConfig } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  // private apiKey = '6ed12e064b90ae1290fa326ce9e790ff';

    search(searchQuery: string) {
        return `${endpointConfig.baseUrl}${endpointConfig.searchByQuery}` + searchQuery;
    }
}
