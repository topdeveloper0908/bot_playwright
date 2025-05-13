import { BasePage } from "../base/base_page.po";
import { Checkout } from "./checkout.po";

export class Cart extends BasePage {

    private checkoutContext = ".totals"

    async getCheckoutDetail(): Promise<Checkout> {
        return new Checkout(this.checkoutContext, this.page);
    }

    waitForReadiness(): Promise<void> {
        return Promise.resolve(undefined);
    }

}