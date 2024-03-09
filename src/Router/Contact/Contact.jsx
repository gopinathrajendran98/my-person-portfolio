import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'

import {FaPhone, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'


const Contact = () => {
 

  const form = useRef();

  const sendEmail = (e) => {

    var text = document.getElementById("messageText").value;
    console.log("text",text)

    if(text.length === 0){
      toast.error("Error!")
      
          
    e.preventDefault();
    }else{
      toast.success("SuccessFully",{
               position:"top-right",
               autoClose:3000,
      })
      e.preventDefault();
      
    emailjs
    .sendForm('service_nzab189', 'template_agteu49', form.current, {
      publicKey: 'vlZoq5gLX7wbxB-Ic',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        console.log("message sent")
        
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    }
   e.target.reset()
 
  };

  return (
    <>
    <div class="container">
      <div class="row">
        <div class="col-6" style={{"margin-top":"50px"}}>
    <form class="row g-3 justify-content-center" ref={form} onSubmit={sendEmail} className='emailForm' >
  

    <div class="mb-3 ">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="user_name" placeholder="Your Name" style={{"width":"350px"}}/>
</div>
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="email" placeholder="Your Email" style={{"width":"350px"}}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" id="text" class="form-label">Message</label>
  <textarea class="form-control" id="messageText"  rows="3" style={{"width":"350px"}}></textarea>
</div>
    <div class="col text-center" style={{'width':"330px"}}>

    <button class="btn btn-primary" type="submit" >SEND</button>
   <ToastContainer
     closeOnClick={false}
     pauseOnHover={false}
   />
  </div>
  </form>
  </div>
  
  
  <div class="col-6" style={{"margin-top":"120px"}}>
  <div class="fa-icons">
     <h4 ><FaPhone/> : 9677681272</h4>
     <h4 style= {{"margin-top":"25px"}}><FaEnvelope/> : gopinathrajendran@gmail.com</h4>
     <h4 style={{"margin-top":"25px"}}><FaMapMarkerAlt/> : Chennai</h4>
  </div>
  </div>
  </div>
  </div>
</>

    
  );
};


export default Contact