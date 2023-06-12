import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import productservice from '../service/productservice';

const AddProduct = () => {
  const [msg,setMsg]=useState("");
  const [product,setProduct]=useState({
    "pname":"",
    "pcost":"",
    "description":"",
    "status":""
  });
  const handleChange=(e)=>{
    const value=e.target.value;
    setProduct({...product,[e.target.name]:value});
    console.log(product);
  }
  const navigate=useNavigate();
 
  const ProductRegister=(e)=>{
    e.preventDefault();  
    console.log(product);
    productservice.saveproduct(product).then((res)=>{navigate("/")}).catch((error)=>console.log(error));
  }
  return (
    <div>
      <div className="containner mt-3">
        <div className='row'>
          <div className="col-md-6 offset-md-3">
            <div className="card">
              
            <div className="card-header fs-3">
              <h1>ADD PRODUCT</h1>
              <br/>
              <h1>{msg}</h1>
              </div>
              <div className="card-body">
              <form onSubmit={(e)=>ProductRegister(e)}>
                <div className='md-3'>
                <label>ENTER PRODUCT NAME</label>
                <input name='pname' type='text' className='form-control' onChange={(e)=>handleChange(e)}/>
                </div>

                <div className='md-3'>
                <label>ENTER PRODUCT COST</label>
                <input name='pcost' type='number' className='form-control' onChange={(e)=>handleChange(e)}/>
                </div>

                <div className='md-3'>
                <label>ENTER PRODUCT STATUS</label>
                <input name='status' type='text' className='form-control' onChange={(e)=>handleChange(e)}/>
                </div>
                
                <div className='md-3'>
                <label>ENTER PRODUCT DESCRIPTION</label>
                <input name='description' type='text' className='form-control' onChange={(e)=>handleChange(e)}/>
                </div>
                <br/>
                <button className='btn btn-primary col-md-12'>ADD PRODUCT</button>
             
              </form>
              </div>
            </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AddProduct
