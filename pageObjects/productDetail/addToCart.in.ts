export interface IAddToCart {
    getProductName(): Promise<string>;

    getPrice(): Promise<string>;

    getAddToCart(): Promise<void>;
}