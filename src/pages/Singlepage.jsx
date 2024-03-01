import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { add_cart, single_product } from "../redux/Action";

const Singlepage = () => {
    let { id } = useParams();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(single_product(id));
    }, []);
    let data = useSelector((store) => store.Products);

    const handleCart = () => {
        dispatch(
            add_cart({
                img1: data.single_product.img1,
                prodcuts_name: data.single_product.prodcuts_name,
                seling_price: data.single_product.seling_price,
            })
        );
    };
    return (
        <div>
            <img src={data.single_product.img1} alt="" />
            <img src={data.single_product.img2} alt="" />
            <img src={data.single_product.img3} alt="" />
            <img src={data.single_product.img4} alt="" />
            <img src={data.single_product.img5} alt="" />
            <p>{data.single_product.prodcuts_name}</p>
            <p>{data.single_product.seling_price}</p>
            <button onClick={handleCart}>ADD TO CART</button>
        </div>
    );
};

export default Singlepage;