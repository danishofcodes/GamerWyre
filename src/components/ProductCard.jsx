export default function ProductCard({prod, addItem}) {
    const baseClass = "w-full font-sans font-bold text-center uppercase text-xs py-4 px-6  bg-gray-900 text-white hover:bg-[#ff9513] rounded-br-3xl rounded-bl-3xl ";
    return (
        <div className=" w-[14rem] bg-white border border-gray-200 rounded-3xl shadow  shrink-0">
            <div
                className="h-56 mx-3 mt-3 overflow-hidden text-white bg-clip-border rounded-xl bg-[#eee]">
                <img
                    src={prod.img}
                    alt="card-image" />
            </div>
            <div className="px-4 pt-2">
                <h5 className="truncate block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {prod.title}
                </h5>
                <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                  Rs. {prod.price}
                </p>
            </div>
            <div className="pt-2">
                <button
                   className={baseClass}
                   type="button" onClick={()=>addItem(prod)}>
                    Add To Cart
                </button>
            </div>
        </div>
    )
}
