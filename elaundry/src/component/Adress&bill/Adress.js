import React, { useState } from "react";
import "./adress.css";
import { useForm } from "react-hook-form";
import {useNavigate}  from 'react-router-dom'
const Adress = () => {
    const navigate=useNavigate()
  const { register, handleSubmit } = useForm();
  const [addstate, setaddstate] = useState({});
  const [add1state, set1addstate] = useState(0);
  

  const submit = async (data) => {
    // console.log(data)
    setaddstate(data);
    data.email = localStorage.getItem("email");
    const response = await fetch("getdata", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
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
    let result = await response.json();
    //   alert(result.message);
    console.log(result);
    console.log(result[0].no_of_cloths.male_cloths.no_of_shirts);
    set1addstate(result);
   
  };

  return (
    <>
      <div className="a-container">
        <div className="a-left">
          <h1>Address</h1>
          <div>
            <form action="" onSubmit={handleSubmit(submit)}>
              <label htmlFor="pickup">House no/Flat no:</label>
              <input
                type="text"
                id="pickup"
                placeholder="Enter house no"
                {...register("Hnumber",{required:true})}
              />
              <label htmlFor="drop">Society Name:</label>
              <input
                type="text"
                id="drop"
                placeholder="Enter society name"
                {...register("sname",{required:true})}
              />
              <label htmlFor="street">Street:</label>
              <input
                type="text"
                id="street"
                placeholder="Enter street name"
                {...register("street",{required:true})}
              />
              <label htmlFor="city">City/Pincode:</label>
              <input
                type="text"
                id="city"
                placeholder="City/Pincode..."
                {...register("citypincode",{required:true})}
              />
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                placeholder="State name"
                {...register("state",{required:true})}
              />
              <button className="btn111">Generate bill</button>
            </form>
          </div>
        </div>

        {add1state ? (
          <div className="a-right">
            <div className="bill">
              <div className="one">
                <p>HP__E-laundry</p>
              </div>
              <hr style={{ height: "3px", backgroundColor: "black" }} />
              <div className="two">
                <p>
                  Customer name: <span>{add1state[0].name}</span>{" "}
                </p>
                <p style={{ display: "block" }}>
                  Contact:<span>{add1state[0].number}</span>
                </p>
                <div>
                  Address:{" "}
                  <span>
                    {addstate.Hnumber},{addstate.sname},{addstate.street},<br />
                    <div>
                      {addstate.citypincode},{addstate.state}
                    </div>
                  </span>
                </div>
              </div>
              <hr style={{ height: "3px", backgroundColor: "black" }} />
              <div className="three">
                <p>Clothes-Type</p>
                <p>Total bill</p>
              </div>
              <hr style={{ height: "3px", backgroundColor: "black" }} />
              <br />
              <br />
              <div className="items1">
                <div>
                  <p>Shirts</p> &nbsp; x &nbsp;{" "}
                  <p>{add1state[0].no_of_cloths.male_cloths.no_of_shirts?add1state[0].no_of_cloths.male_cloths.no_of_shirts:0}</p>
                </div>
                <div>
                  {" "}
                  ₹{" "}
                  {add1state[0].no_of_cloths.male_cloths.no_of_shirts?parseInt(
                    add1state[0].no_of_cloths.male_cloths.no_of_shirts
                  ) * 30:0}
                </div>
              </div>
              <hr />
              <div className="items1">
                <div className="items1">
                  <p>Pants</p> &nbsp; x &nbsp;{" "}
                  <p>{add1state[0].no_of_cloths.male_cloths.no_of_pents}</p>
                </div>
                <div>
                  {" "}
                  ₹{" "}
                  {parseInt(add1state[0].no_of_cloths.male_cloths.no_of_pents) *
                    30}
                </div>
              </div>
              <hr />
              <div className="items1">
                <div className="items1">
                  <p>Saari & Skirts</p> &nbsp; x &nbsp;{" "}
                  <p>{add1state[0].no_of_cloths.female_cloths.no_of_saris}</p>
                </div>
                <div>
                  {" "}
                  ₹{" "}
                  {parseInt(
                    add1state[0].no_of_cloths.female_cloths.no_of_saris
                  ) * 100}
                </div>
              </div>
              <hr />
              <div className="items1">
                <div className="items1">
                  <p>Tops</p> &nbsp; x &nbsp;{" "}
                  <p>{add1state[0].no_of_cloths.female_cloths.no_of_tops}</p>
                </div>
                <div>
                  {" "}
                  ₹{" "}
                  {add1state[0].no_of_cloths.female_cloths.no_of_tops?parseInt(
                    add1state[0].no_of_cloths.female_cloths.no_of_tops
                  ) * 70:0}
                </div>
              </div>
              <hr />
              <div className="items1">
                <div className="items1">
                  <p>Dresses</p> &nbsp; x &nbsp;{" "}
                  <p>{add1state[0].no_of_cloths.female_cloths.no_of_dresses}</p>
                </div>
                <div>
                  {" "}
                  ₹{" "}
                  {add1state[0].no_of_cloths.female_cloths.no_of_dresses?parseInt(
                    add1state[0].no_of_cloths.female_cloths.no_of_dresses
                  ) * 70:0}
                </div>
              </div>
              <hr />
              <div className="items1">
                <div className="items1">
                  {" "}
                  <p>Traditional Wear</p> &nbsp; x &nbsp;{" "}
                  <p>{add1state[0].no_of_cloths.no_of_traditional_cloths}</p>
                </div>
                <div>
                  {" "}
                  ₹{" "}
                  {add1state[0].no_of_cloths.no_of_traditional_cloths?parseInt(
                    add1state[0].no_of_cloths.no_of_traditional_cloths
                  ) * 100:0}
                </div>
              </div>
              <hr />
              <div className="items1">
                <div className="items1">
                  <p>Type of Wash</p> &nbsp; - &nbsp;{" "}
                  <p>{add1state[0].type_of_wash.split("-")[0]}</p>
                </div>
                <div>
                  {" "}
                  ₹ {parseInt(add1state[0].type_of_wash.split("-")[1])}
                </div>
              </div>
              <br />
              <hr style={{ height: "3px", backgroundColor: "black" }} />
              <div className="items1">
                <div style={{ fontSize: "19px", fontWeight: "600" }}>
                  Total Bill
                </div>
                <div style={{ fontSize: "19px", fontWeight: "600" }}>
                  {" "}
                  ₹{" "}
                  {parseInt(
                    add1state[0].no_of_cloths.male_cloths.no_of_shirts
                  ) *
                    30 +
                    parseInt(
                      add1state[0].no_of_cloths.male_cloths.no_of_pents
                    ) *
                      30 +
                    parseInt(
                      add1state[0].no_of_cloths.female_cloths.no_of_saris
                    ) *
                      100 +
                    parseInt(
                      add1state[0].no_of_cloths.female_cloths.no_of_tops
                    ) *
                      70 +
                    parseInt(
                      add1state[0].no_of_cloths.female_cloths.no_of_dresses
                    ) *
                      70 +
                    parseInt(
                      add1state[0].no_of_cloths.no_of_traditional_cloths
                    ) *
                      100 +
                    parseInt(add1state[0].type_of_wash.split("-")[1])}
                </div>
              </div>

              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div>
                  <p>Customer helpline number: +91 111-222-3333</p>
                </div>
              </div>
             
            </div>
            <button onClick={()=>{navigate('/')}} className="btn111 paybill" >Pay Bill Offline</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Adress;
