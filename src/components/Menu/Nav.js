/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { NavLink } from 'react-router-dom';
// import Modal from 'react-modal';
// import star from '../../img/menu-star.svg';
import './Menu.scss';

// const MenuOverlay = (props) => {
//   return (
// <nav>
//   <ul>
//     <li><NavLink to="/" onClick={props.changeColor('#EBF4E6')}>Home</NavLink></li>
//     <li><NavLink to="/work" onClick={props.changeColor('#F9F9F9')}>Work</NavLink></li>
//     <li><NavLink to="/about">About</NavLink></li>
//   </ul>
// </nav>;
//   );
// };

const Nav = (props) => {
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/work">Work</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );

  // return (
  //   <div>
  //     <button type="button" id="menu-btn" onClick={openModal}>
  //       <div>Menu</div>
  //       <img id="menu-star" src={star} alt="star" />
  //     </button>
  //     <div id="menu-overlay">
  //       <Modal
  //         isOpen={modalIsOpen}
  //         onRequestClose={closeModal}
  //         className="Modal"
  //       >
  //         <nav>
  //           <ul>
  //             <li><NavLink to="/">Home</NavLink></li>
  //             <li><NavLink to="/work">Work</NavLink></li>
  //             <li><NavLink to="/about">About</NavLink></li>
  //           </ul>
  //         </nav>
  //       </Modal>
  //     </div>
  //   </div>
  // );
};

export default Nav;
