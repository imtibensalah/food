import React, {useState}from 'react';
import { Modal } from 'react-bootstrap';
import pizzas from '../pizzadata';

export default function Pizza({pizza}) {
    const [quantity , setquantity]=useState(1)
    const [varients , setvarients]=useState('small')
     
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
      
 
    return (
    <div style={{margin:'70px'}} className='shadow-lg p-3 mb-5 bg-white rounded' >
       <div onClick={handleShow}>
       <h1>{pizza.name}</h1>
        <img src={pizza.image} className="img-fluid" style={{height:'200px' ,   width:'200px'}} />
       </div>
       
       <div className="flex-container">
       <div >
    <p>Varients</p>
    <select className='from-control'value={varients}onChange={(e)=>{setvarients(e.target.value)}}>
        {pizza.Varients.map(Varients => (
            <option value={Varients}>{Varients}</option>
        ))}
    </select>
</div>


<div >
    <p>Quantity</p>

    <select className='from-control'value={quantity}onChange={(e)=>{setquantity(e.target.value)}}>
        {[...Array(10).keys()].map((x, i) => {

        return <option value={i + 1}>{i + 1}</option>
         })}
    </select>
</div>


</div>


<div className="flex-container">
    <div className='m-1  w-50' >
        <h1 className='mt-1'>Prices:{pizza.Prices[0][varients]*quantity}  € </h1>
    </div>
    <div className='w-50'>
        <button className="btn">ADD TO CART</button>
    </div>
</div>


<Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} className='img-fluid' style={{height: '300px'}}/>
        <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>

  
       
       
       
  )
}
