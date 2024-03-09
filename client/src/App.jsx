import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Profile from "./Pages/Profile"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import CreateListing from "./Pages/CreateListing"
import UpdateListing from "./Pages/UpdateListing"
import Listing from "./Pages/Listing"
import Search from "./Pages/Search"

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route  path="/search" element={<Search />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/listing/:listingId" element={<Listing/>}></Route>
        <Route element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/create-listing" element={<CreateListing/>}></Route>
        <Route path="/update-listing/:listingId" element={<UpdateListing/>}></Route>
        </Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
