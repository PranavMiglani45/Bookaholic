import React from 'react';
import './Bookseller.scss';
import $ from 'jquery';
import { Component } from 'react';
class Booksellers extends Component{ 
 
    jQuery=()=>{
        function moveToSelected(element) {

            if (element === "next") {
              var selected = $(".selected").next();
            } else if (element === "prev") {
               selected = $(".selected").prev();
            } else {
               selected = element;
            }
          
            var next = $(selected).next();
            var prev = $(selected).prev();
            var prevSecond = $(prev).prev();
            var nextSecond = $(next).next();
          
            $(selected).removeClass().addClass("selected");
          
            $(prev).removeClass().addClass("prev");
            $(next).removeClass().addClass("next");
          
            $(nextSecond).removeClass().addClass("nextRightSecond");
            $(prevSecond).removeClass().addClass("prevLeftSecond");
          
            $(nextSecond).nextAll().removeClass().addClass('hideRight');
            $(prevSecond).prevAll().removeClass().addClass('hideLeft');
          
          }
          
          // Eventos teclado
          $(document).keydown(function(e) {
              switch(e.which) {
                  case 37: // left
                  moveToSelected('prev');
                  break;
          
                  case 39: // right
                  moveToSelected('next');
                  break;
          
                  default: return;
              }
              e.preventDefault();
          });
          
          $('#carousel div').click(function() {
            moveToSelected($(this));
          });
          
          $('#prev').click(function() {
            moveToSelected('prev');
          });
          
          $('#next').click(function() {
            moveToSelected('next');
          });
          

    }
    componentDidMount(){
        this.jQuery();
    }
    
    render(){
    return(
    <div className="booksellers">
      <p className="bookse">Best Booksellers</p>
      <div id="mainc">
      <div id="carousel">

<div  id="c1" className="hideLeft">
 <img className="img1" alt="" src="https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
</div>

<div  id ="c1" className="prevLeftSecond">
 <img className="img2" alt="" src="https://images.unsplash.com/photo-1569738713551-2958195b458a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJvb2slMjBjb3ZlcnN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
</div>

<div  id ="c1" className="prev">
 <img className="img3" alt=""  src="https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
</div>

<div  id ="c1" className="selected">
 <img className="img4" alt=""  src="https://images.unsplash.com/photo-1598618443855-232ee0f819f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
</div>

<div  id ="c1" className="next">
 <img className="img5" alt=""  src="https://images.unsplash.com/photo-1614708403338-cdf1914fb117?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
</div>

<div  id ="c1" className="nextRightSecond">
 <img className="img6" alt=""  src="https://images.unsplash.com/photo-1539877254216-818ed7c76096?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2slMjBjb3ZlcnxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
</div>

<div  id ="c1" className="hideRight">
 <img className="img7" alt="" src="https://images.unsplash.com/photo-1518744386442-2d48ac47a7eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGJvb2slMjBjb3ZlcnxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
</div>
</div>
</div>



    </div>
    )
    }
}
 
export default Booksellers;