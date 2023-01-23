import "./index.html";
import "./index.scss";

import { router } from "./modules/router";
import { mainPage } from "./modules/mainPage/mainPage";
import { renderFooter } from "./modules/render/renderFooter";
import { renderHeader, test } from "./modules/render/renderHeader";
import { womenMainPage } from "./modules/mainPage/womenMainPage";
import { menMainPage } from "./modules/mainPage/menMainPage";
import { getData } from "./modules/getData";

const init = async () => {
	const data = await getData("http://localhost:8024/api/goods");
	console.log(data);
};

init();

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
