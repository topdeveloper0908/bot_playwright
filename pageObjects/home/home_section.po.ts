import { BaseComponent } from "../base/base_component.po";
import { IHomePage } from "./home_section.in";

export class HomePage extends BaseComponent implements IHomePage {

    private readonly homeButtons = ".accent-button";

    async getShopMattresses(): Promise<void> {
        await this.getElement(this.homeButtons).click()
    }

}