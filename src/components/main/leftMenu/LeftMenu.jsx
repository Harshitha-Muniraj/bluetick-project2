import React, { useState } from "react";
import "./LeftMenu.css";
import { Link, NavLink } from "react-router-dom";
const LeftMenu = () => {
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  return (
    <div className="left-menu">
      <div className="lm-top">Menu</div>
      {/* <div className="lm-btm">
        <div
          className={` ${activeItem === "Patch Database" ? "active-bg" : ""}`}
          onClick={() => setActiveItem("Patch Database")}
        >
          <NavLink to="/">
            Patch Database{" "}
            <ion-icon name="chevron-forward" id="icon"></ion-icon>
          </NavLink>{" "}
        </div>
        <div
          className={` ${activeItem === "Central Manager" ? "active-bg" : ""}`}
          onClick={() => setActiveItem("Central Manager")}
        >
          <NavLink to="/central">
            Central Manager{" "}
            <ion-icon name="chevron-forward" id="icon"></ion-icon>
          </NavLink>
        </div>
        <div
        onClick={() => setActiveItem('Android Platform Integrity')}
          className={` ${activeItem === "Android Platform Integrity" ? "active-bg" : ""}`}
        >
          <NavLink to="/patch">
            Android Platform Integrity{" "}
            <ion-icon name="chevron-forward" id="icon"></ion-icon>
          </NavLink>
        </div>
        <div
          className={` ${activeItem === "Patch Security Analysis" ? "active-bg" : ""}`}
          onClick={() => {setDisplay1(!display1);setActiveItem("Patch Security Analysis")}}
        >
          Patch Security Analysis{" "}
          <ion-icon name="chevron-forward" id="icon"></ion-icon>
        </div>
        {display1 && (
          <div className="subsection">
            <p>
              <NavLink to="/screen4">- Static Analysis</NavLink>
            </p>
            <p>
              <NavLink to="/screen5">- Dynamic Analysis</NavLink>
            </p>
          </div>
        )}
        <div
          className={` ${activeItem === "integrated" ? "active-bg" : ""}`}
          onClick={() => {setDisplay2(!display2);setActiveItem('integrated')}}
        >
          Integrated Impact Analysis
          <ion-icon name="chevron-forward" id="icon"></ion-icon>
        </div>
        {display2 && (
          <div className="subsection">
            <p>
              <NavLink to="/screen6">- Static Analysis</NavLink>
            </p>
            <p>
              <NavLink to="/screen7">- Dynamic Analysis</NavLink>
            </p>
          </div>
        )}
        

      </div> */}
      <div className="lm-btm">
      <NavLink
          to='/'
          isActive={(match, location) => match || location.pathname === '/'}
          className='lm-btn'
          activeClassName='active'
        >
          Patch Database <ion-icon name="chevron-forward" id='icon'></ion-icon>
        </NavLink>
        <NavLink
          to='/central'
          isActive={(match, location) => match || location.pathname === '/central'}
          className='lm-btn'
          activeClassName='active'
        >
          Central Manager <ion-icon name="chevron-forward" id='icon'></ion-icon>
        </NavLink>
        <NavLink
          to='/patch'
          isActive={(match, location) => match || location.pathname === '/patch'}
          className='lm-btn'
          activeClassName='active'
        >
         Android Platform Integrity <ion-icon name="chevron-forward" id='icon'></ion-icon>
        </NavLink>
        <div
        style={{display:' block',
    textAlign: 'left'}}
          className={` ${activeItem === "Patch Security Analysis" ? "active-bg " : ""} lm-btn`}
          onClick={() => {setDisplay1(!display1);setActiveItem("Patch Security Analysis")}}
        >
          Patch Security Analysis{" "}
          <ion-icon name="chevron-forward" id="icon"></ion-icon>
          </div>
          {display1 && (
          <div className="subsection">
            <p>
              <NavLink to="/screen4" isActive={(match, location) => match || location.pathname === '/screen4'}
          className='lm-btn'
          activeClassName='active'>- Static Analysis</NavLink>
            </p>
            <p>
              <NavLink to="/screen5" isActive={(match, location) => match || location.pathname === '/screen5'}
          className='lm-btn'
          activeClassName='active'>- Dynamic Analysis</NavLink>
            </p>
          </div>
        )}
        
        <div
        style={{display:' block',
    textAlign: 'left'}}
          className={` ${activeItem === "integrated" ? "active-bg" : ""} lm-btn`}
          onClick={() => {setDisplay2(!display2);setActiveItem('integrated')}}
        >
          Integrated Impact Analysis
          <ion-icon name="chevron-forward" id="icon"></ion-icon>
          </div>
          {display2 && (
          <div className="subsection">
            <p>
              <NavLink to="/screen6"  isActive={(match, location) => match || location.pathname === '/screen6'}
          className='lm-btn'
          activeClassName='active'>- Static Analysis</NavLink>
            </p>
            <p>
              <NavLink to="/screen7"  isActive={(match, location) => match || location.pathname === '/screen7'}
          className='lm-btn'
          activeClassName='active'>- Dynamic Analysis</NavLink>
            </p>
          </div>
        )}
        

        <NavLink
          to='/summary'
          isActive={(match, location) => match || location.pathname === '/summary'}
          className='lm-btn'
          activeClassName='active'
        >
          Summary <ion-icon name="chevron-forward" id='icon'></ion-icon>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftMenu;
