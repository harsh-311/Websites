import React from 'react'
import {useForm} from 'react-hook-form'
import './cloths.css'
import { useNavigate } from 'react-router-dom'
const Cloths = () => {
  const navigate = useNavigate()
  const {handleSubmit,register,reset}=useForm()
  const submit=async(data)=>{
    data.email=localStorage.getItem('email')
    console.log(data.no_of_cloths.no_of_traditional_cloths*20)
    const response = await fetch('update', {
          method: "PATCH", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        let result=await response.json()
        // alert(result.message);
        reset()
        navigate('/wash')
        // Navigate
        // if(result.message==='Data Store Successfully...')
        // {
        //     reset()

        // } 
  }
  return (
    <>
    <div className="container1">
        {/* <div className="form"> */}
        <form action="" onSubmit={handleSubmit(submit)}>
            <h1>Submit number of clothes...</h1>
            <div className="formcloths">
           <div className="cloths">
            <label htmlFor="shirt">No of Shirts:</label>
            <input type="number" id='shirt' min={0} {...register('no_of_cloths.male_cloths.no_of_shirts')} />
           </div>
           <div className="cloths">
            <label htmlFor="pents">No of Pants:</label>
            <input type="number" id='pents' min={0} {...register('no_of_cloths.male_cloths.no_of_pents')}/>
           </div>
           <div className="cloths">
            <label htmlFor="saari">No of Saari & Skirts:</label>
            <input type="number" id='saari'  min={0} {...register('no_of_cloths.female_cloths.no_of_saris')}/>
           </div>
           <div className="cloths">
            <label htmlFor="tops">No of Tops:</label>
            <input type="number" id='tops'  min={0} {...register('no_of_cloths.female_cloths.no_of_tops')}/>
           </div>
           <div className="cloths">
            <label htmlFor="dress">No of Dresses:</label>
            <input type="number" id='dress'  min={0} {...register('no_of_cloths.female_cloths.no_of_dresses')}/>
           </div>
           <div className="cloths">
            <label htmlFor="tradtional">No of TraditionalWear:</label>
            <input type="number" id='tradtional'  min={0} {...register('no_of_cloths.no_of_traditional_cloths')}/>
            <p style={{position:'absolute',bottom:'220px'}}>@all ethnic wears..</p>
            </div>
           </div>
            <button className='btn11'>Submit</button>
        </form>
        {/* </div> */}
        <div className="right-container">
          <div className="top-container">
         <h1>Wash & Fold</h1>
         <div className='items'>
         <div><i className="zmdi zmdi-arrow-right" ></i><p>Wash and Fold ₹ 30</p></div>
         <div><i className="zmdi zmdi-arrow-right"></i><p>Free Tide</p></div>     
         <div><i className="zmdi zmdi-arrow-right"></i><p>Free Downy</p></div>  
        <div><i className="zmdi zmdi-arrow-right"></i><p>Free Separation</p></div>
         </div>
          </div>
          <div className="top-container">
          <h1>Dry Cleaning</h1>
          <div className="item">
          <div><i className="zmdi zmdi-arrow-right" ></i><p>With Press ₹ 20</p></div>
          <div><i className="zmdi zmdi-arrow-right" ></i><p>Traditional ₹ 100</p></div>
          <div><i className="zmdi zmdi-arrow-right" ></i><p>Blouses,Ties,Handkerchief ₹ 20</p></div>
          <div><i className="zmdi zmdi-arrow-right" ></i><p>Pants & Shirt ₹ 30</p></div>
          <div><i className="zmdi zmdi-arrow-right" ></i><p>Dresses & Top ₹ 70</p></div>
          <div><i className="zmdi zmdi-arrow-right" ></i><p>Saaris & Skirts ₹ 100</p></div>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Cloths
