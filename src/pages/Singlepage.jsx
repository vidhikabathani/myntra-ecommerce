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
        <div className="container">
            <div className="row align-items-center">
                <div className="col-6 ">
                    <img src={data.single_product.img1} className="w-50 p-1" alt="" />
                    <img src={data.single_product.img2} className="w-50 p-1" alt="" />

                </div>
                <div className="col-6 p-3">
                    <h1>{data.single_product.prodcuts_name}</h1>
                    <p>Rs. {data.single_product.seling_price}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem culpa reiciendis ullam veritatis, in praesentium excepturi voluptatem minima. Rem nam nulla libero minima tempora beatae dolorum ab qui dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quae, ut repellendus fuga esse vitae distinctio reprehenderit harum consectetur? Iure eveniet veritatis sequi consectetur ea, vero odio. Ullam, maxime harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, corrupti iste illum, rem sequi ullam doloribus laudantium delectus, accusantium quos recusandae. Deleniti sunt ipsa nam et totam obcaecati numquam cum earum voluptate, eveniet veritatis velit modi laudantium mollitia praesentium iure ea magnam cumque qui aperiam nemo laborum, molestiae nesciunt? Nam.</p>
                    <button onClick={handleCart}>ADD TO CART</button>
                </div>
            </div>
            <div className="row">
                <div className="col-6">

                    {/* <img src={data.single_product.img3} className="w-50 p-1" alt="" /> */}
                    <img src={data.single_product.img4} className="w-50 p-1" alt="" />
                    <img src={data.single_product.img5} className="w-50 p-1" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Singlepage;