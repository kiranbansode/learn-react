import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailPage() {
	const param = useParams();

	return (
		<>
			<h1>Product Detail</h1>
			<p>{param.productId}</p>
			<p>
				<Link to=".." relative="path">
					Back
				</Link>
			</p>
		</>
	);
}

export default ProductDetailPage;
