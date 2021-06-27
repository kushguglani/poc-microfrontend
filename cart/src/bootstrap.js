import Faker from 'faker';
const mount = (el) => {
	const number = Faker.datatype.number({
		'min': 0,
		'max': 50
	})
	const cart = `<div> You have ${number} item(s) in your cart`;
	el.innerHTML = cart;
}
if (process.env.NODE_ENV === "development") {
	const el = document.querySelector('#dev-cart');
	if (el)
		mount(el);

}
export { mount };