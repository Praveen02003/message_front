import axios from '../Axios/Axios.js';
import React, { useEffect, useState } from 'react';
import '../Admin/Userdatas.css'
export const Userdatas = () => {
  const [userdatas, suserdatas] = useState([]);
  const[refresh,srefresh]=useState(0)
  const deletedata=async(data)=>{
    const userdata={
      _id:data._id
    }
    try
    {
      const response=await axios.post('/deleteuserdata',userdata)
      alert(response.data.message)
      srefresh(refresh+1)
    }
    catch(error)
    {
      console.error("Failed To Delete",error);
      
    }
  }
  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await axios.get('/messagedata');
        suserdatas(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    getdata();
  }, [refresh]);

  return (
    <div className='uone'>
      <h2>USER DATAS</h2>
      <table border="2" className='utwo'>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Message</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {userdatas.map((data, index) => (
            <tr key={index}>
              <td>{data.from}</td>
              <td>{data.to}</td>
              <td>{data.messagedata}</td>
              <td><button onClick={()=>{deletedata(data)}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
