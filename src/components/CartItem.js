import React from 'react'

export const CartItem = ({product}) => {
    return (
        <div className="cart-items">
            <p className="cart-item-text">{product.name}</p>
            <p className="cart-item-text">{"$" + product.price}</p>
        </div>
    )
}
