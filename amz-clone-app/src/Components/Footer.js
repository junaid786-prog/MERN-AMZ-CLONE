
import '../Css/componentscss/footer.css'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_section">

                <div className='combo_of_sections'>
                    <div className="about_us footer_component">
                        <div className="heading1">
                            <h4>Get to Know Us </h4>
                        </div>
                        <div className="footer_content">
                            <ul>
                                <li>Careers</li>
                                <li>Blog</li>
                                <li>About Amazon</li>
                                <li>Investor Relations</li>
                                <li>Amazon Devices</li>
                            </ul>
                        </div>
                    </div>
                    <div className="make_money footer_component">
                        <div className="heading">
                            <h4>Make Money with Us</h4>
                        </div>
                        <div className="footer_content">

                            <ul>
                                <li>Sell products on Amazon</li>
                                <li>Sell on Amazon Business</li>
                                <li>Sell apps on Amazon</li>
                                <li>Become an Affiliate</li>
                                <li>Advertise Your Products</li>
                                <li>Self-Publish with Us</li>
                                <li>Host an Amazon Hub</li>
                                <li>See More Make Money with Us</li>
                            </ul>


                        </div>
                    </div>
                </div>
                <div className='combo_of_sections'>


                    <div className="payment_products footer_component">
                        <div className="heading">
                            <h4>Amazon Payment Products</h4>
                        </div>
                        <div className="footer_content">
                            <ul>
                                <li>Amazon Business Card</li>
                                <li>Shop with Points</li>
                                <li>Reload Your Balance</li>
                                <li>Amazon Currency Converter</li>

                            </ul>
                        </div>
                    </div>
                    <div className="let_help footer_component">
                        <div className="heading">
                            <h4>Let Us Help You</h4>
                        </div>
                        <div className="footer_content">
                            <ul>
                                <li>Amazon and COVID-19</li>
                                <li>Your Account</li>
                                <li>Your Orders</li>
                                <li>Shipping Rates & Policies</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <hr></hr>
            <div className="footer_links">
                <a href='/'>Conditions of Use</a >
                <a href='/'>Privacy Notice</a >
                <a href='/'>Interest-Based</a>
                <a href='/'>Ads© 1996-2021 , Amazon.com, Inc. or its affiliates</a>

            </div>
        </div>
    )
}
export default Footer;

