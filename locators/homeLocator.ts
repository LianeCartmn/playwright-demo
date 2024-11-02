import { Locator, Page } from '@playwright/test';

export class HomeLocator {
  readonly mainTitle: Locator;

  constructor(page: Page) {
    this.mainTitle = page.getByRole('heading', { name: 'UI Test Automation Playground' });
  }
}