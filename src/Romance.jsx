import React,{Component} from 'react';
import Order from './Order';
import { FaCartArrowDown } from 'react-icons/fa';
import './Bookscss.css';


class Romance extends Component {
    state = {  }
    render() { 
        const bookarray=[
            {
                id:1,
                name:'Pride And Prejudice',
                price: 'Rs'+199,
                image:'https://www.goldenglobes.com/sites/default/files/films/pride-prejudice.jpg'
            },
            {
                id:2,
                name:'The Notebook',
                price: 'Rs'+249,
                image:'https://tse1.mm.bing.net/th?id=OIP.LnsHT4SGzicZ3a3G7qMwEAHaLH&pid=Api&P=0&w=300&h=300'
            },
            {
                id:3,
                name:'Romeo & Juliet',
                price: 'Rs'+300,
                image:'https://tse1.mm.bing.net/th?id=OIP.dqcBYqEHUXGCZGnJn9b_owHaJl&pid=Api&P=0&w=300&h=300'

            },
            {
                id:4,
                name:'After',
                price: 'Rs'+270,
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zRV62jd7trOz5_DGft1a5uR-EJnKEZe7gQ&usqp=CAU'
            },
            {
                id:5,
                name:'Red White And Royal Blue ',
                price: 'Rs'+200,
                image:'https://tse2.mm.bing.net/th?id=OIP.shlB7h_a4F4JBOKXxDedIQAAAA&pid=Api&P=0&w=300&h=300'

            },
            {
                id:6,
                name:'Moonlight',
                price: 'Rs'+199,
                image:'https://tse1.mm.bing.net/th?id=OIP.BN9JmMrAOBFpYOvHLzXKVAHaLH&pid=Api&P=0&w=300&h=300'

            },
            {
                id:7,
                name:'The Girl I Last Love',
                price: 'Rs'+199,
                image:'https://tse1.mm.bing.net/th?id=OIP.7vBnabDBUgBkmx6HVAZEdAHaLL&pid=Api&P=0&w=300&h=300'

            },
            {
                id:8,
                name:'Mary Jo Putney ',
                price: 'Rs'+199,
                image:'https://tse2.mm.bing.net/th?id=OIP.6LD5krkqyFEVFPkfBx1CygAAAA&pid=Api&P=0&w=300&h=300'

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
 
export default Romance;
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