/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';
import './nav.scss';
// import {
//   Button, Drawer, DrawerOverlay, useDisclosure, DrawerContent, DrawerBody,
// } from '@chakra-ui/react';

const Nav = () => {
  // const isDesktop = useMediaQuery({ minWidth: 420 });
  // const { isOpen, onOpen, onClose } = useDisclosure();

  // if (isDesktop) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">⌂</NavLink></li>
        <li><NavLink to="/work">Work</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
  // } else {
  //   return (
  //     <nav>
  //       <Button onClick={onOpen}>
  //         ✧
  //       </Button>
  //       <Drawer
  //         isOpen={isOpen}
  //         onClose={onClose}
  //         placement="right"
  //       >
  //         <DrawerOverlay />
  //         <DrawerContent>
  //           {/* <DrawerCloseButton /> */}
  //           <DrawerBody>
  //             <nav className="mobile">
  //               <li><NavLink to="/">⌂</NavLink></li>
  //               <li><NavLink to="/work">Work</NavLink></li>
  //               <li><NavLink to="/about">About</NavLink></li>
  //             </nav>
  //           </DrawerBody>
  //         </DrawerContent>
  //       </Drawer>
  //     </nav>
  //   );
  // }
};

export default Nav;
