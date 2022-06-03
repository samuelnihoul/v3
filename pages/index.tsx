import { useState, useEffect } from 'react'
import Commerce from '@chec/commerce.js';
import Navbar from '../components/navbar'

const commerce = new Commerce(process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY, true);
export default function a() {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);
    useEffect(() => { async () => await setProducts(commerce.products.list()); setLoading(false) })
    return (<>
        <Navbar></Navbar>


        {loading ? <h1>... loading</h1> : <><h1>Our Products</h1>{products.map((product) => { <li>uu</li> })}</>}
    </>
    )


}
