import { IPage } from "./page.in";
import { Page } from "@playwright/test";
import { Timeout } from "../utils/enum";

export abstract class BasePage implements IPage {

    protected page:Page;

    constructor(page:Page) {
        this.page = page;
    }

    abstract waitForReadiness(): Promise<void>;

    async waitForVisibility(selector: string,number=Timeout.MEDIUM): Promise<void> {
            await this.page.waitForSelector(selector,{state: 'visible',timeout: number});
    }

    getElement (selector:string) {
        return this.page.locator(selector);
    }

    async isUrlOpen (url:string) {
        await this.page.waitForURL(url, {timeout: Timeout.MEDIUM});
    }

    async uploadDocument(selector:string, filePath: string) {
        await this.page.setInputFiles(selector, filePath);
    }

}

