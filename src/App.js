import React from "react";
import './App.css';
import { Button, Container,Row,Col } from 'reactstrap';
import { ToastContainer , toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import { Helmet } from "react-helmet";
import Allcourses from "./components/Allcourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Menus from "./components/Menus";
import { BrowserRouter as Router,Route, BrowserRouter,Routes} from "react-router-dom";

function App() {
  

  const btnHandle = () =>{
  toast.success("Done",{position:"top-center"});
  };

  
  return (
  

    <div>
    
      <Router>
      
      
      <Helmet>
      <style>{'body { background-color: lightblue; }'}</style>
      </Helmet>
      
      <ToastContainer/>
      <Container>
       
       <Header/>
        <Row>
        <Col md={4}>
        <Menus/>
        </Col>
        <Col md={8}>
        <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/add-course" Component={AddCourse} exact />
        <Route path="/view-course" Component={Allcourses} exact />
        </Routes>
        </Col>
        </Row>

      </Container>
      </Router>

    </div>
  
  
 );
}



export default App;