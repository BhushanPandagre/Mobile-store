





const Cardpage = () => {
    return (
        <>

            {/* /*------------------------- Add To cart page-----------------------------------------------*/}

            <h1> MY CART</h1>

            <div className="card-page">

                <div id="sec_div">

                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                        </tr>
                        <tr>
                            <td>

                                <div className="cart-info">
                                    <img src="./images/mob1.png" className="mobimg" />
                                    <div>
                                        <p> Apple IPhone 15 (256 GB)
                                            Black</p>
                                        <p>Price:<br /><b>₹66,999</b></p>
                                        {/* <a href="">Remove</a>  */}
                                    </div>
                                </div>

                            </td>
                            <div className="increment">
                                <td><button className="minus"><b>-</b></button></td>
                                <td><button><b>1</b></button></td>
                                <td><button className="plus"><b>+</b></button></td>

                            </div>
                            <td><img src="./images/delete.png" className="delete" /></td>
                        </tr>
                    </table>

                    <hr size="2" color="gray" />
                    <table>
                        <tr>
                            <td>

                                <div className="cart-info">
                                    <img src="./images/mob1.png" className="mobimg" />
                                    <div>
                                        <p> Apple IPhone 15 (256 GB)
                                            Black</p>
                                        <p>Price:<br /><b>₹80,999</b></p>
                                        {/* <a href="">Remove</a> */}
                                    </div>
                                </div>
                            </td>
                            <div className="decri">

                                <td><button className="minus"><b>-</b></button></td>
                                <td><button><b>1</b></button></td>
                                <td><button className="plus"><b>+</b></button></td>
                            </div>

                            <td><img src="./images/delete.png" className="delete" /></td>
                        </tr>
                    </table>
                    <hr size="2" color="gray" />
                    <table>
                        <tr>
                            <td>

                                <div className="cart-info">
                                    <img src="./images/mob1.png" className="mobimg" />
                                    <div>
                                        <p> Apple IPhone 15 (256 GB)
                                            White</p>
                                        <p>Price:<br /><b>₹90,999</b></p>
                                        {/* <a href="">Remove</a> */}
                                    </div>
                                </div>


                            </td>

                            <div className="decri">
                                <td><button className="minus"><b>-</b></button></td>
                                <td><button><b>1</b></button></td>
                                <td><button className="plus"><b>+</b></button></td>
                            </div>
                            <td><img src="./images/delete.png" className="delete" /></td>
                        </tr>

                    </table>
                    <hr size="2" color="gray" />
                    <section id="cart-bottom" className="container">
                        <div className="row">
                            <div className="coupon">
                                <div>
                                    <h5>COUPON</h5>
                                    <p>Enter your copon code if you Have one.</p>
                                    <input type="text" placeholder="Coupon Code" />
                                    <button>Apply Coupon</button>
                                </div>
                            </div>
                        </div>

                    </section>


                </div>
                {/* //----------------------------------------------second part---------------------------------------------------//                 */}

                <div className="second_div" >
                    <h4 className="order">ORDER DETAILS</h4>
                    {/* <div className="order">
                            
                        </div> */}

                    <div className="total-price">
                        <table>
                            <tr>
                                <td>Apple IPhone 15 (256 GB)
                                    Black</td>
                                <td>₹40,000</td>
                            </tr>
                            <tr>
                                <td>Apple IPhone 15 (256 GB)
                                    Black</td>
                                <td>₹40,000</td>
                            </tr>
                        </table>
                        <hr size="1" color="gray" />
                        <table>
                            <tr>
                                <td><b>Subtotal</b></td>
                                <td><b>₹ 80,000</b></td>
                            </tr>
                        </table>
                        <hr size="1" color="gray" />
                        <table>
                            <tr>
                                <td>Shipping</td>
                                <td>₹ 0</td>
                            </tr>
                        </table>
                        <hr size="1" color="gray" />
                        <table>
                            <tr>
                                <td>Tax</td>
                                <td>₹0</td>
                            </tr>
                        </table>
                        <hr size="1" color="gray" />
                        <table>
                            <tr>
                                <td><b>Total</b></td>
                                <td><b>₹80,000</b></td>
                            </tr>
                        </table>
                        <hr size="1" color="gray" />





                    </div>

                    <div className="button">
                        <center>

                            <button>PLACE ORDER </button>
                        </center>
                    </div>

                </div>
            </div>

        </>)
}
export default Cardpage;