import { expect, type Page } from '@playwright/test';
import { HomeLocator } from '../locators/homeLocator';

export class HomePageObject {
    readonly page: Page;
    readonly locators: HomeLocator; 

    constructor(page: Page) {
        this.page = page;
        this.locators = new HomeLocator(page);
    }

    async goto() {
        await this.page.goto('http://uitestingplayground.com/');
    }
}