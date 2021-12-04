import React,{Component} from 'react';
import Order from './Order';
import { FaCartArrowDown } from 'react-icons/fa';
import './Bookscss.css';


class Biographies extends Component {
    state = {  }
    render() { 
        const bookarray=[
            {
                id:1,
                name:'Wings Of Fire',
                price: 'Rs'+399,
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQOVn4Qx2Ck5zPUxo1D-4xuQqclblEz_JTIg&usqp=CAU'
            },
            {
                id:2,
                name:'Gandhi',
                price: 'Rs'+249,
                src:'https://tse3.mm.bing.net/th?id=OIP.x4Yvagy0DukHsPdaOrbXZgAAAA&pid=Api&P=0&w=300&h=300'
            },
            {
                id:3,
                name:'Einstein',
                price: 'Rs'+300,
                src:'https://tse2.mm.bing.net/th?id=OIP.t30QP-ZHyTdQ38bL7cpD8wHaLw&pid=Api&P=0&w=300&h=300'

            },
            {
                id:4,
                name:'Bhagat Singh',
                price: 'Rs'+270,
                src:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1592242748l/53239199._SY475_.jpg'
            },
            {
                id:5,
                name:'Bill Gates ',
                price: 'Rs'+200,
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1XiU4ppOoM78UKuxVmeWpVAZ1tB3gFpN0Jw&usqp=CAU'

            },
            {
                id:6,
                name:'Bob Daylan',
                price: 'Rs'+199,
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0NZ9PzqKJioGY1QqVxrMOWHuJXQRzeY9gQ&usqp=CAU'

            },
            {
                id:7,
                name:'Subhas Chandra Bose',
                price: 'Rs'+199,
                src:'https://tse1.mm.bing.net/th?id=OIP.cKw_D4k63dEJzb_NyVJjfgHaLQ&pid=Api&P=0&w=300&h=300'

            },
            {
                id:8,
                name:'Sachin Tendulkar',
                price: 'Rs'+199,
                src:'https://tse1.mm.bing.net/th?id=OIP.Sq7nAa25c88Tk42ZExy2AgAAAA&pid=Api&P=0&w=300&h=300'

            }
        ]
        const books = bookarray.map((bookcard,i)=>{
            return <Books src={bookarray[i].src} id={bookarray[i].id} name={bookarray[i].name} price={bookarray[i].price}/>
        }
        )
        return ( 
            <>
             <Order/>
            {books}
            
            </>
         );
    }
}
 
export default Biographies;
class Books extends Component {
    state = {  }
    render() { 
        return (
            <>
           
             <div id="div2">
              <div id="div1">
                  <a href="/Orderbookpage">
                <div ><img src={this.props.src} className="booksimage"/></div>
                </a>
                <a href="/Orderbookpage">
                <h4 className="text text-dark">{this.props.name}</h4>
                </a>
                <div className="row">
                <div className="col-10"><h6>{this.props.price}</h6></div>
                <div className="col-2"><FaCartArrowDown className="text-black bg-success cart"/></div>
                </div>
                
            </div>  
            
            </div>
            </>
          );
    }
}