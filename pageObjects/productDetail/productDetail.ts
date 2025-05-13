import { BasePage } from "../base/base_page.po";
import { AddToCart } from "./addToCart.po";
import { Timeout } from "../utils/enum";

export class ProductDetail extends BasePage {

    private productDetailContext = ".product-details";

    async waitForReadiness() {
        await this.getElement(this.productDetailContext).waitFor({timeout: Timeout.MEDIUM});
    }

    async addToCart(): Promise<AddToCart> {
        return new AddToCart(this.productDetailContext,this.page);
    }

}