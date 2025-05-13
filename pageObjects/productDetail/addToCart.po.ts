import { IAddToCart } from "./addToCart.in";
import { ProductCard } from "./productCard.po";

export class AddToCart extends ProductCard implements IAddToCart {

    private productDetailName = "h1.product-name";
    private addToCart = ".add-to-cart";

    async getProductName(): Promise<string> {
        return this.getElement(this.productDetailName).innerText();
    }

    async getPrice(): Promise<string> {
        return this.getElement(this.productPrice).first().innerText();
    }

    async getAddToCart(): Promise<void> {
        await this.getElement(this.addToCart).first().click();
    }

    async waitForPageReadiness(): Promise<void> {
        await this.waitForReadiness()
    }

    async getValuesOfCard(): Promise<any> {
        let values=[]
        values.push(await this.getCardProductName());
        let price = await this.getPrice();
        values.push(price.split("$").pop())
        return values
    }
}