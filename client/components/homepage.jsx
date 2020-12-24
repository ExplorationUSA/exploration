import React from 'react';
import {NavLink} from 'react-router-dom';
import {
  Text,
} from '@chakra-ui/react';

const homepage = () => {
  return (
    <div>
    <NavLink to="/signup"><Text fontSize="12px" textDecoration="underline">Sign up</Text></NavLink>
    <NavLink to="/login"><Text fontSize="12px" textDecoration="underline">Log in</Text></NavLink>
    </div>
    
  )
}

export default homepage;