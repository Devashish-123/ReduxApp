import { useEffect, useState } from "react"
import "./style.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Form } from "./form"
import { Table } from "./table"
import { Edit } from "./edit"


export function Index(){
    return(
        <div>
            <BrowserRouter>
            <header>
                <h2>TRooTech Business Solutions Private Limited</h2>
            </header>
            <Routes>
                <Route path="/" element={<Form/>}></Route>
                <Route path="/form" element={<Form/>}></Route>
                <Route path="/table" element={<Table/>}></Route>
                <Route path="/edit/:id" element={<Edit/>}></Route>
                <Route path="*" element={<code><h2>Requested path is not Available</h2></code>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}