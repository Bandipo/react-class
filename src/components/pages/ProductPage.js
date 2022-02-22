import { products } from "../Products";
import styles from "./ProductPage.module.css";
import Card from "../Card";

const ProductPage = (props) => {
  const content = <h1>No Product</h1>;

  const product = products.map((product) => {
    return (
      <Card className={styles.product}>
        <div>{product.category}</div>
        <div>{product.price}</div>
        <div>{product.name}</div>
        <div>{product.stocked ? "Stocked" : "Not Stocked"}</div>
      </Card>
    );
  });

  return <div className={styles.products}>{product || product || content}</div>;
};

export default ProductPage;
