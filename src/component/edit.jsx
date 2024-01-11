import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"
import { updateUser } from "./userReducer";





export function Edit(){
    const[error, setError] = useState({"nameError":" ", "emailError":" ", "passwordError":" ","adressError":" ","profileImageError":" ",})


    const { id } = useParams();
    const navigate = useNavigate()
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const {name, email,password,city,state,date,time,age,adress,image,color,status} = existingUser[0];

    const[uname, setUname] = useState(name)
    const[uemail, setUemail] = useState(email)
    const[upassword, setUpassword] = useState(password);
    const[ucity, setUcity] = useState(city)
    const[ustate, setUstate] = useState(state)
    const[udate, setUdate] = useState(date)
    const[utime, setUtime] = useState(time)
    const[uage, setUage] = useState(age)
    const[uadress, setUadress] = useState(adress)
    const[uimage, setUimage] = useState(image);
    const[ucolor, setUcolor] = useState(color)
    const[ustatus, setUstatus] = useState(status)

    const dispatch = useDispatch();
    //////////////
    

    function handleEdit(e){
        e.preventDefault();
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
        } 
        else {
            dispatch(updateUser({
                id: id,
                name :uname,
                email : uemail,
                password : upassword,
                city:ucity,
                state : ustate,
                date : udate,
                time :utime,
                age : uage,
                adress : uadress,
                image : uimage,
                color :ucolor,
                status : ustatus
            }))
            navigate("/table")
        }
    }
    ///////
     

    // validation On onchange
    function handleNameChange(e){
        setUname(e.target.value);
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
            setUname(e.target.value)
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
    //////

    function handleEmailChange(e){
        setUemail(e.target.value)
        var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setError({
            "nameError":error.nameError,
            "emailError":"",
            "passwordError":error.passwordError,
            "adressError":error.adressError,
            "profileImageError":error.profileImageError
        })
        if(e.target.value.match(emailRegEx)){
            setUemail(e.target.value)
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
    ///////

    function handlePasswordChange(e){
        setUpassword(e.target.value);
        var passRegEx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/
        setError({
            "nameError":error.nameError,
            "emailError":error.emailError,
            "passwordError":"",
            "adressError":error.adressError,
            "profileImageError":error.profileImageError
        })
        if(e.target.value.match(passRegEx)){
            setUpassword(e.target.value)
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
    /////

    function handleCityChange(e){
        setUcity((e.target.value=="Select City")?"Not Selected":e.target.value)
    }
    ///////

    function handleStateChange(e){
        setUstate((e.target.value=="Select State")?"Not Selected":e.target.value)
    }
    //////

    function handleDateChange(e){
        setUdate((e.target.value=="")?"Not Selected":e.target.value)
    }
    //////

    function handleTimeChange(e){
        setUtime((e.target.value=="")?"Not Selected":e.target.value)
    }
    //////

    function handleAgeChange(e){
        setUage((e.target.value=="")?"Not Selected":e.target.value)
    }
    ////

    function handleAdressChange(e){
        setUadress(e.target.value)
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
            setUadress(e.target.value)
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
    ///////

    function handleImageChange(e){
        setUimage(e.target.value);
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
            setUimage(e.target.value)
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
    /////

    function handleColorChange(e){
        setUcolor((e.target.value=="")?"Not Selected":e.target.value)
    }
    //////

    function handleStatusChange(e){
        setUstatus((e.target.checked)?"Active":"Unactive")
    }

    


    return(
        <div className="form-container">
            <div>
                <h2 className="text-center">Edit details</h2>
                <form onSubmit={handleEdit}>
                    <dl>
                        <dt>Name :</dt>
                        <dd>
                            <input type="text" id="txtName" name="name" className="form-control" value={uname} onChange={handleNameChange}/>
                        </dd>
                        <dd className="text-danger">{error.nameError}</dd>

                        <dt>Email :</dt>
                        <dd>
                            <input type="text" id="txtEmail" name="email" className="form-control" value={uemail} onChange={handleEmailChange}/>
                        </dd>
                        <dd className="text-danger">{error.emailError}</dd>

                        <dt>Password :</dt>
                        <dd>
                            <input type="password" id="txtPassword" name="password" className="form-control" value={upassword} onChange={handlePasswordChange}/>
                        </dd>
                        <dd className="text-danger">{error.passwordError}</dd>

                        <dt>City :</dt>
                        <dd>
                            <select id="lstCity" className="form-select" name="city" value={ucity} onChange={handleCityChange}>
                                <option>Select City</option>
                                <option>Pune</option>
                                <option>Mumbai</option>
                                <option>Surat</option>
                            </select>
                        </dd>

                        <dt>State:</dt>
                        <dd>
                            <select id="lstState" className="form-select" name="state" value={ustate} onChange={handleStateChange}>
                                <option>Select State</option>
                                <option>Gujrat</option>
                                <option>Maharashtra</option>
                                <option>Utterpradesh</option>
                            </select>
                        </dd>

                        <dt>Date & Time:</dt>
                        <dd className="d-flex">
                            <input id="txtDate" type="date" className="form-control m-1" name="date" value={udate} onChange={handleDateChange}/>
                            <input id="txtTime" type="time"  className="form-control m-1" name="time" value={utime} onChange={handleTimeChange}/>
                        </dd>

                        <dt>Age : {uage}</dt>
                        <dd>
                            <input id="txtAge" type="range" className="form-range" name="age" value={uage} onChange={handleAgeChange}/>
                        </dd>

                        <dt>Adress :</dt>
                        <dd>
                            <textarea id="txtAdress" className="form-control" name="adress" value={uadress} onChange={handleAdressChange}></textarea>
                        </dd>
                        <dd className="text-danger">{error.adressError}</dd>

                        <dt>Profile Image :</dt>
                        <dd>
                            <input id="txtImage" type="file" accept=".jpg, .jpeg, .png" className="form-control" name="image" onChange={handleImageChange}/>
                        </dd>
                        <dd className="text-danger">{error.profileImageError}</dd>

                        <dt>Favourite Color :</dt>
                        <dd>
                            <input id="txtColor" type="color" className="form-control" name="color" value={ucolor} onChange={handleColorChange}/>
                        </dd>

                        <dt>Status :</dt>
                        <dd className="form-switch">
                            <input id="checkStatus" className="form-check-input" type="checkbox" name="status" value={ustatus} onChange={handleStatusChange}/> <span id="status"></span>
                        </dd>
                    </dl>
                    <button className="btn btn-primary w-25" id="btnSubmit">Save</button>
                    <Link className="btn btn-warning w-25 ms-2" to="/table">Cancel</Link>
                </form>
            </div>
        </div>
    )
}