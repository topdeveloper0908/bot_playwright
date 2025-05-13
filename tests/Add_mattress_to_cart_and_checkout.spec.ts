import { expect, test } from "@playwright/test";
import { HomePage } from "../pageObjects/home/home_section.po";
import { HomeDashboard } from "../pageObjects/home/homeDashboard";
import { Header } from "../pageObjects/home/home_header.po";
import { Urls } from "../pageObjects/utils/enum";
import { ProductCards} from "../pageObjects/productDetail/productCards";
import { ProductDetail } from "../pageObjects/productDetail/productDetail";
import { ProductCard } from "../pageObjects/productDetail/productCard.po";
import { AddToCart } from "../pageObjects/productDetail/addToCart.po";
import { Checkout } from "../pageObjects/cart/checkout.po";
import { Cart } from "../pageObjects/cart/cartPage";

let dashboard: HomeDashboard;
let homePage : HomePage;
let header: Header;
let productCards: ProductCards;
let productDetails: ProductDetail
let productCard: ProductCard;
let productDetail: AddToCart;
let cart : Cart;
let checkout : Checkout;


test("Add mattress to page and checkout",async ({page}) => {

    dashboard = new HomeDashboard(page)
    productCards = new ProductCards(page);
    productDetails = new ProductDetail(page);
    cart = new Cart(page);

    homePage = await dashboard.getMattress()
    header = await dashboard.getCart()
    productCard = await productCards.getCard();
    productDetail = await productDetails.addToCart();
    checkout = await cart.getCheckoutDetail();

    await page.goto("");
    expect(page.url()).toContain(Urls.baseUrl);
    await homePage.getShopMattresses();
    expect(page.url()).toContain(Urls.allProducts);

    let cardValues = await productCard.getValuesOfCard()
    await productCard.getProductCard();

    expect(page.url()).toContain(Urls.product);
    expect(await productDetail.getProductName()).toContain(cardValues[0])
    expect(await productDetail.getPrice()).toContain(cardValues[1])

    let addToCartValues = await productDetail.getValuesOfCard()
    await productDetail.getAddToCart();
    await checkout.waitForPageReadiness();

    expect(page.url()).toContain(Urls.cart);
    expect(await checkout.getSubTotal()).toContain(addToCartValues[1])
    await checkout.getCheckoutButton();
    await checkout.waitForPageReadiness();
    expect(page.url()).toContain(Urls.checkout);

})