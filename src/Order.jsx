import React from 'react';
import './App.css';
import { Component } from 'react';
import {Link} from 'react-router-dom'
class Order extends Component {
    
   
    MouseOver=(event)=>{
        event.target.style.border = '2px solid black';

    }
    MouseDown=(event)=>{
        event.target.style.border = 'none';
    }
    render() { 
        
        return ( 
            <>
            
                < div className="outer container-fluid">
                    < div className="orderdiv"><Link to="/Order"><img onMouseOut={this.MouseDown} onMouseOver={this.MouseOver} className="ordericon" src="https://tse1.mm.bing.net/th?id=OIP.Ciw6VEU1j3x4vuYQl0W2XQHaHa&pid=Api&P=0&w=300&h=300" alt=""/></Link><br/><p className="porder">Study aids<br/> & Exams Prep</p></ div >
                    < div className="orderdiv"><Link to="/Order/Romance"><img onMouseOut={this.MouseDown} onMouseOver={this.MouseOver} className="ordericon" src="https://tse4.mm.bing.net/th?id=OIP.q5NiNLUwIJsQ8sR72YiF2QHaHa&pid=Api&P=0&w=300&h=300" alt=""/></Link><br/><p className="porder">Romance</p></ div >
                    < div className="orderdiv"><Link to="/Order/Biographies"><img onMouseOut={this.MouseDown} onMouseOver={this.MouseOver} className="ordericon" src="https://tse4.mm.bing.net/th?id=OIP.errgcRC8obufEqkyl8T_GQHaHa&pid=Api&P=0&w=300&h=300" alt=""/></Link><br/><p className="porder">Biographies & <br/>Memories</p></ div >
                    < div className="orderdiv"><Link to="/Order/Children"><img onMouseOut={this.MouseDown} onMouseOver={this.MouseOver} className="ordericon" src="https://www.clipartmax.com/png/small/364-3640405_clip-art-kids-icon-happy-child-icon.png" alt=""/></Link><br/><p className="porder">Children & <br/>Young adult</p></ div >
                    < div className="orderdiv"><Link to="/Order/Sci-fi"><img onMouseOut={this.MouseDown} onMouseOver={this.MouseOver} className="ordericon" src="https://tse2.mm.bing.net/th?id=OIP.NN8HVvxnZQZ3nAU2bub4WAHaHa&pid=Api&P=0&w=300&h=300" alt=""/></Link><br/><p className="porder">Sci-Fi &<br/>Fantasy</p></ div >
                    < div className="orderdiv"><Link to="/Order/Indian-Writing"><img  onMouseOut={this.MouseDown} onMouseOver={this.MouseOver}className="ordericon" src="https://tse3.mm.bing.net/th?id=OIP._XE_0nwHCeKVjxeMLYFhYgHaHa&pid=Api&P=0&w=300&h=300" alt=""/></Link><br/><p className="porder">Indian Writing</p></ div >
                    < div className="orderdiv"><Link to="/Order/Business"><img onMouseOut={this.MouseDown} onMouseOver={this.MouseOver} className="ordericon" src="https://tse1.mm.bing.net/th?id=OIP.LZ5yG0d4Y1LIupi8lPKh8gHaHa&pid=Api&P=0&w=300&h=300" alt=""/></Link><br/><p className="porder">Business &<br/>Economics </p></ div >
                    < div className="orderdiv"><Link to="/Order/Crime"><img onMouseOut={this.MouseDown} onMouseOver={this.MouseOver} className="ordericon" src="https://tse4.mm.bing.net/th?id=OIP.tOVjECcXjH7rn-r9pSPBHAHaHa&pid=Api&P=0&w=300&h=300" alt=""/></Link><br/><p className="porder">Crime &<br/> Thriller </p></ div >
                    < div className="orderdiv"><Link to="/Order/TextBooks"><img onMouseOut={this.MouseDown} onMouseOver={this.MouseOver} className="ordericon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZCrCrOOvU0dJQYjX7xs1bF_ClTlUip1jbw&usqp=CAU" alt=""/></Link><br/><p className="porder">Textbooks</p></ div >
                </ div ><hr></hr>
            
            
            </>
         )
    }
}
 
export default Order;