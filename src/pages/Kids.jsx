import React, { useEffect } from 'react';
import { get_product } from '../redux/Action'
import { useDispatch, useSelector } from 'react-redux'

function Kids() {
    let data = useSelector((store) => store.Products.products)
    let dispatch = useDispatch()
    useEffect(() => {
        console.log(data);
        dispatch(get_product())
    }, [dispatch])

    return (
        <div>
            {
                data.map((ele) => {
                    if (ele.gender == "boys" || ele.gender == "girls") {
                        return (
                            <div className='main-div col-4'>

                                <img src={ele.img1} alt="" />
                                <h3>{ele.prodcuts_name}</h3>
                                <h5 className='f-blue'>Rs. {ele.seling_price}</h5>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Kids