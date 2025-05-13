import { ProductCard } from "./productCard.po";
import { BasePage } from "../base/base_page.po";

export class ProductCards extends BasePage{

    private productCardContext = ".mattress-card"

    async getCard(): Promise<ProductCard> {
        return new ProductCard(this.productCardContext,this.page);
    }

    waitForReadiness(): Promise<void> {
        return Promise.resolve(undefined);
    }

}