import React from 'react';
import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';
/* redux */
import { connect } from 'react-redux';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem
                        key={cartItem.id}
                        item={cartItem}
                    />
                ))
            }
        </div>
        <CustomButton title='Go to checkout' />
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems })

export default connect(mapStateToProps)(CartDropdown);