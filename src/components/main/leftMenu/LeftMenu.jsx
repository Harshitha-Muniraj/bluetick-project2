// import React, { useState } from "react";
// import "./LeftMenu.css";
// import { Link, NavLink, useLocation } from "react-router-dom";
// const LeftMenu = () => {
//   const [display1, setDisplay1] = useState(false);
//   const [display2, setDisplay2] = useState(false);
//   const [activeItem, setActiveItem] = useState("");
//   const location = useLocation();

//   return (
//     <div className="left-menu">
//       <div className="lm-top">Menu</div>

//       <div className="lm-btm">
//       <NavLink
//           to='/'
//           isActive={(match, location) => match || location.pathname === '/'}
//           className='lm-btn'
//           activeClassName='active'
//         >
//           Patch Database <ion-icon name="chevron-forward" id='icon'></ion-icon>
//         </NavLink>
//         <NavLink
//           to='/central'
//           isActive={(match, location) => match || location.pathname === '/central'}
//           className='lm-btn'
//           activeClassName='active'
//         >
//           Central Manager <ion-icon name="chevron-forward" id='icon'></ion-icon>
//         </NavLink>
//         <NavLink
//           to='/patch'
//           isActive={(match, location) => match || location.pathname === '/patch'}
//           className='lm-btn'
//           activeClassName='active'
//         >
//          Android Platform Integrity <ion-icon name="chevron-forward" id='icon'></ion-icon>
//         </NavLink>
 
//          <div
//           className={`lm-btn ${
//             activeItem === "Patch Security Analysis" ||
            
//               (location.pathname === "/screen4" ||
//                 location.pathname === "/screen5")
//               ? "active-bg "
//               : ""
//           }`}
//           onClick={() => {
//             setDisplay1(!display1);
//             setActiveItem("Patch Security Analysis");
//           }}
//         >
//           Patch Security Analysis{" "}
//           <ion-icon name="chevron-forward" id="icon"></ion-icon>
//         </div>
//         {/* Subsection */}
//         {display1 && (
//           <div className="subsection">
//             <p>
//               <NavLink
//                 to="/screen4"
//                 isActive={(match, location) =>
//                   match || location.pathname === "/screen4"
//                 }
//                 className={`lm-btn 
//           }`}
//                 activeClassName="active"
//               >
//                 - Static Analysis
//               </NavLink>
//             </p>
//             <p>
//               <NavLink
//                 to="/screen5"
//                 isActive={(match, location) =>
//                   match || location.pathname === "/screen5"
//                 }
//                 className={`lm-btn 
//           }`}
//                 activeClassName="active"
//               >
//                 - Dynamic Analysis
//               </NavLink>
//             </p>
//           </div>)}
//         <div
//     //     style={{display:' block',
//     // textAlign: 'left'}}
//     className={`lm-btn ${
//             activeItem === "integrated" ||
            
//               (location.pathname === "/screen6" ||
//                 location.pathname === "/screen7")
//               ? "active-bg "
//               : ""
//           }`}
//           onClick={() => {
//             setDisplay2(!display2);
//             setActiveItem("integrated");
//           }}
          
//         >
//           Integrated Impact Analysis
//           <ion-icon name="chevron-forward" id="icon"></ion-icon>
//           </div>
//           {display2 && (
//           <div className="subsection">
//             <p>
//               <NavLink to="/screen6"  isActive={(match, location) => match || location.pathname === '/screen6'}
//           className='lm-btn'
//           activeClassName='active'>- Impact Static Analysis</NavLink>
//             </p>
//             <p>
//               <NavLink to="/screen7"  isActive={(match, location) => match || location.pathname === '/screen7'}
//           className='lm-btn'
//           activeClassName='active'>-Impact Dynamic Analysis</NavLink>
//             </p>
//           </div>
//         )}
        

//         <NavLink
//           to='/summary'
//           isActive={(match, location) => match || location.pathname === '/summary'}
//           className='lm-btn'
//           activeClassName='active'
//         >
//           Summary <ion-icon name="chevron-forward" id='icon'></ion-icon>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default LeftMenu;



import React, { useState } from "react";
import "./LeftMenu.css";
import { NavLink, useLocation } from "react-router-dom";

const LeftMenu = () => {
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();


  const isScreen4Or5Active = location.pathname === "/screen4" || location.pathname === "/screen5";
  const isScreen6Or7Active = location.pathname === "/screen6" || location.pathname === "/screen7";

  React.useEffect(() => {
    setDisplay1(isScreen4Or5Active);
    setDisplay2(isScreen6Or7Active);
  }, [isScreen4Or5Active,isScreen6Or7Active]);

  return (
    <div className="left-menu">
      <div className="lm-top">Menu</div>
      <div className="lm-btm">
        <NavLink
          to="/"
          isActive={(match, location) => match || location.pathname === "/"}
          className="lm-btn"
          activeClassName="active"
        >
          Patch Database{" "}
          <ion-icon name="chevron-forward" id="icon"></ion-icon>
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
          className={`lm-btn ${
            activeItem === "Patch Security Analysis" || display1
              ? "active-bg"
              : ""
          }`}
          onClick={() => {
            setDisplay1(!display1);
            setActiveItem("Patch Security Analysis");
          }}
        >
          Patch Security Analysis{" "}
          <ion-icon name="chevron-forward" id="icon"></ion-icon>
        </div>
        {display1 && (
          <div className="subsection" >
            <p >
              <NavLink
                to="/screen4"
                className={`lm-btn ${display1 ? 'col-drop' :null}`}
                activeClassName="active"
              >
                - Static Analysis
              </NavLink>
            </p>
            <p>
              <NavLink
                to="/screen5"
                className={`lm-btn ${display1 ? 'col-drop' :null}`}
                activeClassName="active"
              >
                - Dynamic Analysis
              </NavLink>
            </p>
          </div>
        )}
        <div
          className={`lm-btn ${
            activeItem === "impact" || display2
              ? "active-bg"
              : ""
          }`}
          onClick={() => {
            setDisplay2(!display2);
            setActiveItem("impact");
          }}
        >
          Integrated Impact Analysis{" "}
          <ion-icon name="chevron-forward" id="icon"></ion-icon>
        </div>
        {display2 && (
          <div className="subsection">
            <p>
              <NavLink
                to="/screen6"
                className={`lm-btn ${display2 ? 'col-drop' :null}`}
                activeClassName="active"
              >
                - Impact Static Analysis
              </NavLink>
            </p>
            <p>
              <NavLink
                to="/screen7"
                className={`lm-btn ${display2 ? 'col-drop' :null}`}
                activeClassName="active"
              >
                - Impact Dynamic Analysis
              </NavLink>
            </p>
          </div>
        )}
        <NavLink
          to="/summary"
          isActive={(match, location) => match || location.pathname === "/summary"}
          className="lm-btn"
          activeClassName="active"
        >
          Summary <ion-icon name="chevron-forward" id="icon"></ion-icon>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftMenu;

