import React, { Component, useEffect, useState } from "react";
import Header from './header'


function AdminDashboard() {
  
  const [data, setHotels] = useState([])

  function getHotel() {
    fetch("http://localhost:8080/hotels/").then(res => {
      return res.json()
    }).then(data => {
      setHotels(data)
      })
  }


useEffect (() => {
  getHotel()
}, [])

  return (
    <div className="App">
      <Header />

      <div className="auth-wrapper">
        <div className="Test1">

          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">image</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {data.map(i => (

                <tr key={i.di}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.descrption}</td>
                  <td>
                    <img src={i.image} alt="" />
                  </td>
                  <button  type="button" className="btn btn-primary">Reserve</button>
                </tr>

              ))}

            </tbody>
          </table>

         


        </div>
      </div>

    </div>
  )
  }

  export default AdminDashboard

