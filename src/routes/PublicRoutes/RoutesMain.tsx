import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../../pages/LoginPage/LoginPage"
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/sign-in' element={<LoginPage />} />
      <Route path='/sign-up' element={<RegisterPage />} />
    </Routes>
  )
}