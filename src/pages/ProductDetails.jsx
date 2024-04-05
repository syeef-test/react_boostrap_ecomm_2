import { useParams } from "react-router-dom";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
    review: "Good Product",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
    review: "Good Product",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
    review: "Good Product",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
    review: "Good Product",
  },
];

const ProductDetail = () => {
  const params = useParams();

  const product = productsArr.find(
    (product) => product.title === params.productId
  );

  return (
    <section>
      <h1>Product Detail</h1>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <img src={product.imageUrl} alt={product.title} />
          <p>Price: ${product.price}</p>
          <p>Review: {product.review}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </section>
  );
};

export default ProductDetail;
