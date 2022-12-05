import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const QuizDetails = ({ product }) => {
console.log(product);
    const { question, options, correctAnswer } = product;

    const rightAnswer = () => {
       
        toast.success(`${correctAnswer}`, {onClose:500})
  
       
    }

    const clickForAnswer = (id) => {
        if (id === correctAnswer) {
            toast.success('Correct Answer',{onClose:200});
            
         
        }
        else {
           
            toast.error('Wrong Answer',{onClose:200});
        }

    }

    return (

        <div className='m-10 shadow-xl'>
            
        <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">{question}</h3>



        <div className='flex justify-center cursor-pointer'>


        <svg onClick={rightAnswer} className=''  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        

        </div>



        <ul class="text-sm font-medium text-gray-900 bg-white rounded-lg  dark:text-white">
            <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div class="w-full">


                {
                    options.map(option => <p className='p-4 pt-6 '> <input onClick={()=>clickForAnswer(option)} 
                    id="list-radio-license" type="radio" value="" name="list-radio" class=" text-blue-600 bg-gray-100  dark:ring-offset-gray-700  dark:bg-gray-600 dark:border-gray-500"/>
                    <label for="list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"></label>{option} </p>)
                }

                    
                </div>
            </li>
        </ul>

        <ToastContainer />      
    </div>
    
    );
};

export default QuizDetails;