import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  redirect,
  Navigate
} from "react-router-dom";
import Introduction from './components/home/introduction/Introduction';
import Technologies from './components/home/technologies/Technologies';
import Projects from './components/home/projects/Projects';
import Header from './components/header/Header';
import { NewHeader } from './components/newheader/NewHeader';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Navigate to="/home"/>
    ),
  },
  {
    path: "/home",
    element: (
      <div>
        <NewHeader/>
        <Introduction/>
      </div>
    ),
  },
  {
    path: "/technologies",
    element: (
      <div>
        <Header/>
        <Technologies/>
      </div>
    ),
  },
  {
    path: "/projects",
    element: (
      <div>
        <Header/>
        <Projects/>
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Header/>
        <Projects/>
      </div>
    ),
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
