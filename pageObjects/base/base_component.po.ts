import { Page } from "@playwright/test";
import { IComponent } from "./component.in";

export class BaseComponent  implements IComponent{

    protected page: Page;
    private readonly searchContext: string;

    constructor(searchContext,page) {
        this.page = page;
        this.searchContext = searchContext;
    }

    async waitForReadiness(): Promise<any> {
        return await this.page.waitForLoadState('load');
    }

    getElement (selector:string) {
        return this.page.locator(this.searchContext).locator(selector);
    }

    async setDelay(number=2000) {
        await this.page.waitForTimeout(number);
    }
}
