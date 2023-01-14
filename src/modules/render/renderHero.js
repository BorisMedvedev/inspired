export const renderHero = () => {
	const hero = document.querySelector(".hero");

	hero.innerHTML = `
		<div class="container">
			<div class="hero__content">
				<h2 class="hero__title">Новая коллекция Бюстгальтер-балконет</h2>
				<a class="hero__link" href="#">Перейти</a>
			</div>
		</div>
	`;
};
