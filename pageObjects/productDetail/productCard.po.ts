import { BaseComponent } from "../base/base_component.po";
import { IProductCard } from "./productCard.in";

export class ProductCard extends BaseComponent implements IProductCard {

    private productName = ".product-name";
    protected productPrice = ".sales";
    private cards = ".mattress-card";

    async getCardProductName(): Promise<string> {
        return await this.getElement(this.productName).first().innerText();
    }

    async getCardProductPrice(): Promise<string> {
        return await this.getElement(this.productPrice).first().innerText();
    }

    async getProductCard(): Promise<any> {
        return this.page.locator(this.cards).first().click();
    }

    async waitForPageReadiness(): Promise<void> {
        await this.waitForReadiness();
    }

    async getValuesOfCard(): Promise<any> {
        let values = []
        values.push(await this.getCardProductName());
        let price = await this.getCardProductPrice();
        values.push(price.split("$").pop());
        return values
    }

}