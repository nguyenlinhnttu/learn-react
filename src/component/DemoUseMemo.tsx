import { useMemo, useState } from "react";

function DemoUseMemo() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const handleAddProduct = () => {
        setProducts([...products, { name, price: Number(price) }]);
    }

    // it render every time when component re-renders
        // const total = products.reduce((result, product) => {
        //         console.log('Calculating total...');
        // return  result + product.price
        // }, 0);


    // Use useMemo to memoize the total calculation    
    const total = useMemo(() => {
        const result = products.reduce((acc, product) => {
            console.log('Calculating total...');
            return acc + product.price
            }, 0);
        return result;  
    }, [products])

    return (
        <div>
            <h1>Demo useMemo</h1>
            <p> <input value={name}
                placeholder="Enter product name"
                onChange={(e) => setName(e.target.value)} />
                </p>
            <p><input value={price}
                placeholder="Enter product price"
                onChange={(e) => setPrice(e.target.value)} /></p>
            <button onClick={handleAddProduct}>Add Product</button>

            <h2>Total: {total}</h2>
            {products.map((product, index) => (
                <div key={index}>
                    {product.name}: {product.price}
                </div>
            ))}
        </div>
    )
}

export default DemoUseMemo;