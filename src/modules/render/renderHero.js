export const renderHero = (cancel, gender) => {
	const hero = document.querySelector(".hero");

	if (!gender) {
		hero.style.display = "none";
		return;
	}

	hero.style.display = "";
	hero.className = `hero hero-${gender}`;

	hero.innerHTML = `
		<div class="container">
			<div class="hero__content">
				<h2 class="hero__title">Новая коллекция Бюстгальтер-балконет</h2>
				<a class="hero__link" href="#">Перейти</a>
			</div>
		</div>
	`;
};
