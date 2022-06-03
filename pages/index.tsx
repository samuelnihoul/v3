import { useState, useEffect } from 'react'
import Commerce from '@chec/commerce.js';

const commerce = new Commerce(process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY, true);
export default function Home() {
    //products
    const [p, sp] = useState([]);
    //loading
    const [l, sl] = useState(true);
    useEffect(() => { async () => await sp(commerce.products.list()); sl(false) })
    return (<>
        <div className="navbar"></div>


        {l ? <h1>... loading</h1> : <><h1>Our Products</h1>{p.map((product) => { <li>uu</li> })}</>}
    </>
    )


}
