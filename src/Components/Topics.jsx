
import { useLoaderData } from 'react-router-dom';
import { Header } from './Header';
import ProductsCart from './ProductsCart';



const Topics = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div className=''>
            <Header></Header>
            
            <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-2 xl:max-w-screen-lg sm:mx-auto mb-12 ">
                {
                    products.data.map(product => <ProductsCart
                        product={product}
                        key={product.id}
                      
                    ></ProductsCart>)
                }

                

            </div>

           

        </div>



    );
};

export default Topics;