export const renderProducts = () => {
	const products = document.querySelector(".goods");

	products.innerHTML = `
	<div class="container">
	<h2 class="goods__title title">новинки</h2>

	<ul class="goods__list list-reset">
		<li class="goods__item">
			<article class="product-card">
				<a class="product-card__link" href="#">
					<img class="product-card__img" src="./img/foto-card-3.jpg"
						alt="Бюстгальтер-Балконет Bien из Микрофибры">
					<h3 class="product-card__title">
						Бюстгальтер-Балконет Bien из Микрофибры
					</h3>
				</a>
				<div class="product-card__row">
					<p class="product-card__price">1799 <strong>₽</strong></p>
					<button class="product-card__btn-favorite btn-reset" aria-label="добавить в избранное"></button>
				</div>

				<ul class="product-card__color-list list-reset">
					<li class="product-card__color-item">
						<div class="color color--red color--check"></div>
					</li>
					<li class="product-card__color-item">
						<div class="color color--white"></div>
					</li>
					<li class="product-card__color-item">
						<div class="color color--black"></div>
					</li>
				</ul>
			</article>
		</li>
	</ul>
</div>
	`;
};
