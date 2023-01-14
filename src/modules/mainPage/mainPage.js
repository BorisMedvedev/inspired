import { renderHero } from "../render/renderHero";
import { renderNavigaton } from "../render/renderNavigation";
import { renderProducts } from "../render/renderProducts";

export const mainPage = (gender) => {
	renderNavigaton();
	renderHero();
	renderProducts();
};
