import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home/Home";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import Users from "./components/Users/Users";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";

import Login from "./components/Login/Login";
import AuthProvider from "./Constext/AuthProvider";
import PrivateRoute from "./Constext/PrivateRoute";
import Notfound from "./components/NOTFOUND/Notfound";
import Tourplace from "./components/TourPlace/Tourplace";
import Contactus from "./components/ContactUs/Contactus";
import Addreview from "./components/Addreview/Addreview";
import Review from "./components/Review/Review";
import Reviewer from "./components/Reviewer/Reviewer";
import Reviews from "./Reviews/Reviews";






function App() {

  return (

    <AuthProvider>
      <Router>

        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>

          </Route>
          <PrivateRoute exact path="/users">
            <Users></Users>
          </PrivateRoute>
          <PrivateRoute exact path="/addreview">
            <Addreview></Addreview>
          </PrivateRoute>
          <PrivateRoute exact path="/users/add">
            <AddUser></AddUser>
          </PrivateRoute>



          <Route path="/users/update/:id">
            <UpdateUser></UpdateUser>
          </Route>
          <Route path="/FAQ">
            <FAQ></FAQ>


          </Route>

          <Route exact path="/review">


            <Reviews></Reviews>



          </Route>

          {/* <PrivateRoute exact path="/login">
            <Login></Login>
          </PrivateRoute> */}

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/tourplace">
            <Tourplace>
            </Tourplace>
          </Route>


          <Route path="/contactus">
            <Contactus></Contactus>
          </Route>

          <Route path="*">
            <Notfound></Notfound>
          </Route>

        </Switch>

        <Footer></Footer>


      </Router>
    </AuthProvider>

  );
}

export default App;
