import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
	const showCart = useSelector(({ ui }) => ui.cartIsVisible);
	const cart = useSelector(({ cart }) => cart);

	useEffect(() => {
		fetch(
			"https://react-http-850cf-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
			{
				method: "PUT",
				body: JSON.stringify(cart),
			}
		);
	}, [cart]);

	return (
		<Layout>
			{showCart && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
