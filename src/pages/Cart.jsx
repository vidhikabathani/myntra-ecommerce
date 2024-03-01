import React, { useEffect } from 'react'
import { get_cart, remove_cart } from '../redux/Action';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
    let dispatch = useDispatch();
    let {cart}  = useSelector((store) => store.Products);
    console.log(cart);

    useEffect(() => {
        dispatch(get_cart())
    }, [])
    const handleRemove = (id) => {
        dispatch(remove_cart(id))
    }
    return (
        <div>
            {cart.map((ele) => {
                return (
                    <>
                        <div className='container flex justify-content-between align-items-center'>
                        <img src={ele.img1} alt="" />
                        <h3>{ele.prodcuts_name}</h3>
                        <p>{ele.seling_price}</p>
                        <div>

                        <button onClick={() => handleRemove(ele.id)}>delete</button>
                        </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default Cart