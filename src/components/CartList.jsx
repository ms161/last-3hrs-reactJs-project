import React from 'react'
import { useContext } from 'react'
import CartContext from './CartContext'

const CartList = (props) => {

    const cartItemDelete=e=>{
e.target.parentElement.remove()
    }
    const ctx=useContext(CartContext)
  return (
    <div  style={{display:'flex',gap:'10rem',borderBottom:'2px solid black',padding:'2rem'}}>

        <div>
          Name  :{props.name}
        </div>
        <div>
          Description : {props.desc}
        </div>
        <div>
          Price:  {props.price}
        </div>
        <div>
          Quantity:  {props.qty}
        </div>
     <button onClick={cartItemDelete}>Delete Item</button>
    </div>
  )
}

export default CartList