import { APIRequestContext } from '@playwright/test';

export class BaseAPI {
  constructor(protected request: APIRequestContext) {}

  async getRoot() {
    return this.request.get('/');
  }
}