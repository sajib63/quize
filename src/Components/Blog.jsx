import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='mt-10 mb-10 shadow-xl m-11'>
                <p className='text-2xl font-medium mb-5   text-red-700'>what is the purpose of react router ?</p>

                <p className='p-5'><span className='text-2xl font-medium text-red-700'>Ans:</span>  <span className='text-2xl font-medium'>
                    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                </span></p>
            </div>


            <div className='mt-10 mb-10 shadow-xl m-11'>
                <p className='text-2xl font-medium mb-5   text-red-700'>How does context api works ?</p>

                <p className='p-5'><span className='text-2xl font-medium text-red-700'>Ans:</span> <span className='text-2xl font-medium'>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                </span></p>
            </div>


            <div className='mt-10 mb-10 shadow-xl m-11'>
                <p className='text-2xl font-medium mb-5  m-11 text-red-700'>What is useref hook ?</p>

                <p className=' p-5'><span className='text-2xl font-medium text-red-700'>Ans:</span>  <span className='text-2xl font-medium'>
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.
                </span></p>
            </div>
        </div>
    );
};

export default Blog;