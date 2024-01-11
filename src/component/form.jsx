import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { addUser } from "./userReducer"
import { useDispatch, useSelector } from "react-redux"


export function Form(){

    const[error, setError] = useState({"nameError":" ", "emailError":" ", "passwordError":" ","adressError":" ","profileImageError":" ",})
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("");
    const[city, setCity] = useState("Not Selected")
    const[state, setState] = useState("Not Selected")
    const[date, setDate] = useState("Not Selected")
    const[time, setTime] = useState("Not Selected")
    const[age, setAge] = useState("Not Selected")
    const[adress, setAdress] = useState("")
    const[image, setImage] = useState("");
    const[color, setColor] = useState("Not Selected")
    const[status, setStatus] = useState("Unactive")

    const[ageRange, setAgeRange] = useState("");
    const navigate = useNavigate();
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();

    // Validations On Submit Button
    function handleSubmit(e){
        e.preventDefault()
        var btnSubmit = document.getElementById("btnSubmit")
        var Name = document.getElementById("txtName");
        var Email = document.getElementById("txtEmail");
        var Password = document.getElementById("txtPassword");
        var City = document.getElementById("lstCity");
        var State = document.getElementById("lstState");
        var Date = document.getElementById("txtDate");
        var Time = document.getElementById("txtTime");
        var Age = document.getElementById("txtAge");
        var Adress = document.getElementById("txtAdress");
        var Image = document.getElementById("txtImage");
        var Color = document.getElementById("txtColor");
        var Status = document.getElementById("checkStatus");
        var nameRegEx = /^[a-zA-Z\s]+$/;
        var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(Name.value == ""){
            setError({
                "nameError":"please enter name"
            })
            Name.focus()
        }
        else if(Email.value == ""){
            setError({
                "emailError":"please enter email"
            })
            Email.focus()
        } else if(Password.value == ""){
            setError({
                "passwordError":"please enter password"
            })
            Password.focus()
        } else if(Adress.value==""){
            setError({
                "adressError":"please enter adress"
            })
            Adress.focus()
        } else if(Image.value == ""){
            setError({
                "profileImageError":"please choose file"
            })
        } 
        else {
            dispatch(addUser({id:users[users.length - 1].id + 1, name,email,password,city,state,date,time,age,adress,image,color,status}))
            navigate("/table")
        }
        
    }


    // Validations On onChange
    function handleNameChange(e){
        setName(e.target.value)
        var nameRegEx = /^[a-zA-Z\s]+$/;
        setError({
            "nameError":"",
            "emailError":error.emailError, 
            "passwordError":error.passwordError,
            "adressError":error.adressError,
            "profileImageError":error.profileImageError
        })
        if(e.target.value.length >=15){
            setError({
                "nameError":" allow only alphabets and white space and max 15 characters",
                "emailError":error.emailError, 
                "passwordError":error.passwordError,
                "adressError":error.adressError,
                "profileImageError":error.profileImageError
            })
            document.getElementById("btnSubmit").disabled = true
            document.getElementById("txtEmail").disabled = true
            document.getElementById("txtPassword").disabled = true
            document.getElementById("txtAdress").disabled = true
            document.getElementById("txtImage").disabled = true
        }
        else if(e.target.value.match(nameRegEx)){
            setName(e.target.value)
            setError({
                "nameError":"",
                "emailError":error.emailError, 
                "passwordError":error.passwordError,
                "adressError":error.adressError,
                "profileImageError":error.profileImageError
            })
            document.getElementById("btnSubmit").disabled = false
            document.getElementById("txtEmail").disabled = false
            document.getElementById("txtPassword").disabled = false
            document.getElementById("txtAdress").disabled = false
            document.getElementById("txtImage").disabled = false
        } else{
            setError({
                "nameError":" allow only alphabets and white space and max 15 characters",
                "emailError":error.emailError, 
                "passwordError":error.passwordError,
                "adressError":error.adressError,
                "profileImageError":error.profileImageError
            })
            document.getElementById("btnSubmit").disabled = true
            document.getElementById("txtEmail").disabled = true
            document.getElementById("txtPassword").disabled = true
            document.getElementById("txtAdress").disabled = true
            document.getElementById("txtImage").disabled = true
           
        }
    }
    ///////////////////



    function handleEmailChange(e){
        setEmail(e.target.value)
        var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setError({
            "nameError":error.nameError,
            "emailError":"",
            "passwordError":error.passwordError,
            "adressError":error.adressError,
            "profileImageError":error.profileImageError
        })
        if(e.target.value.match(emailRegEx)){
            setEmail(e.target.value)
            setError({
                "nameError":error.nameError,
                "emailError":"",
                "passwordError":error.passwordError,
                "adressError":error.adressError,
                "profileImageError":error.profileImageError
            })
            document.getElementById("btnSubmit").disabled=false;
            document.getElementById("txtName").disabled = false
            document.getElementById("txtPassword").disabled = false
            document.getElementById("txtAdress").disabled = false
            document.getElementById("txtImage").disabled = false
           
        } else{
            setError({
                "nameError":error.nameError,
                "emailError":"allow email only",
                "passwordError":error.passwordError,
                "adressError":error.adressError,
                "profileImageError":error.profileImageError
            })
            document.getElementById("btnSubmit").disabled=true
            document.getElementById("txtName").disabled = true
            document.getElementById("txtPassword").disabled = true
            document.getElementById("txtAdress").disabled = true
            document.getElementById("txtImage").disabled = true
            
        }
    }
    /////////

    function handlePasswordChange(e){
        setPassword(e.target.value)
        var passRegEx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/
        setError({
            "nameError":error.nameError,
            "emailError":error.emailError,
            "passwordError":"",
            "adressError":error.adressError,
            "profileImageError":error.profileImageError
        })
        if(e.target.value.match(passRegEx)){
            setPassword(e.target.value)
            setError({
                "nameError":error.nameError,
                "emailError":error.emailError,
                "passwordError":"",
                "adressError":error.adressError,
                "profileImageError":error.profileImageError
            })
            document.getElementById("btnSubmit").disabled=false
            document.getElementById("txtName").disabled = false
            document.getElementById("txtEmail").disabled = false
            document.getElementById("txtAdress").disabled = false
            document.getElementById("txtImage").disabled = false

        } else{
            setError({
                "nameError":error.nameError,
                "emailError":error.emailError,
                "passwordError" : "Don’t allow normal password. Expect once alphabet, one digit, one special character",
                "adressError":error.adressError,
                "profileImageError":error.profileImageError
            })
            document.getElementById("btnSubmit").disabled=true
            document.getElementById("txtName").disabled = true
            document.getElementById("txtEmail").disabled = true
            document.getElementById("txtAdress").disabled = true
            document.getElementById("txtImage").disabled = true
        }
    }
    /////////////

    function handleCityChange(e){
       setCity((e.target.value=="Select City")?"Not Selected":e.target.value)
    }
    //////////

    function handleStateChange(e){
        setState((e.target.value=="Select State")?"Not Selected":e.target.value)
    }
    /////////

    function handleDateChange(e){
        setDate((e.target.value=="")?"Not Selected":e.target.value)
    }
    ///////

    function handleTimeChange(e){
        setTime((e.target.value=="")?"Not Selected":e.target.value)
    }
    ////////

    function handleColorChange(e){
        setColor((e.target.value=="")?"Not Selected":e.target.value)
    }
    /////

    function handleAgeChange(e){
        setAge((e.target.value=="")?"Not Selected":e.target.value)
    }
    //////////

    function handleStatusChange(e){
        setStatus((e.target.checked)?"Active":"Unactive")
    }
    ////////


    function handleAdressChange(e){
        setAdress(e.target.value)
        setError({
            "nameError":error.nameError,
            "emailError":error.emailError,
            "passwordError" : error.adressError,
            "adressError":"",
            "profileImageError":error.profileImageError
        })
        if(e.target.value.length >500){
            setError({
                "nameError":error.nameError,
                "emailError":error.emailError,
                "passwordError" : error.passwordError,
                "adressError":"max length 500 characters",
                "profileImageError":error.profileImageError
            })
            document.getElementById("btnSubmit").disabled=true
            document.getElementById("txtName").disabled = true
            document.getElementById("txtEmail").disabled = true
            document.getElementById("txtPassword").disabled = true
            document.getElementById("txtImage").disabled = true
           
        } else{
            setAdress(e.target.value)
            setError({
                "nameError":error.nameError,
                "emailError":error.emailError,
                "passwordError" : error.passwordError,
                "adressError":"",
                "profileImageError":error.profileImageError
            })
            document.getElementById("btnSubmit").disabled=false
            document.getElementById("txtName").disabled = false
            document.getElementById("txtEmail").disabled = false
            document.getElementById("txtPassword").disabled = false
            document.getElementById("txtImage").disabled = false
        }
    }
    //////////

    function handleFileChange(e){
        setImage(e.target.value)
        var image = document.getElementById("txtImage");
        var file = image.files[0];
        var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        setError({
            "nameError":error.nameError,
            "emailError":error.emailError,
            "passwordError" : error.adressError,
            "adressError":error.adressError,
            "profileImageError":""
        })

        if(file.size > 2 * 1024 * 1024){
        setError({
            "nameError":error.nameError,
            "emailError":error.emailError,
            "passwordError" : error.adressError,
            "adressError":error.adressError,
            "profileImageError":"allow file below 2mb, and expected extension (jpg, jpeg, png)"
        })
            document.getElementById("btnSubmit").disabled=true
            document.getElementById("txtName").disabled = true
            document.getElementById("txtEmail").disabled = true
            document.getElementById("txtPassword").disabled = true
            document.getElementById("txtAdress").disabled = true
       
        } else if(!allowedExtensions.exec(file.name)){
            setError({
                "nameError":error.nameError,
                "emailError":error.emailError,
                "passwordError" : error.adressError,
                "adressError":error.adressError,
                "profileImageError":"allow file below 2mb, and expected extension (jpg, jpeg, png)"
            })
            document.getElementById("btnSubmit").disabled=true
            document.getElementById("txtName").disabled = true
            document.getElementById("txtEmail").disabled = true
            document.getElementById("txtPassword").disabled = true
            document.getElementById("txtAdress").disabled = true
           
        } else {
            setImage(e.target.value)
            setError({
                "nameError":error.nameError,
                "emailError":error.emailError,
                "passwordError" : error.adressError,
                "adressError":error.adressError,
                "profileImageError":""
            })
            document.getElementById("btnSubmit").disabled=false
            document.getElementById("txtName").disabled = false
            document.getElementById("txtEmail").disabled = false
            document.getElementById("txtPassword").disabled = false
            document.getElementById("txtAdress").disabled =false
        }
    }




    return(
        <div className="form-container">
            <div>
                <h2 className="text-center">Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <dl>
                        <dt>Name :</dt>
                        <dd>
                            <input type="text" id="txtName" name="name" className="form-control" onChange={handleNameChange}/>
                        </dd>
                        <dd className="text-danger">{error.nameError}</dd>

                        <dt>Email :</dt>
                        <dd>
                            <input type="text" id="txtEmail" name="email" className="form-control" onChange={handleEmailChange}/>
                        </dd>
                        <dd className="text-danger">{error.emailError}</dd>

                        <dt>Password :</dt>
                        <dd>
                            <input type="password" id="txtPassword" name="password" className="form-control" onChange={handlePasswordChange}/>
                        </dd>
                        <dd className="text-danger">{error.passwordError}</dd>

                        <dt>City :</dt>
                        <dd>
                            <select id="lstCity" className="form-select" name="city" onChange={handleCityChange}>
                                <option>Select City</option>
                                <option>Pune</option>
                                <option>Mumbai</option>
                                <option>Surat</option>
                            </select>
                        </dd>

                        <dt>State:</dt>
                        <dd>
                            <select id="lstState" className="form-select" name="state" onChange={handleStateChange}>
                                <option>Select State</option>
                                <option>Gujrat</option>
                                <option>Maharashtra</option>
                                <option>Utterpradesh</option>
                            </select>
                        </dd>

                        <dt>Date & Time:</dt>
                        <dd className="d-flex">
                            <input id="txtDate" type="date" className="form-control m-1" name="date" onChange={handleDateChange}/>
                            <input id="txtTime" type="time"  className="form-control m-1" name="time" onChange={handleTimeChange}/>
                        </dd>

                        <dt>Age : {age}</dt>
                        <dd>
                            <input id="txtAge" type="range" className="form-range" name="age" onChange={handleAgeChange}/>
                        </dd>

                        <dt>Adress :</dt>
                        <dd>
                            <textarea id="txtAdress" className="form-control" name="adress" onChange={handleAdressChange}></textarea>
                        </dd>
                        <dd className="text-danger">{error.adressError}</dd>

                        <dt>Profile Image :</dt>
                        <dd>
                            <input id="txtImage" type="file" accept=".jpg, .jpeg, .png" className="form-control" name="image" onChange={handleFileChange}/>
                        </dd>
                        <dd className="text-danger">{error.profileImageError}</dd>

                        <dt>Favourite Color :</dt>
                        <dd>
                            <input id="txtColor" type="color" className="form-control" name="color" onChange={handleColorChange}/>
                        </dd>

                        <dt>Status :</dt>
                        <dd className="form-switch">
                            <input id="checkStatus" className="form-check-input" type="checkbox" name="status" onChange={handleStatusChange}/> <span id="status"></span>
                        </dd>
                    </dl>
                    <button className="btn btn-primary w-50" id="btnSubmit">Submit</button>
                </form>
            </div>
        </div>
    )
}