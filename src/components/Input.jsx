import React, { useContext, useState, useTransition } from "react";
import CartContext from "./CartContext";
import ItemList from "./ItemList";

const Input = (props) => {
  const [name,setName]=useState()
  const [desc,setDesc]=useState()
  const [price,setPrice]=useState()
  const [allData,setAllData]=useState([])

  const ctx=useContext(CartContext)
  const nameHandler=(e)=>{
    setName(e.target.value)
  }
  const descHandler=(e)=>{
   setDesc(e.target.value)

  }
  const priceHandler=(e)=>{
    setPrice(e.target.value)


  }
  let dataObj={
    name:name,
    desc:desc,
    price:price,
    qty:1
  }
const onSubmitHandler=e=>{
  setAllData(prevData=>{
    return [...prevData,dataObj]
  })
  // props.onData(dataObj)
// ctx.onCtxData(dataObj)
}

  return (
    <div style={{position:'sticky',width:'30rem'}}>
      <div >
        <input required onChange={nameHandler} style={{width:'20rem',marginTop:'2rem' ,marginLeft:'5rem', height:'3rem'}}  type="text" placeholder="CandyName" />
      </div>
      <div>
        <input required onChange={descHandler}  style={{width:'20rem',marginTop:'2rem' ,marginLeft:'5rem', height:'3rem'}} type="text" placeholder="Description" />
      </div>
      <div>
        <input required onChange={priceHandler} style={{width:'20rem',marginTop:'2rem' ,marginLeft:'5rem', height:'3rem'}}  type="number" placeholder="Price" />
      </div>
      <div>
        <button onClick={onSubmitHandler} style={{width:'20rem',marginTop:'2rem' ,marginLeft:'5rem', height:'3rem'}}>Add Item</button>
      </div>
      {
        allData.map((ele)=>(
          <div>
            <ItemList
            name={ele.name}
            desc={ele.desc}
            price={ele.price}
            qty={ele.qty}
            
            />
          </div> 
        ))
      }
    </div>
  );
};

export default Input;
