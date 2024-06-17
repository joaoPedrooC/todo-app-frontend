import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../../pages/LoginPage/LoginPage"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}