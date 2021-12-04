import React,{Component} from 'react';
import Order from './Order';
import { FaCartArrowDown } from 'react-icons/fa';
class IndianWriting extends Component {
    state = {  }
    render() { 
        const bookarray=[
            {
                id:1,
                name:'xoxo',
                price: 'Rs'+130

            },
            {
                id:1,
                name:'After',
                price: 'Rs'+560

            },
            {
                id:1,
                name:'Romeo & Juliet',
                price: 'Rs'+670

            },
            {
                id:1,
                name:'effb',
                price: 'Rs'+670

            },
            {
                id:1,
                name:'Romeo & Juliet',
                price: 'Rs'+670

            },
            {
                id:1,
                name:'Romeo & Juliet',
                price: 'Rs'+670

            }
        ]
        const books = bookarray.map((bookcard,i)=>{
            return <Books id={bookarray[i].id} name={bookarray[i].name} price={bookarray[i].price}/>
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
 
export default IndianWriting;
class Books extends Component {
    state = {  }
    render() { 
        return (
            <>
           
             <div id="div2">
              <div id="div1">
                <img src={`https://joeschmoe.io/api/v1/${this.props.name}`} alt="Avatar"/>
                <h3 >{this.props.name}</h3>
                <div className="row">
                <div className="col-8"><h6>{this.props.price}</h6></div>
                <div className="col"><FaCartArrowDown className="text-black bg-success cart"/></div>
                </div>
                
            </div>  
            </div>
            </>
          );
    }
}