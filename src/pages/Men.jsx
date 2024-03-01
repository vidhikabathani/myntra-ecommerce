import React, { useEffect } from 'react';
import { get_product } from '../redux/Action'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

function Men() {
    let data = useSelector((store) => store.Products.products)
    let dispatch = useDispatch()
    useEffect(() => {
        console.log(data);
        dispatch(get_product())
    }, [dispatch])

    return (
        <div className='container'>
            {
                data.map((ele) => {
                    if (ele.gender == "male") {
                        return (
                            <NavLink to={`/product/${ele.id}`}>
                            <div className='flex'>
                                <div className="col-md-4">
                                <img src={ele.img1} alt="" />
                                <h3>{ele.prodcuts_name}</h3>
                                <h5 className='f-blue'>Rs. {ele.seling_price}</h5>
                                </div>
                            </div>
                            </NavLink>
                        )
                    }
                })
            }
        </div>
    )
}

export default Men