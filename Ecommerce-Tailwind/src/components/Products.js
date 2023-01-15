import React from 'react'
import axiosInstance from '../axios config/axiosInstance';
import {CardPage} from './Card';

export const Products = () => {
    const [items, setItems] = React.useState([
        
    ]);
    React.useEffect(() => {
        // Update the document title using the browser API
        if (items.length === 0) {
            axiosInstance.get('/products').then((res) => {
                setItems(res.data.products);
                console.log(res.data.products);
            }).catch((err) => {
                console.log(err);
            })
        }
      });
  return (
    <div>
        <img src="https://assets-static.invideo.io/images/large/ecommerce_Ads_Revised_1bbde06984.png" alt="" />
    <div className='flex flex-wrap justify-center items-center'>
        {
            items.map((product, index) => {
                return(
                        <CardPage key={index} value={product}/>
                )
            })
        }
    </div>
    </div>
  )
}
