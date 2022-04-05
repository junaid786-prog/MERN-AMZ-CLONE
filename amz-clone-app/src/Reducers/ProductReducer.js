import AmazonProducts from "../productdata/AmazonProducts";

const initialState = {
    all_products: AmazonProducts,
    detailed_product: {},
};

const ProductReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case 'PRODUCT_DETAIL':
            {
                return {
                    ...state,
                    detailed_product: AmazonProducts.find(product => parseInt(product.id) === parseInt(action.id))
                };
            }
        default:
            return state;
    }

}

export default ProductReducer;