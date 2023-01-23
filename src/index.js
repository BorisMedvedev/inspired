import "./index.html";
import "./index.scss";

import { router } from "./modules/router";
import { mainPage } from "./modules/mainPage/mainPage";
import { renderFooter } from "./modules/render/renderFooter";
import { renderHeader, test } from "./modules/render/renderHeader";
import { womenMainPage } from "./modules/mainPage/womenMainPage";
import { menMainPage } from "./modules/mainPage/menMainPage";
import { getData } from "./modules/getData";
import { API_URL, DATA } from './modules/const';

const init = async () => {
	DATA.navigation = await getData(`${API_URL}/api/categories`);
	router.on("*", () => {
		renderHeader();
		renderFooter();
	});

	router.on("/", () => {
		mainPage();
	});

	router.on("women", () => {
		womenMainPage();
	});

	router.on("men", () => {
		menMainPage();
	});

	router.resolve();


};

init();

