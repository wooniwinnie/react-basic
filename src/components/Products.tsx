import React, { useEffect, useState } from 'react';

type Props = {};

type Product = {
    id: string;
    name: string;
    price: string;
};

export default function Products({}: Props) {
    const [count, setCount] = useState<number>(0);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('data/products.json')
            .then((res) => res.json())
            .then((data) => {
                console.log('데이터 전송 완료');
                setProducts(data);
            });
    }, []);

    return (
        <>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    );
}
