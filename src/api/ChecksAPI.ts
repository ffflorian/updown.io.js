import {URL} from 'url';

import {Endpoint} from '../Endpoints';
import {RequestService} from '../RequestService';
import {Check} from '../interfaces';

export class ChecksAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  private checkApiKey() {
    if (!this.requestService.isApiKeySet()) {
      throw new Error('An API key needs to be set in order to use the checks API.');
    }
  }

  /** List all your checks. */
  public getChecks(): Promise<Check[]> {
    this.checkApiKey();
    const endpoint = Endpoint.checks();
    return this.requestService.get(endpoint);
  }

  /**
   * Set a new API URL.
   * @param newUrl The new API url
   */
  public setApiUrl(newUrl: URL): void {
    this.requestService.setApiUrl(newUrl);
  }
}
