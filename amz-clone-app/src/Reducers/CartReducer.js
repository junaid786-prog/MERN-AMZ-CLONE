import AmazonProducts from "../productdata/AmazonProducts";

const initialState = {
    all_products: AmazonProducts,
    cart_products:[],
    total_quantity:0,
    total_price:0,
    qtty:0,
};

const CartReducer = (state = initialState, action)=>
{
    switch(action.type)
    {
        case 'ADD_TO_CART':

            const {detailed_product, qty, totalPrice}=action.payload;

            const check= state.cart_products.find(product=> parseInt(product.id) === parseInt(detailed_product.id));

            if(!check)
            {
                return {
                    cart_products: [...state.cart_products, detailed_product],
                    total_quantity: state.total_quantity + qty,
                    total_price: state.total_price + totalPrice,
                    qtty:qty,
                }
            }
            else
            return state;

        case 'REMOVE_FROM_CART':
            const {product} = action.payload;
            const products_after_removing =state.cart_products.filter(prd=>parseInt(prd.id)!==parseInt(product.id))
                return{
                    ...state,
                    cart_products:products_after_removing,
                    total_price:state.total_price-(product.Quantity*product.Price),
                    total_quantity: state.total_quantity-product.Quantity,
                };
        default:
            return state;
    }
}

export default CartReducer;
/*
   => Firstly check if this product is already present or not 
      if yes then donot add
   => 
 */