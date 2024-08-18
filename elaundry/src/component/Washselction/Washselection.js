import React from 'react'
import './wash.css'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
const Washselection = () => {
  const navigate=useNavigate()
    const {register,handleSubmit}=useForm()
    const submit=async(data)=>{
        console.log(data)
        data.email=localStorage.getItem('email')
        // console.log(data.no_of_cloths.no_of_traditional_cloths*20)
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
            navigate('/address')
            // reset()
           
      }
  return (
    <>
    <div className="container6">
        <div className="washselction">
            <form action="" onSubmit={handleSubmit(submit)}>
                <h1>Type of wash</h1>
                <div>
                <label htmlFor="normal">Normal Wash</label>
                <input type="radio"  value="normal-50" id="normal" {...register("type_of_wash")} />
                <p>₹ 50</p>
                </div>
                <div>
                <label htmlFor="dry">Dry Cleaning</label>
                <input type="radio"  id="dry" value="Dry Cleaning-80" {...register("type_of_wash")} />
                <p>₹ 80</p>
                </div>
                <div>
                <label htmlFor="express">Express Wash</label>
                <input type="radio"  id="express" value="Express Wash-120" {...register("type_of_wash")}/>
                <p>₹ 120</p>
                </div>
                <div>
                <label htmlFor="syw">Synthetic & Woolen Wash</label>
                <input type="radio" id="syw"  value="Synthetic & Woolen Wash-100"{...register("type_of_wash")}/>
                <p>₹ 100</p>
                </div>
                <div>
                <label htmlFor="warm">Warm Wash</label>
                <input type="radio"  id="warm" value='Warm Wash-60' {...register("type_of_wash")}/>
                <p>₹ 60</p>
                </div>
                <div>
                <label htmlFor="cotten">Cotten Wash</label>
                <input type="radio"  id="cotten" value="Cotten Wash-65" {...register("type_of_wash")}/>
                <p>₹ 65</p>
                </div>
              <button className='btn6'>Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Washselection
