import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"
import ErrorPage from "../pages/ErrorPage"

export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/profile/:id" element={<ProfilePage/>}/>
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
        </BrowserRouter>
    )
}