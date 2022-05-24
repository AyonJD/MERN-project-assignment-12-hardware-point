import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Purchase from './Components/Purchase/Purchase';
import AllTools from './Components/AllTools/AllTools';
// import Dashboard from './Components/Dashboard/Dashboard';
// import MyOrder from './Components/Dashboard/MyOrder';
// import AddReview from './Components/Dashboard/AddReview';
// import MyProfile from './Components/Dashboard/MyProfile';
// import Welcome from './Components/Dashboard/Welcome';
// import AllUser from './Components/Dashboard/Admin/AllUser';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/tools' element={<AllTools></AllTools>}></Route>
        {/* <Route path="dashboard" element={<Dashboard />} > */}
        {/* <Route index element={<Welcome></Welcome>}></Route> */}
        {/* <Route path='/dashboard/myorder' element={<MyOrder></MyOrder>}></Route> */}
        {/* <Route path="add-review" element={<AddReview></AddReview>}></Route> */}
        {/* <Route path="my-profile" element={<MyProfile></MyProfile>}></Route> */}
        {/* <Route path="user" element={<AllUser></AllUser>}></Route> */}
        {/* <Route path="user" element={<AllUser></AllUser>}></Route> */}
        {/* </Route> */}
        <Route path='/tools/:id' element={<Purchase></Purchase>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
