import { HomePage } from "./home_section.po";
import { BasePage } from "../base/base_page.po";
import { Header } from "./home_header.po";

export class HomeDashboard extends BasePage {

    private readonly homePage = ".main-content";
    private readonly header = ".header-wrapper";

    async getMattress(): Promise<HomePage> {
        return new HomePage(this.homePage, this.page)
    }

    async getCart(): Promise<Header> {
        return new Header(this.header, this.page)
    }

    async waitForReadiness(): Promise<void> {
        await this.page.waitForSelector(this.homePage)
    }
}