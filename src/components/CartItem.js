import React from 'react'

export const CartItem = ({product}) => {
    return (
        <div className="cart-items">
            <p>{product.name}</p>
            <p>{"$" + product.price}</p>
        </div>
    )
}
