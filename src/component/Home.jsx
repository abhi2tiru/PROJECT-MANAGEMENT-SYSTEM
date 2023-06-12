import React, { useEffect, useState } from 'react'
import productservice from '../service/productservice';
import {Link} from 'react-router-dom';
const Home = () => {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    productservice.getAll().then((res)=>setProducts(res.data)).catch((e)=>console.log(e));
  },[]);
  const deletePro=(id)=>
  {
    productservice.deletepro(id).then((res)=>{console.log("DELETE SUCCESS")
    document.getElementById(id+"").style.display='none';
  }
    ).catch((e)=>{console.log(e)});
  }
  return (
    <div className='containner'>
      <div className='card'>
        <div className='card-header fs-3'>PRODUCT DETAILS</div>
        <div className='card-body'>
      <table class="table ">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">NAME</th>
      <th scope="col">COST</th>
      <th scope="col">DESCRIPTION</th>
      <th scope="col">STATUS</th>
      <th scope="col">EDIT</th>
      <th scope="col">DELETE</th> 
    </tr>
  </thead>
  <tbody>
    {products.map(
      function(e)
      {
        return (
          <tr id={e.pid}>
          <td scope='row'>{e.pid}</td>
          <td >{e.pname}</td>
          <td >{e.pcost}</td>
          <td >{e.description}</td>
          <td >{e.status}</td>
          <td><button className='btn btn-success'><Link to={"editproduct/"+e.pid} style={{textDecoration:'none',color:'black'}}>EDIT</Link></button></td>
          <td><button  className='btn btn-primary' onClick={()=>{deletePro(e.pid)}}>DELETE</button></td> 
          </tr>);
      }
    )}
  </tbody>
</table>
</div>
</div>    </div>
  )
}

export default Home;
