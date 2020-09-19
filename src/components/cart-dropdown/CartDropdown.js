import React from 'react';
import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';
/* redux */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* redux */
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, dispatch, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem
                            key={cartItem.id}
                            item={cartItem}
                        />
                    ))
                    :
                    <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton
            title='Go to checkout'
            onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}
        />
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default withRouter(
    connect(mapStateToProps)
        (CartDropdown));