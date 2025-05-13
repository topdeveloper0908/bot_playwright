import { HomePage } from "./home_section.po";
import { IHeader } from "./home_header.in";

export class Header extends HomePage implements IHeader {

    private readonly cartIcon = ".minicart-link:visible";

    async getCart(): Promise<void> {
        await this.getElement(this.cartIcon).click()
    }

}