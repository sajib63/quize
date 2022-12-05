import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import ErrorPage from './Components/ErrorPage'
import Topics from './Components/Topics';

import Blog from './Components/Blog';
import { ProductLoader } from './Components/ProductsLoader';
import Quiz from './Components/Quiz';
import Statics from './Components/Statics';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      errorElement:<ErrorPage></ErrorPage>,
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topics/>
        },
      
        
        {
          path:'Statics',
          loader:async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statics></Statics>
        },

        {
          path:'/statistic/:statisticId',
          loader:async({params})=>{
            return fetch (`https://openapi.programming-hero.com/api/quiz/${params.statisticId}`);
         
          },
          element:<Quiz></Quiz>
        },


        {
          path:'/blog',
          element:<Blog/>
        },
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
