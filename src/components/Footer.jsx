import React from 'react'
import { Container, NavLink } from 'react-bootstrap'
// import logo from '../img/logo' 

function Footer() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-12'>
                        <h1 className='online fw-bolder'>ONLINE SHOPPING</h1>
                        <li className='shopping mt-4'>Men</li>
                        <li className='shopping'>Women</li>
                        <li className='shopping'>Kids</li>
                        <li className='shopping'>Home & Living</li>
                        <li className='shopping'>Beauty</li>
                        <li className='shopping'>Gift Cards</li>
                        <li className='shopping'>Myntra Insider</li>
                        <h6 className='online fw-bolder mt-4'>USEFUL LINKS</h6>
                        <li className='shopping mt-4'>Blog</li>
                        <li className='shopping'>Careers</li>
                        <li className='shopping'>Site Map</li>
                        <li className='shopping'>Corporate Information</li>
                        <li className='shopping'>Whitehat</li>
                        <li className='shopping'>Cleartrip</li>
                    </div>
                    <div className='col-md-3 col-12'>
                        <h6 className='online fw-bolder'>CUSTOMER POLICIES</h6>
                        <li className='shopping mt-4'>Contact Us</li>
                        <li className='shopping'>FAQ</li>
                        <li className='shopping'>T&C</li>
                        <li className='shopping'>Terms Of Use</li>
                        <li className='shopping'>Track Orders</li>
                        <li className='shopping'>Shipping</li>
                        <li className='shopping'>Cancellation</li>
                        <li className='shopping'>Returns</li>
                        <li className='shopping'>Privacy policy</li>
                        <li className='shopping'>Grievance Officer</li>
                    </div>
                    <div className='col-md-3 col-12'>
                        <p className='online fw-bolder'>EXPERIENCE MYNTRA APP ON MOBILE</p>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <img src='https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png' className='play'></img>
                            </div>
                            <div className='col-md-6 col-12'>
                                <img src='https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png' className='play'></img>
                            </div>
                        </div>
                        <h5 className='online fw-bolder mt-4'>KEEP IN TOUCH</h5>
                        <div className='row'>
                            <div className='col-md-3 col-12'>
                                <img src='https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png' className='play1'></img>
                            </div>
                            <div className='col-md-3 col-12'>
                                <img src='https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png' className='play1'></img>
                            </div>
                            <div className='col-md-3 col-12'>
                                <img src='https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png' className='play1'></img>
                            </div>
                            <div className='col-md-3 col-12'>
                                <img src='https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png' className='play1'></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-12'>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <img src='https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png' className='play2'></img>

                            </div>



                        </div>
                        <img src='https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png' className='play2'></img>
                        <h5>Return within 14days of receiving your order</h5>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer