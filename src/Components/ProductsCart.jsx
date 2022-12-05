import React from 'react';
import { Link } from 'react-router-dom';
import './Css/main.css'

const ProductsCart = ({product,handleButton}) => {
 
    const { id,logo, name, total}=product;
    return (
      
       
          
          <div className=" m-4 flex flex-col transition duration-300 bg-black text-white rounded shadow-sm hover:shadow ">


            <div className="relative w-full h-4/5 p-4 ">
              <img
                src={logo}
                className="object-cover w-full h-full rounded-t"
                alt="Plan"
              />
            </div>


            <div className=" cart-container flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <div className='flex items-center justify-between'>
                <div className="text-lg font-semibold"><h1>{name}</h1></div>

                <p className="text-sm">
                Total Quiz  {total}
                </p>
               
                <Link
               to={`/statistic/${id}`}

                className=" bg-indigo-500 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Start Practice
              </Link>

              </div>
           
            </div>
          </div>
       
      
    );
};

export default ProductsCart;