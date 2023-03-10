
import { DATA } from '../const';
import { createElement } from "../createElement";

export const renderNavigaton = (gender) => {
	const navigation = document.querySelector(".navigation");

	navigation.textContent = "";

	const container = createElement(
		"div",
		{
			className: "container navigation__container",
		},
		{
			parent: navigation,
		}
	);

	const genderList = createElement(
		"ul",
		{
			className: "navigation__gender gender list-reset",
		},
		{
			parent: container,
		}
	);

	for (const genderName in DATA.navigation) {
		createElement(
			"a",
			{
				className: `navigation__gender-link link-hover
			${gender === genderName ? "navigation__gender-link--active" : ""}`,
				href: `#/${genderName}`,
				textContent: DATA.navigation[genderName].title,
			},
			{
				parent: createElement(
					"li",
					{
						className: "navigation__gender-item",
					},
					{
						parent: genderList,
					}
				),
			}
		);
	}

	const categoryElems = DATA.navigation[gender].list.map((item) =>
		createElement(
			"li",
			{
				className: "category__item",
			},
			{
				append: createElement(
					"a",
					{
						className: "category__link link-hover",
						textContent: item.title,
						href: `#/${gender}/${item.slug}`,
					},
					{
						cb(elem) {
							console.log("elem ", elem);
							elem.addEventListener("click", () => {
								document
									.querySelector(".category__link--active")
									?.classList.remove("category__link--active");
								elem.classList.add("category__link--active");
							});
						},
					}
				),
			}
		)
	);

	createElement(
		"ul",
		{
			className: "navigation__category category list-reset",
		},
		{
			parent: container,
			appends: categoryElems,
		}
	);
};
