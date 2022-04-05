import '../Css/componentscss/cartpage.css';

import { useSelector, useDispatch } from 'react-redux';

import NumberFormat from 'react-number-format';

const CartSection = () => {
    const dispatch =useDispatch();
    const { cart_products, total_quantity, total_price } = useSelector(state => state.CartReducer)
    const {user}= useSelector(state=>state.AccountReducer);

    return (
        <div className="cart_section">
            <div className="cart_heading">
                <p>{user?.email}</p>
                <h2>Your Cart</h2>
                <hr></hr>
            </div>
            <div className="sections">
                <div>
                    {(total_quantity === 0) ? <div className="empty_basket">Your Cart is Empty</div> :
                        cart_products.map(product => {
                            return (
                                <>
                                    <div className="left_cart">
                                        <img src={product.ImageURL}></img>
                                        <div className="content">
                                            <h4>{product.Title}</h4>
                                            <p>In Stock</p>
                                            <p>Product quantity:{product.Quantity}</p>
                                            <p>shipped from: Pakistan</p>
                                            <h4>{(product.Price) + '$'}</h4>
                                            <button className="proceed_checkout" onClick={ ()=>dispatch({ type: 'REMOVE_FROM_CART', payload:{product}}) }>Remove from cart</button>
                                        </div>
                                             
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                {total_quantity ?
                    <div className="right_cart">
                        <h3>
                            SubTotal ({total_quantity} items) : <span><NumberFormat value={total_price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
                        </h3>
                        <button className="proceed_checkout">proceed to checkout</button>
                    </div> :
                    <div></div>
                }

            </div>
        </div>
    )
}

export default CartSection
