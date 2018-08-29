import {URL} from 'url';

import {Endpoint} from '../Endpoints';
import {RequestService} from '../RequestService';
import {Check} from '../interfaces';

export class ChecksAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  /** List all your checks. */
  public getChecks(): Promise<Check[]> {
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
