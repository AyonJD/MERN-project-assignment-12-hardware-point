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
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrder from './Components/Dashboard/MyOrder';
import AddReview from './Components/Dashboard/AddReview';
import MyProfile from './Components/Dashboard/MyProfile';
import Welcome from './Components/Dashboard/Welcome';
import AllUser from './Components/Dashboard/Admin/AllUser';
import ManageOrder from './Components/Dashboard/Admin/ManageOrder';
import UpdateTool from './Components/Dashboard/Admin/UpdateTool';
import ManageTools from './Components/Dashboard/Admin/ManageTools';
import AddTools from './Components/Dashboard/Admin/AddTools';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';
import UpdateProfile from './Components/Dashboard/UpdateProfile';
import Payment from './Components/Dashboard/Payment';
import Blog from './Components/Blog/Blog';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import RequireAdmin from './Components/RequiredAuth/RequireAdmin';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/tools' element={<AllTools></AllTools>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/contact-us' element={<Contact></Contact>}></Route>
        <Route path="dashboard" element={<RequiredAuth>
          <Dashboard />
        </RequiredAuth>} >
          <Route index element={<Welcome></Welcome>}></Route>
          <Route path='/dashboard/myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path="add-review" element={<AddReview></AddReview>}></Route>
          <Route path="manageTools" element={
            <RequireAdmin>
              <ManageTools></ManageTools>
            </RequireAdmin>
          }></Route>
          <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="my-profile/edit-profile" element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path="user" element={
            <RequireAdmin>
              <AllUser></AllUser>
            </RequireAdmin>
          }></Route>
          <Route path="manageOrder" element={
            <RequireAdmin>
              <ManageOrder></ManageOrder>
            </RequireAdmin>
          }></Route>
          <Route path="add" element={
            <RequireAdmin>
              <AddTools></AddTools>
            </RequireAdmin>
          }></Route>
          <Route path="tools/:id" element={
            <RequireAdmin>
              <UpdateTool></UpdateTool>
            </RequireAdmin>
          }></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
        </Route>
        <Route path='/tools/:id' element={
          <RequiredAuth>
            <Purchase></Purchase>
          </RequiredAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
