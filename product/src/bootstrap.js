import Faker from 'faker';

const mount = (el) => {
	let products = '';
	console.log("product")
	for (let index = 0; index < 5; index++) {
		const name = Faker.commerce.productName()
		products += `<div>${name}</div>`
	}
	el.innerHTML = products;
}
if (process.env.NODE_ENV === "development") {
	const elem = document.querySelector('#dev-product-remote');
	if (elem)
		mount(elem);
}

export { mount }