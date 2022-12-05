
import { useLoaderData } from 'react-router-dom';
import QuizDetails from './QuizDetails';

const Quiz = () => {
    const products=useLoaderData();
   

    return (
        <div className='m-15'>
            <h1 className='text-4xl font-medium text-red-700'>{products.data.name}</h1>

            {
                products.data.questions.map(product=> <QuizDetails
                product={product}
                key={product.id}
                ></QuizDetails>)
            }
        </div>
    );
};

export default Quiz;