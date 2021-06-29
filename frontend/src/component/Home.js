import { useEffect, useState } from "react"
import NavBar from "./NavBar";

export default function Home () {

    const [hotels, setHotels] = useState([])
    const [fullname, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")

    // Get hotel data :
    const getHotelsData = () => {
        fetch("http://localhost:8080/hotels").then(res => {
            return res.json()
        }).then(data => {
            setHotels(data)
        })
    }

    // Add a reservations 
    const commandHotel = () => {
        fetch("http://localhost:8080/reservation", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                name : fullname,
                email : email,
                checkIn : checkIn,
                checkOut : checkOut
            })
        }).then(res => {
            return res.json()
        })
    }

    useEffect(() => {
        getHotelsData()
    })

    return(
        
            <div className="App"> 
                 <NavBar />

                <div className="auth-wrapper">
                    
                <div className="auth-inner">

                <div className="row">
                        {hotels.map((i) => (
                            <div class="col-md-3 col-sm-6 item">
                                <div class="card item-card card-block ">
                                    <img src={i.image} />
                                    <h5 class="item-card-title mt-3 mb-3">{i.name}</h5>
                                        <p class="card-text">{i.desc}</p> 
                                        <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal">command Now</button>
                                </div>
                            </div>
                        ))}

                    {/* ---------------PopUp--------------------- */}

                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div className="form-group">
                                    <label>Enter your fullName:</label>
                                        <input onChange={event => setFullName(event.target.value)} className="form-control" type="text"  />
                                    </div>
                                    <div className="form-group">
                                    <label>Enter your email:</label>
                                        <input onChange={event => setEmail(event.target.value)} className="form-control" type="text"/>
                                    </div>
                                    <div className="form-group">
                                    <label>Start Date:</label>

                                        <input onChange={event => setCheckIn(event.target.value)} className="form-control" type="date" />
                                    </div>
                                    <div className="form-group">
                                    <label>End Date:</label>
                                        <input onChange={event => setCheckOut(event.target.value)} className="form-control" type="date" />
                                    </div>
                                </div>
                                <div class="modal-footer">
                                   
                                    <button type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal1" onClick={commandHotel}>Reserve Here</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    {/* -------------PopUp----------- */}
                </div>
            </div>
        </div>
        </div>
    )
}