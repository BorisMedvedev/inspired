import "./index.html";
import "./index.scss";

import { router } from "./modules/router";
import { mainPage } from "./modules/mainPage/mainPage";
import { renderFooter } from "./modules/render/renderFooter";
import { renderHeader } from "./modules/render/renderHeader";
import { womenMainPage } from "./modules/mainPage/womenMainPage";
import { menMainPage } from "./modules/mainPage/menMainPage";
import { getData } from "./modules/getData";

const init = async () => {
  const data = await getData("http://localhost:8024/api/goods", {
    count: 5,
  });
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

const btnLink = document.querySelectorAll(".category__link");

btnLink.forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelector(".category__link--active")
      ?.classList.remove("category__link--active");

    item.classList.add("category__link--active");
  });
});
