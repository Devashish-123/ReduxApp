import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { deleteUser } from "./userReducer";


export function Table(){
    var navigate = useNavigate()
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    function handleAddClick(){
        navigate("/form")
    }

   const handleDeleteClick = (id) =>{
    const isConfirmed = window.confirm('Are you really want to delete this record?');
    if(isConfirmed){
        dispatch (deleteUser({id: id}))
    }
   }

    return(
        <div className="table-container">
            <div>
                <h2 className="text-center">Details</h2>
                <button onClick={handleAddClick} className="btn btn-success">Add Details</button>
                <table className="table table-hover w-100">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Age</th>
                            <th>Adress</th>
                            <th>Profile Image</th>
                            <th>Favourite Color</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index)=>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.city}</td>
                                <td>{item.state}</td>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>{item.age}</td>
                                <td>{item.adress}</td>
                                <td>{item.image}</td>
                                <td>{item.color}</td>
                                <td>{item.status}</td>
                                <td>
                                    <Link to={`/edit/${item.id}`} className="btn btn-warning w-50 m-1">Edit</Link>
                                    <button onClick={() => handleDeleteClick(item.id)} className="btn btn-danger w-50 m-1">Delete</button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}