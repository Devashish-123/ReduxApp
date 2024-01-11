import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


const userSlice = createSlice({
    name:"users",
    initialState : userList,
    reducers : {
        addUser : (state, action)=>{
            state.push(action.payload)
        },
        updateUser : (State, action)=>{
            const{id,name,email,password,city,state,date,time,age,adress,image,color,status} = action.payload;
            const uu = State.find(user => user.id == id);
            if(uu){
                uu.name = name;
                uu.email = email;
                uu.password = password;
                uu.city = city;
                uu.state = state;
                uu.date = date;
                uu.time = time;
                uu.age = age;
                uu.adress = adress;
                uu.image = image;
                uu.color = color;
                uu.status = status
            }
        },
        deleteUser : (state, action) => {
            const { id } = action.payload;
            const uu = state.find(user => user.id == id);
            if(uu){
                return state.filter(f => f.id !== id);
            }
        }
    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer;