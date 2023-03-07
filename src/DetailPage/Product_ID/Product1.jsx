import React from "react";
// import { useParams } from "react-router-dom";
import Classes from "../StyleShopPage/ShopPage.module.css";
import AddProduct from "./AddProduct";
import ImageDetail from "./ImageDetail";
import RealateProduct from "./RelateProduct";

const Product = (props) => {
  // Khi click vào nút sẽ thêm sản phẩm vào mảng, lưu tên, giá và số lượng
  const relatedProduct = props.data.filter(
    (e) => e.category === props.category && e.name !== props.name
  );

  return (
    <section className={Classes.buttonDetail}>
      <div className={Classes.alignImage}>
        <ImageDetail
          src={props.src}
          img1={props.img1}
          img2={props.img2}
          img3={props.img3}
        />
        <AddProduct
          name={props.name}
          des={props.des}
          price={props.price}
          category={props.category}
          image={props.src}
        />
      </div>
      <div className={Classes.description}>
        <button>DESCRIPTION</button>
        <p>PRODUCT DESCRIPTION</p>
        <p className={Classes.paragraph}>{props.min}</p>
      </div>
      <div className={Classes.AlignDetail}>
        <h4>RELATED PRODUCTS</h4>
        <div className={Classes.RelatedProduct}>
          {relatedProduct.map((e) => (
            <RealateProduct
              name={e.name}
              img={e.img1}
              price={e.price}
              id={e._id.$oid}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
