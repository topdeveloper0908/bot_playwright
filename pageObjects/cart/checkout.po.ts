import { ICheckout } from "./checkout.in";
import { BaseComponent } from "../base/base_component.po";
import { Timeout } from "../utils/enum";

export class Checkout extends BaseComponent implements ICheckout {

    private subTotal = ".grand-total";
    private checkoutButton = ".checkout-btn";

    async getSubTotal(): Promise<string> {
        return this.getElement(this.subTotal).innerText();
    }

    async getCheckoutButton(): Promise<void> {
        return this.getElement(this.checkoutButton).click();
    }

    async waitForPageReadiness(): Promise<void> {
        await this.page.waitForTimeout(Timeout.SHORT)
    }
}
