import {URL} from 'url';

import {Endpoint} from '../Endpoints';
import {RequestService} from '../RequestService';
import {Nodes} from '../interfaces';

export class NodesAPI {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  /** List all updown.io monitoring nodes. */
  public getNodes(): Promise<Nodes> {
    const endpoint = Endpoint.nodes();
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
