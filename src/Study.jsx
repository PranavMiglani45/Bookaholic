import React,{Component} from 'react';
import Order from './Order';
import { FaCartArrowDown } from 'react-icons/fa';
import './Bookscss.css';


class Study extends Component {
    state = {  }
    render() { 
        const bookarray=[
            {
                id:1,
                name:'CBSE Question Bank ',
                price: 'Rs'+399,
                image:'https://m.media-amazon.com/images/I/51Xw5MJX4mS._AC_UY436_FMwebp_QL65_.jpg'
            },
            {
                id:2,
                name:'Fundamentals of Biology',
                price: 'Rs'+249,
                image:'https://m.media-amazon.com/images/I/81sLiN0HNrL._AC_UY436_FMwebp_QL65_.jpg'
            },
            {
                id:3,
                name:'PERFECTION BOOK'
                ,
                price: 'Rs'+300,
                image:'https://images-eu.ssl-images-amazon.com/images/I/51-ZroJU7JS._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'

            },
            {
                id:4,
                name:'Complete Classnotes Advance Maths',
                price: 'Rs'+270,
                image:'https://m.media-amazon.com/images/I/61mtBt+RDdS._AC_UY436_FMwebp_QL65_.jpg'
            },
            {
                id:5,
                name:'Black book of english vocab ',
                price: 'Rs'+200,
                image:'https://m.media-amazon.com/images/I/81uXT4C8T+L._AC_UY436_FMwebp_QL65_.jpg'

            },
            {
                id:6,
                name:'Atlas of Distal Radius Fractures',
                price: 'Rs'+199,
                image:'https://images-na.ssl-images-amazon.com/images/I/51Tl3SKOvxL._SX377_BO1,204,203,200_.jpg'

            },
            {
                id:7,
                name:'Clinical Methods in Cardiology',
                price: 'Rs'+199,
                image:'https://images-eu.ssl-images-amazon.com/images/I/51arHqrG7uL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg'

            },
            {
                id:8,
                name:'Fundamentals of Essay and Answer Writing',
                price: 'Rs'+199,
                image:'https://images-na.ssl-images-amazon.com/images/I/41SElE9A5+L._SX329_BO1,204,203,200_.jpg'

            }
        ]
        const books = bookarray.map((bookcard,i)=>{
            return <Books image={bookarray[i].image} id={bookarray[i].id} name={bookarray[i].name} price={bookarray[i].price}/>
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
 
export default Study;
class Books extends Component {
    state = {  }
    render() { 
        return (
            <>
           
             <div id="div2">
              <div id="div1">
                  <a href="/Orderbookpage">
                <div ><img image={this.props.image} className="booksimage"/></div>
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