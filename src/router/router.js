import React from 'react';
import Index from '@/views/Index';
import Test from '@/views/Test';

const About = () => <h2>页面一</h2>;
const Users = () => <h2>页面二</h2>;

const Routers = [
  {
    path:'/',
    component:Index
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/users',
    component:Users
  }
];

export default Routers;
