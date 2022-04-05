import {Link} from 'react-router-dom'

import ProductCategories from "../productdata/ProductCategories";

import '../Css/componentscss/categories.css'

const Categories=()=> {
    return (
        <div className="category_section">
            {
                ProductCategories.map((category) => {
                    return (
                        <div key={category.id}>
                            <div className="category" >
                                <div className="names" >
                                    {category.category_name}
                                </div>
                                <div className="category_img">
                                    <img src={category.category_img} alt= {category.category_name}></img>
                                </div>
                                <div className="category_button">
                               <Link to={`/${category.id}`}> <a>Shop now</a></Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )

}
export default Categories;