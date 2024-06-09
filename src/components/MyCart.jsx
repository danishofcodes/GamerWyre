import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
export default function MyCart({ cartItems, handleClose }) {
    let total = 0;
    cartItems.forEach(cartItems => total += cartItems.price);
    const gst = total * 18 / 100;
    const delivery = total * 1 / 100;
    const net = total + gst + delivery;

    return (
        <div className="backdropmodal">
            <div className='cart bg-stone-300 rounded-3xl shadow-lg fixed top-[20px] left-[20ems]'>
                <div className="bg-[#8900fa] text-white font-bold flex items-center justify-between ps-4 pe-2 py-2 rounded-full"> <FontAwesomeIcon icon={faShoppingCart} />  <h3> My Cart </h3>
                    <button onClick={handleClose} className="bg-[#fff] w-[30px] h-[30px] text-[#000] rounded-full"><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                {cartItems.length != 0 &&
                    <div className='products-in-cart'>
                        <div className="overflow-auto max-h-[15em] mt-3">
                            {cartItems.map((item, index) => {
                                return (<div key={index} className="bg-stone-200 p-2  my-2 flex items-center justify-between rounded-md ">
                                    <h2>{item.title}</h2><span>{item.price}</span>
                                </div>)
                            })}
                        </div>
                        <hr />
                        {/* <div className="flex item-center justify-between mt-3">
                <h4>Total</h4>
                <h4>Rs. {total}</h4>
                </div> */}
                        <div className="mt-4">
                            <table className="w-[100%] text-left">
                                <tbody>
                                    <tr>
                                        <td>Total</td>
                                        <td className='text-end'>{parseFloat(total).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Delivery Charges</td>
                                        <td className='text-end'>{parseFloat(delivery).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>GST</td>
                                        <td className='text-end'>{parseFloat(gst).toFixed(2)} (18% GST)</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><hr/></td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold text-[#8900fa]'>Net Total</td>
                                        <td className='text-end font-bold  text-[#8900fa]'>{parseFloat(net).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                            <button className='bg-green-500 text-white p-3 mt-2 border-0 hover:bg-green-600 rounded-md'>Proceed with Payment {parseFloat(net).toFixed(2)}</button>
                    </div>}

                    {cartItems.length == 0 && <div className='mt-4'>Woops so empty! add some items first!</div>}
            </div>
        </div>
    )
}


