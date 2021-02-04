console.log("Здесь могла быть ваша реклама!");
const cardButton = document.querySelector("#card-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close")

cardButton.addEventListener("click", function (event) {
	console.log("Ты кликнул по кнопке (Зачем?)");
	modal.classList.add("is-open");
});

close.addEventListener("click", function (event) {
	console.log("Окошко закрыто. Что ты наделал...");
	modal.classList.remove("is-open");
});
