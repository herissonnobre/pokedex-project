import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import PageHeader from './PageHeader';
import './styles.css';

export default function PageNav ( pageIndex ) {
  
  const [navItems, setNavItems] = useState([]);
  // const pageArr = pageArray;

  // const analysePageArr = () => {
    
  //   const navItemsTemp = [];
    
  //   navItemsTemp.push(pageArr[0]);

  //   console.log(pageArr.length);

  //   if (pageArr.length === 5) {
  //     if (pageArr[1].length > 1) {
  //       for (let i = 0; i < pageArr[1].length; i++){
  //         navItemsTemp.push(pageArr[1][i]);
  //       }
  //     } else {
  //       navItemsTemp.push(pageArr[1]);
  //     }
      
  //     navItemsTemp.push(pageArr[2]);
      
  //     if (pageArr[3].length > 1) {
  //       for (let i = 0; i < pageArr[3].length; i++){
  //         navItemsTemp.push(pageArr[3][i]);
  //       }
  //     } else {
  //       navItemsTemp.push(pageArr[3]);
  //     }
  //   } else {
  //     navItemsTemp.push(pageArr[1]);
  //     navItemsTemp.push(pageArr[2]);
  //     for (let i = 0; i < pageArr[3].length; i++){
  //       navItemsTemp.push(pageArr[3][i]);
  //     }
  //     navItemsTemp.push(pageArr[4]);
  //     navItemsTemp.push(pageArr[5]);
  //   }
    
    
  //   console.log(pageArr);
  // }

  return <div id="pageNav">
    {/* <p id={pageIndex}>{pageIndex}</p> */}
          {/* <li id="home_link"><NavLink to="/">Home</NavLink></li>
          <li id="pokedex_link"><NavLink to="/pokedex">Pokedex</NavLink></li>
          <li id="login_button"><input type="button" id="login_button" value="Login" /></li> */}
  </div>
      
}