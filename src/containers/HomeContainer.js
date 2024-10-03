import { connect } from 'react-redux';
import Home from '../components/Home';
import { addToCart,removeFromCart } from '../services/actions/action';

const mapDispatchToProps = (dispatch) => ({
    addToCartHandler: (data) => dispatch(addToCart(data)),
    removeFromCartHandler:(data)=>dispatch(removeFromCart(data))
});

const mapStateToProps = (state) => ({
    cartData: state.cartItems 
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
