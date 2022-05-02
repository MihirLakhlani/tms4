import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Employees',
    path: '/employee',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Project',
    path: '/project',
    icon: <AiIcons.AiFillProject />,
    cName: 'nav-text'
  },
  {
    title: 'Task',
    path: '/task',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
 
];
