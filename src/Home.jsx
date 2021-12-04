import React from 'react';
import * as rb from "react-bootstrap";
import './App.css';
import {BiUserCircle} from 'react-icons/bi'
import Booksellers from './Booksellers'
import { useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FaCartArrowDown,FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaWhatsapp } from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
const Home=()=>

{
  function MouseOver(event) {
    event.target.style.background = 'black';
    event.target.style.color = 'white';
  }
  function MouseOut(event){
    event.target.style.background="transparent";
    event.target.style.color = 'black';
  }
  function MouseOverf(event) {
    event.target.style.color = 'rgba(157, 143, 143, 0.87)';
  
  }
 
  
  let history=useHistory();
  
return(<>
  
  <rb.Navbar expand="sm" className="navbar fixedsticky fixedtop ">
<rb.Navbar.Brand href="#home" className="text-light bookStore">Bookaholics</rb.Navbar.Brand>
<rb.Navbar.Toggle aria-controls="basic-navbar-nav" />&nbsp;&nbsp;&nbsp;&nbsp;
<rb.Navbar.Collapse id="basic-navbar-nav">
  <rb.Nav className="mr-auto">
  <rb.Nav.Link href="#Link"  className="text-light textbook">About</rb.Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <rb.Nav.Link href="#lin" className="text-light textbook">Contactus</rb.Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <rb.Nav.Link href="#hom" className="text-light textbook"  >Order-here</rb.Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
    
  </rb.Nav>
  <rb.Form inline>
    <rb.FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <div><BsSearch className="text-light"/></div>
  </rb.Form>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <rb.Nav >
  <FaCartArrowDown className="carthome"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <rb.Nav.Link  className="text-light textbook " ><Link to="/Login" className="text text-light logsin">Login/Signin<BiUserCircle className="text-light user"/></Link></rb.Nav.Link>
  </rb.Nav>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
</rb.Navbar.Collapse>
</rb.Navbar>

<div id="home" className="background">
  <div className="transbox">
    <p>Hola folks!<br/>We're here to suggest you every type of book</p>
          <br/>
          <button type="submit" onClick={()=>history.push('./Chatbot')}  onMouseOver={MouseOver} onMouseOut={MouseOut} className="suggest">Suggest</button>
  </div>
</div>
<Booksellers/>

<div id="hom" className="order">
  <img className="orderimg" src="https://images.unsplash.com/photo-1593888965008-c8b8b2900929?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJvb2t8ZW58MHwxfDB8d2hpdGV8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt=""/>
  <p className="ordertxt">Get your favourite now
 at reasonable prices</p>
 <br/>
 
 <button type="submit" onClick={()=>history.push('./Order')} onMouseOver={MouseOver} onMouseOut={MouseOut} class="orderbtn">Order Now</button>

</div>


<div className="About ">
  
  <div id="Link" className="divabouttext">
    <h1 className="textHead">Bookaholics</h1>
    <div className="row">
      <div className="col"><p className="textabout">
    Bookaholics is an online bookstore with a mission to financially support local, independent bookstores.We also support anyone who advocates for books through our affiliate program, which pays 
a 10% commission on every sale. 
    </p></div>
      <div  className="col clrchng"><p >
      We are grounded by our company's core values, which have guided us through the ups and downs of the bookselling industry. Each and every employee's love of books drives us forward. We're nothing without our customers. Bookaholics would not be the destination it is now without its loyal customers 
    </p></div>
      <div className="col"><p className="textabout">
      Our mission is to be the world's best destination for readers, a place that fosters a culture of reading and connects people with the books they'll love. We built our name on innovative bookselling, and we continue to evolve by remaining curious and inventive.
    </p></div>
    </div>
    </div>
</div>
<div id="lin" className="footer container-fluid">
<div class="row">
    <div class="col-sm-3 text-light">
      <br/>
      <p className="p-1  footerH">Information</p>
      <a href="#" onMouseOver={MouseOverf}  className=" pl-5  footerA">Customer Servies</a><br/>
      <a href="#" onMouseOver={MouseOverf}  className=" pl-5  footerA">Privacy Policy</a><br/>
      <a href="#" onMouseOver={MouseOverf}  className=" pl-5  footerA">About Us</a> <br/>
      <a href="#" onMouseOver={MouseOverf}  className=" pl-5  footerA">FAQ</a> 
    </div>
    <div class="col-sm-3 text-light">
    <br/>
    <p className="p-1 footerH">Why buy from us</p>
      <a href="#" onMouseOver={MouseOverf}  className=" pl-5  footerA">Shopping & Delivery</a><br/>
      <a href="#" onMouseOver={MouseOverf}  className=" pl-5  footerA">Secure Payment</a><br/>
      <a href="#" onMouseOver={MouseOverf}  className=" pl-5  footerA">Guarntee </a> <br/>
      <a href="#" onMouseOver={MouseOverf}  className=" pl-5  footerA">Terms & Conditions </a> 
    </div>
    <div class="col-sm-6 text-light">
      <div className="Sugdiv">
      <p className="FooterH">Suggest us for any updation</p>
      <textarea className="Textfooter"  rows="4" cols="50"/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="submit">Submit</button>
      <br/>
      <div >
      <FaFacebookSquare className="contacticon"></FaFacebookSquare>
      <FaInstagramSquare className="contacticon"></FaInstagramSquare>
      <FaTwitterSquare className="contacticon"></FaTwitterSquare>
      <AiOutlineMail className="contacticon"></AiOutlineMail>
      <FaWhatsapp className="contacticon"></FaWhatsapp>      </div>
      </div>
    </div>   
  </div>
</div>

</>

);
}
export default Home;