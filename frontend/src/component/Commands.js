import { useEffect, useState } from "react"
import NavBar from "./NavBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Commands () {

    // init states :
    const [commands, setCommands] = useState([])
    toast.configure()

    // render commands data :
    const renderCommandData = () => {
        fetch("http://localhost:8080/commands").then(res => {
            return res.json()
        }).then(data => {
            setCommands(data)
        })
    }

    // delete commands by ID :
    const deleteCommand = (id) => {
        fetch(`http://localhost:8080/delete/${id}`, {
            method : 'DELETE'
        }).then(res => {
            renderCommandData()
            toast.error("Deleted Successfully !!!", {
                position : "bottom-right"
              })
        })
    }

    useEffect(() => {
        renderCommandData()
    }, [])

    return(
        <div className="App">
        <NavBar />
        <div className="auth-wrapper">
          <div className="Test1">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {commands.map(i => (
                  <tr key={i.id}>
                    <td>{i._id}</td>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.checkIn}</td>
                    <td>{i.checkOut}</td>
                    <td>
                      <button onClick={() => deleteCommand(i._id)} type="button" className="btn btn-danger">Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
    )
}