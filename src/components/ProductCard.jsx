export default function ProductCard({prod, addItem}) {
    const baseClass = "w-full font-sans font-bold text-center uppercase text-xs py-4 px-4  bg-gray-900 text-white hover:bg-[#ff9513] rounded-br-3xl rounded-bl-3xl ";
    return (
        <div className=" w-[9rem] sm:w-[9em] md:w-[12em] lg:w-[14em] bg-white border border-gray-200 rounded-3xl shadow  shrink-0">
            <div
                className="h-[9em] sm:h-[9em] md:h-56 lg:h-56  mx-3 mt-3 overflow-hidden text-white bg-clip-border rounded-xl bg-[#fff]">
                <img className="card-img"
                    src={prod.img}
                    alt="card-image" />
            </div>
            <div className="px-4 pt-2">
                <h5 className="text-[14px] sm:text-sm truncate block mb-2 lg:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
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
