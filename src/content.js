import React from 'react';

// exports Content
export class Content extends React.Component{

  render(){
    const mystyle = {  // colour for background AA car sales
        color: "white",
        backgroundColor: "Grey",
        padding: "10px",
        fontFamily: "Arial"
      };
      return (
        <div>
        <h1 style={mystyle}>AA Car Sales</h1>  
        <h4>Buy Pre Owned!</h4>
       <br></br>
       <p>Buying a car is a big deal -- and saving money is a crucial aspect of any new - or used - car purchase.
        With that in mind, we're listing a few reasons why a certified pre-owned (or CPO) vehicle may be right for you.
        First, a certified pre-owned car can be better than a traditional used vehicle because regular used cars often come with a lot of unknowns --
        and that could cost you a lot of money. But buying a certified pre-owned vehicle ensures you aren't saddling yourself with any major systems issues or hidden defects.</p>
              <div style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + 'https://s1.paultan.org/image/2019/05/F90-BMW-M5-Edition-35-Years-8-2.jpg'})`, // link to poster
        
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:'100vw',
        height:'100vh' 
        }}>
            </div>
            </div>
        
      );
    }
  }