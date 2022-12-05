export const ProductLoader= async ()=>{
    const productsData= await fetch('https://openapi.programming-hero.com/api/quiz');
    const products= await productsData.json();

    return products;
}