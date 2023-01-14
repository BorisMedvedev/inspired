export const renderNavigaton = () => {
	const navigation = document.querySelector(".navigation");

	navigation.innerHTML = `
			<div class="container navigation__container">
				<ul class="navigation__gender gender list-reset">
					<li class="navigation__gender-item">
						<a class="navigation__gender-link link-hover navigation__gender-link--active" href="#">Женщины</a>
					</li>
					<li class="navigation__gender-item">
						<a class="navigation__gender-link link-hover" href="#">Мужчины</a>
					</li>
				</ul>

				<ul class="navigation__category category list-reset">
					<li class="category__item">
						<a class="category__link category__link--active link-hover" href="#">Бюстгальтеры</a>
					</li>
					<li class="category__item">
						<a class="category__link link-hover" href="#">Трусы</a>
					</li>
					<li class="category__item">
						<a class="category__link link-hover" href="#">Носки</a>
					</li>
					<li class="category__item">
						<a class="category__link link-hover" href="#">Халаты</a>
					</li>
					<li class="category__item">
						<a class="category__link link-hover" href="#">Термобелье</a>
					</li>
					<li class="category__item">
						<a class="category__link link-hover" href="#">Пижамы</a>
					</li>
				</ul>
			</div>
	`;
};
