import React from 'react'
import BlueBanner from '../components/BlueBanner'
import Image from 'next/image'
import { FaArrowLeft, FaMinus, FaPlus } from 'react-icons/fa6'
import { IoMdLock } from 'react-icons/io'
import { MdMessage, MdOutlineShoppingCart } from 'react-icons/md'
import { BiSolidTruck } from 'react-icons/bi'
import Link from 'next/link'
import { HiDotsVertical } from 'react-icons/hi'
import RecommendedSection from '../components/RecommendedSection'

const products = [
    {
        name: "GoPro HERO6 4K Action Camera - Black",
        price: "$99.50",
        image: "/images/save1.png"
    },
    {
        name: "GoPro HERO6 4K Action Camera - Black",
        price: "$99.50",
        image: "/images/save2.png"
    },
    {
        name: "GoPro HERO6 4K Action Camera - Black",
        price: "$99.50",
        image: "/images/save3.png"
    },
    {
        name: "GoPro HERO6 4K Action Camera - Black",
        price: "$99.50",
        image: "/images/save4.png"
    }
]


const cart = [
    {
        name: "T-shirts with multiple colors, for men and lady",
        size: "Medium",
        color: "Blue",
        material: "Plastic",
        seller: "Artel market",
        price: "$78.99",
        qty: 9,
        image: "/images/cart1.png"
    },
    {
        name: "Casual denim bag, for men and lady",
        size: "Medium",
        color: "Blue",
        material: "Denim",
        seller: "Best factory LLC",
        price: "$78.99",
        qty: 3,
        image: "/images/cart2.png"
    },
    {
        name: "T-sirts with multpe colrs, for men and lady",
        size: "Medium",
        color: "Blue",
        material: "Plastic",
        seller: "Artel market",
        price: "$78.99",
        qty: 1,
        image: "/images/cart3.png"
    }
]
const page = () => {
    return (

        <div>

            {/* laptop */}
            <div className='hidden md:block'>
                <h1 className='text-xl font-bold px-[10%]'>My Cart (3)</h1>

                {/* first section */}
                <div className='w-[1180px] mx-auto flex'>

                    {/* cart items */}
                    <div className='mx-auto bg-white'>
                        <div className='w-[880px] h-[552px] flex flex-col gap-1 shadow '>
                            {cart.map((cart, idx) => (
                                <div
                                    key={idx}
                                    className="w-[840px] h-[146px] flex justify-between items-center gap-2 p-2 border-b border-gray-200"
                                >
                                    {/* Left - Image and Details */}
                                    <div className="flex items-center gap-3">
                                        <Image src={cart.image} alt={cart.name} width={80} height={80} className='align-top' />

                                        {/* Details */}
                                        <div className="flex flex-col gap-1">
                                            <h1 className="text-lg font-bold">{cart.name}</h1>
                                            <div className="flex gap-3 text-sm text-gray-400">
                                                <p>Size: {cart.size}</p>
                                                <p>Color: {cart.color}</p>
                                                <p>Material: {cart.material}</p>
                                            </div>
                                            <p className="text-sm text-gray-400">Seller: {cart.seller}</p>
                                            <div className="flex gap-2 mt-1">
                                                <button className="shadow shadow-gray-300 w-[70px] h-[30px] text-red-600 rounded-md  hover:bg-gray-100 ">
                                                    Remove
                                                </button>
                                                <button className="text-blue-500 w-[103px] h-[30px] shadow shadow-gray-300 rounded-md  hover:bg-gray-100 ">
                                                    Save for later
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right - Price & Quantity */}
                                    <div className="flex flex-col items-end gap-2 pr-4">
                                        <p className="font-semibold text-lg">{cart.price}</p>
                                        <button className="w-[123px] h-[40px]  border border-gray-200 rounded-md shadow-sm text-sm">
                                            Qty: {cart.qty}
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {/* buttons*/}

                            <div className='flex justify-between p-5'>
                                <div className='flex items-center gap-2'>
                                    <FaArrowLeft className='text-white text-xl font-bold' />
                                    <button className='w-[159px] h-[40px] font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-md'>
                                        Back to shop
                                    </button>
                                </div>

                                <button className='w-[115px] h-[40px] border border-gray-300 rounded-md text-blue-500 hover:bg-gray-100'>
                                    Remove all
                                </button>
                            </div>

                        </div>
                    </div>


                    {/* right section */}
                    <div className='flex flex-col h-full m-4 gap-4'>
                        <div className='w-[280px] h-[110px] shadow flex flex-col gap-1 p-5 bg-white'>
                            <h1>Have a coupon?</h1>
                            <div className='flex border border-gray-300 justify-between'>
                                <input type='text' placeholder='Add a coupon ' className='text-gray-300 w-[164px] h-[40px] hover:bg-gray-100 p-2' />
                                <button className='text-blue-500 hover:text-blue-600 w-[85px] h-[40px]'>Apply</button>

                            </div>

                        </div>

                        {/* total */}
                        <div className='w-[280px] h-[302px] bg-white shadow shadow-gray-300 flex flex-col'>
                            <div className='border-b border-gray-200 m-2 text-gray-400'>
                                <div className='flex justify-between '>
                                    <p>Subtotal:</p>
                                    <p className='text-gray-400'>$1403.97</p>
                                </div>
                                <div className='flex justify-between p-1'>
                                    <p>Discount:</p>
                                    <p className='text-red-500'>- $60.00</p>
                                </div>
                                <div className='flex justify-between p-1'>
                                    <p>Tax:</p>
                                    <p className='text-green-500'>+ $14.00</p>
                                </div>
                            </div>

                            <div className='font-bold text-lg flex justify-between gap-3 m-3'>
                                <h1>Total:</h1>
                                <p>$1357.97</p>
                            </div>

                            <button className='w-[248px] h-[54px] bg-[#00B517] text-white rounded-md hover:bg-[#009e14]  mx-auto'>Checkout</button>

                            <div className='flex gap-1 m-6 mx-auto'>
                                <Image
                                    src={"/images/c1.png"}
                                    alt='icon'
                                    width={34}
                                    height={22} />
                                <Image
                                    src={"/images/c2.png"}
                                    alt='icon'
                                    width={34}
                                    height={22} />
                                <Image
                                    src={"/images/c3.png"}
                                    alt='icon'
                                    width={34}
                                    height={22} />
                                <Image
                                    src={"/images/c4.png"}
                                    alt='icon'
                                    width={34}
                                    height={22} />
                                <Image
                                    src={"/images/c5.png"}
                                    alt='icon'
                                    width={34}
                                    height={22} />

                            </div>



                        </div>

                    </div>


                </div>




                <div className='mx-[11%] p-8 w-[1180px] flex gap-10'>
                    <div className='w-[242px] h-[48px] flex gap-2'>
                        {/* logo */}
                        <div className="w-[48px] h-[48px] bg-gray-200 rounded-full flex items-center justify-center">
                            <IoMdLock className="w-7 h-7 text-gray-400" />
                        </div>
                        {/* text */}
                        <div>
                            <p className='text-black text-md'>Secure payment</p>
                            <p className='text-gray-400 text-md'>Have you ever finally just</p>
                        </div>

                    </div>

                    <div className='w-[242px] h-[48px] flex gap-2'>
                        {/* logo */}
                        <div className="w-[48px] h-[48px] bg-gray-200 rounded-full flex items-center justify-center">
                            <MdMessage className="w-7 h-7 text-gray-400" />
                        </div>
                        {/* text */}
                        <div>
                            <p className='text-black text-md'>Secure payment</p>
                            <p className='text-gray-400 text-md'>Have you ever finally just</p>
                        </div>

                    </div>

                    <div className='w-[242px] h-[48px] flex gap-2'>
                        {/* logo */}
                        <div className="w-[48px] h-[48px] bg-gray-200 rounded-full flex items-center justify-center">
                            <BiSolidTruck className="w-7 h-7 text-gray-400" />
                        </div>
                        {/* text */}
                        <div>
                            <p className='text-black text-md'>Secure payment</p>
                            <p className='text-gray-400 text-md'>Have you ever finally just</p>
                        </div>

                    </div>
                </div>



                {/* saved for later*/}
                <div className='w-[1180px] h-[475px] bg-white shadow rounded-md mx-auto mb-10 p-5'>
                    <h1 className='text-lg font-bold p-2'>Save for later</h1>
                    <div className='flex w-full justify-between' >
                        {products.map((product, index) => (
                            <div key={index} className='w-[270px] h-[382px] flex flex-col gap-3 '>
                                <Image src={product.image} alt='product' width={270} height={240} />
                                <h1 className='text-xl font-bold'>{product.price}</h1>
                                <p className='text-md text-gray-500'>{product.name}</p>
                                <button className="w-[158.56px] h-[40px] flex items-center p-2 gap-2 text-blue-500 border border-gray-200 rounded-md hover:bg-gray-50 transition">
                                    <MdOutlineShoppingCart className="text-xl" />
                                    <span className="text-md font-medium">Move to cart</span>
                                </button>

                            </div>
                        ))}

                    </div>

                </div>





                {/* banner */}
                <BlueBanner />
            </div>


            {/* Mobile */}
            <div className='sm:hidden'>
                <div className='flex justify-start gap-3 items-center'>
                    <Link href={"/"}>
                        <FaArrowLeft />
                    </Link>
                    <h1 className='font-bold text-xl'>Shopping cart</h1>
                </div>

                
                    <div className="bg-white px-2 py-4 space-y-4 sm:hidden">
                        {cart.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-md shadow p-3 space-y-3"
                            >
                                {/* Image + Details Row */}
                                <div className="flex justify-between items-start gap-3">
                                    {/* Image */}
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={80}
                                        height={80}
                                        className="rounded-md object-cover"
                                    />

                                    {/* Details */}
                                    <div className="flex-1 flex flex-col gap-1">
                                        <div className="flex justify-between items-start">
                                            <h1 className="text-base font-bold">{item.name}</h1>
                                            <HiDotsVertical className="text-gray-500 text-2xl" />
                                        </div>

                                        <div className="text-sm text-gray-500">
                                            <div className="flex gap-3">
                                                <p>Size: {item.size}</p>
                                                <p>Color: {item.color}</p>
                                            </div>
                                            <p>Seller: {item.seller}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ✅ Quantity & Price Row */}
                                <div className="flex justify-between items-center">
                                    {/* Quantity Box */}
                                    <div className="w-[150px] h-[40px] flex border rounded-md overflow-hidden">
                                        <button className="w-1/3 flex items-center justify-center border-r text-gray-500">
                                            <FaMinus size={14} />
                                        </button>
                                        <div className="w-1/3 flex items-center justify-center text-black font-medium">
                                            2
                                        </div>
                                        <button className="w-1/3 flex items-center justify-center border-l text-gray-500">
                                            <FaPlus size={14} />
                                        </button>
                                    </div>

                                    {/* Price */}
                                    <div className="text-lg font-semibold">{item.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                     {/* total */}
                     <div className='w-full bg-white shadow shadow-gray-300 flex flex-col m-3 p-3'>
                        <div className='border-b border-gray-200 m-2 text-gray-400'>
                            <div className='flex justify-between '>
                                <p>Subtotal:</p>
                                <p className='text-gray-400'>$1403.97</p>
                            </div>
                            <div className='flex justify-between p-1'>
                                <p>Discount:</p>
                                <p className='text-red-500'>- $60.00</p>
                            </div>
                            <div className='flex justify-between p-1'>
                                <p>Tax:</p>
                                <p className='text-green-500'>+ $14.00</p>
                            </div>
                        </div>

                        <div className='font-bold text-lg flex justify-between gap-3 m-3'>
                            <h1>Total:</h1>
                            <p>$1357.97</p>
                        </div>

                        <button className='w-full h-[54px] bg-[#00B517] text-white rounded-md hover:bg-[#009e14]  mx-auto'>Checkout</button>

                      



                    </div>


                    <RecommendedSection/>
                   
                

            </div>

        </div>
    )
}

export default page