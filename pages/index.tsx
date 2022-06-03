import { useState, useEffect } from 'react'
import Commerce from '@chec/commerce.js';

const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);
export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => { async () => await setProducts(commerce.products.list()); })
    return (<>
        <div className="navbar"></div>


        {products.map((product) => { <li>uu</li> })}
    </>
    )


}
