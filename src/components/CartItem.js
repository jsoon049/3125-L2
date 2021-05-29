import React from 'react'

export const CartItem = ({product}) => {
    return (
        <div className="cart-items">
            <p className="cart-item-text itemName">{product.name}</p>
            <p className="cart-item-text">{"$" + product.price}</p>
        </div>
    )
}
