import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import emailimage from '../Assets/email_image.jpg'
import '../User/Message.css'
import axios from '../Axios/Axios.js';
import { useNavigate } from 'react-router-dom';
export const Message = () => {
    const[from,sfrom]=useState("praveen.aeropilot@gmail.com")
    const[to,sto]=useState("")
    const[text,stext]=useState("")
    const navigate=useNavigate()
    const sendmail=async()=>{
        const userdata={
            from:from,
            to:to,
            messagedata:text
        }
        try
        {
            const response=await axios.post('/messages',userdata)
            const responsemail=await axios.post('/sendmail',userdata)
            alert(responsemail.data.message)
            alert(response.data.message)
        }
        catch(error)
        {
            alert('Message Saved Failed')
            console.error(error);  
        }
    }
  return (
    <div className='msix'>
        <div className="card mb-3 mone" style={{maxWidth:'540px'}}>
            <div className="row g-0 mtwo">
                <div className="col-md-4 mthree">
                    <img src={emailimage} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8 mfour">
                    <button className='mseven' onClick={()=>{navigate('/userdatas')}}>Data</button>
                    <div className="card-body mfive">
                        <h5 className="card-title">Email</h5>
                        <p className="card-text">From : {from}</p>
                        <p>To : <input type='email' onChange={(event)=>{sto(event.target.value)}}/></p>
                        <p>Text : <input type="text" onChange={(event)=>{stext(event.target.value)}}/></p>
                        <button onClick={()=>{sendmail()}}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
