import { useParams } from "react-router-dom";

function ProductDetailPage() {
	const param = useParams();

	return (
		<>
			<h1>Product Detail</h1>
			<p>{param.productId}</p>
		</>
	);
}

export default ProductDetailPage;
