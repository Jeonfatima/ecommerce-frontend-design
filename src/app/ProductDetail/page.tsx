import React from 'react'
import Category from '../components/Category'
import Image from 'next/image'
import { MdOutlineMessage, MdOutlineVerifiedUser } from 'react-icons/md'
import { TbShoppingBag, TbWorld } from 'react-icons/tb'
import Link from 'next/link'
import BlueBanner from '../components/BlueBanner'
import Navbar from '../components/Navbar'
import { FaRegHeart } from 'react-icons/fa'

const products = [
  {
    name: "Men's Blazer set Elegant formal",
    price: "$7.00 to $99.59",
    image: "/images/pd1.png"
  },
  {
    name: "Men's shirt sleeve polo contrast",
    price: "$7.00 to $99.59",
    image: "/images/pd2.png"
  },
  {
    name: "Men's hoodie set causal brown",
    price: "$7.00 to $99.59",
    image: "/images/pd3.png"
  },
  {
    name: "Basketball Crew Shirt Space Blue",
    price: "$7.00 to $99.59",
    image: "/images/pd4.png"
  },
  {
    name: "New Summer Men's denim Bag",
    price: "$7.00 to $99.59",
    image: "/images/pd5.png"
  },


]

const relatedProducts = [
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    image: "/images/rp1.png"
  },
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    image: "/images/rp2.png"
  },
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    image: "/images/rp3.png"
  },
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    image: "/images/rp4.png"
  },
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    image: "/images/rp5.png"
  },
  {
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
    image: "/images/rp6.png"
  }
]

const page = () => {

  return (
    <div>

      {/* laptop */}
      <div className='hidden md:block'>
        <Navbar />

        <Category />

        {/* main section */}
        <div className='w-full max-w-[1180px] h-[580px] bg-white shadow flex mx-auto items-start justify-between flex-wrap'>

          {/* images */}
          <div className='flex flex-col items-center justify-center gap-6 pl-10 py-10 flex-shrink-0'>
            <Image
              src={"/images/dmain.png"}
              alt='product'
              width={310}
              height={310}
            />
            <div className='w-full flex justify-between gap-1'>
              <Image
                src={"/images/d1.png"}
                alt='d1'
                width={56}
                height={56}
              />
              <Image
                src={"/images/d2.png"}
                alt='d2'
                width={56}
                height={56}
              />
              <Image
                src={"/images/d3.png"}
                alt='d3'
                width={56}
                height={56}
              />
              <Image
                src={"/images/d4.png"}
                alt='d4'
                width={56}
                height={56}
              />
              <Image
                src={"/images/d5.png"}
                alt='d5'
                width={56}
                height={56}
              />
              <Image
                src={"/images/d2.png"}
                alt='d6'
                width={56}
                height={56}
              />
            </div>
          </div>

          {/* Information */}
          <div className='w-full lg:w-[430px] flex flex-col gap-1 py-5'>
            <h1 className='text-green-500 font-bold text-lg'> ✓ In stock</h1>
            <h1 className='font-bold text-xl'>Mens long Sleeve T-shirt Cotton Base Layer Slim Muscle</h1>
            <div className='flex gap-3 text-gray-500'>
              <div>⭐⭐⭐⭐☆ 9.3</div>
              <div className='flex items-center gap-1'>
                <MdOutlineMessage />
                <div>34 review</div>
              </div>
              <div className='flex items-center gap-1'>
                <TbShoppingBag />
                <div>154 sold</div>
              </div>
            </div>
            <div className='bg-[#fff4dc] w-full lg:w-[430px] h-[72px] flex justify-between items-center p-5'>
              <div className='border-r border-gray-300 px-5'>
                <h1 className='text-xl text-red-600 text-center font-bold'>$98.00</h1>
                <p className='text-sm text-gray-400'>50 - 100 pcs</p>
              </div>
              <div className='border-r border-gray-300 px-5'>
                <h1 className='text-xl text-left font-bold '>$90.00</h1>
                <p className='text-sm text-left text-gray-400'>100 - 700 pcs</p>
              </div>
              <div>
                <h1 className='text-xl text-center font-bold'>$78.00</h1>
                <p className='text-sm text-gray-400'>700 + pcs</p>
              </div>
            </div>

            {/* table of info */}
            <div className="w-full lg:w-[430px] h-[296px] bg-white text-gray-700 text-sm rounded-md overflow-hidden">
              {/* First group (ends with Design) */}
              <div className="grid grid-cols-2 px-4 pt-4 pb-3 gap-y-3">
                <div className="text-gray-400 font-medium">Price:</div>
                <div className="text-gray-700">Negotiable</div>

                <div className="text-gray-400 font-medium">Type:</div>
                <div className="text-gray-700">Classic shoes</div>

                <div className="text-gray-400 font-medium">Material:</div>
                <div className="text-gray-700">Plastic material</div>

                <div className="text-gray-400 font-medium">Design:</div>
                <div className="text-gray-700">Modern nice</div>
              </div>

              {/* Only one gray line under the first group */}
              <div className="border-t border-gray-200 mx-4" />

              {/* Second group (Customization, Protection, Warranty) */}
              <div className="grid grid-cols-2 px-4 py-3 gap-y-3">
                <div className="text-gray-400 font-medium">Customization:</div>
                <div className="text-gray-700">
                  Customized logo and <br />
                  design custom packages
                </div>

                <div className="text-gray-400 font-medium">Protection:</div>
                <div className="text-gray-700">Refund Policy</div>

                <div className="text-gray-400 font-medium">Warranty:</div>
                <div className="text-gray-700">2 years full warranty</div>
              </div>
            </div>

          </div>

          {/* Supplier section */}
          <div className='w-full lg:w-[280px] h-[325px] shadow rounded-md m-5 justify-center p-5 flex flex-col gap-3'>
            {/* supplier name */}
            <div className='flex gap-3 border-b border-gray-200 pb-3'>
              <div className='bg-green-200 text-gray-500 text-2xl font-bold w-[48px] h-[48px]  flex justify-center items-center'>R</div>
              <div>
                <p>Supplier</p>
                <p>Guanjai trading LLC</p>
              </div>

            </div>

            <div className='flex items-center justify-start gap-4 pt-3'>
              <div><Image src={"/images/german.png"} alt='Germany, Berlin' width={21} height={15} /></div>
              <p className='text-gray-400'> Germany, Berlin</p>
            </div>


            <div className='flex items-center justify-start gap-4'>
              <MdOutlineVerifiedUser className='text-gray-400' />
              <p className='text-gray-400'> Verified seller</p>
            </div>


            <div className='flex items-center justify-start gap-4'>
              <TbWorld className='text-gray-400' />
              <p className='text-gray-400'> Worldwide Shipping</p>
            </div>

            <button className='w-[248px] h-[40px] shadow rounded-md py-3 bg-blue-500 text-white text-center hover:bg-blue-600'>Send inquiry</button>

            <button className='w-[248px] h-[40px] shadow rounded-md py-3 text-blue-400 hover:text-blue-600 text-center'>Sellers profile</button>




          </div>


        </div>


        {/* product information section */}
        <div className='flex justify-center gap-3 p-10 mx-auto '>

          {/* description */}
          <div className='w-[880px] h-[618px] bg-white shadow rounded-md flex flex-col justify-between'>
            {/* table headings */}
            <div className='flex gap-4 border border-gray-300 w-full h-[48px] px-5 items-center'>
              <div className='text-gray-600 cursor-pointer transition-all duration-300 hover:text-blue-500  hover:scale-105 hover:border-b-2 hover:border-blue-500'>
                Description
              </div>
              <div className='text-gray-600 cursor-pointer transition-all duration-300 hover:text-blue-500  hover:scale-105 hover:border-b-2 hover:border-blue-500'>
                Reviews
              </div>
              <div className='text-gray-600 cursor-pointer transition-all duration-300 hover:text-blue-500 hover:scale-105 hover:border-b-2 hover:border-blue-500'>
                Shopping
              </div>
              <div className='text-gray-600 cursor-pointer transition-all duration-300 hover:text-blue-500  hover:scale-105 hover:border-b-2 hover:border-blue-500'>
                About Seller
              </div>
            </div>

            {/* product info para */}
            <div className='p-5 text-gray-600'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet accusamus velit, deserunt ab quis et in, obcaecati rem veritatis aspernatur vero tenetur ad, quaerat ullam dolore voluptatem quam? Provident recusandae corporis nobis debitis officia labore quo? Voluptatem eum voluptate corporis beatae, provident fugit quo repellat inventore, at recusandae repudiandae necessitatibus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, veritatis voluptates! Reprehenderit eos fugiat obcaecati molestias et veritatis, pariatur accusamus?</p>
            </div>

            {/* info table */}
            <div className='w-[567px] h-[180px] flex shadow-md border border-gray-300 mx-5'>
              {/* first column */}
              <div className='flex flex-col w-[204px] bg-gray-100'>
                <div className='border-b border-gray-300 px-4 py-[6px] text-left'>Model</div>
                <div className='border-b border-gray-300 px-4 py-[6px] text-left'>Style</div>
                <div className='border-b border-gray-300 px-4 py-[6px] text-left'>Certificate</div>
                <div className='border-b border-gray-300 px-4 py-[6px] text-left'>Size</div>
                <div className='px-4 py-[6px] text-left'>Memory</div>
              </div>

              {/* second column */}
              <div className='flex flex-col flex-1 bg-white'>
                <div className='border-l border-b border-gray-300 px-4 py-[6px] text-left'>#066707</div>
                <div className='border-l border-b border-gray-300 px-4 py-[6px] text-left'>Classic style</div>
                <div className='border-l border-b border-gray-300 px-4 py-[6px] text-left'>ISO-8975986748</div>
                <div className='border-l border-b border-gray-300 px-4 py-[6px] text-left'>34mm x 45mm x 19mm</div>
                <div className='border-l px-4 py-[6px]    border-gray-300 text-left'>3G Ram</div>
              </div>
            </div>

            <div className='w-[325px] h[126px] p-5'>
              <div className='text-lg text-gray-600'> ✓ Some great feature name here</div>
              <div className='text-lg text-gray-600'> ✓ Some great feature name here</div>
              <div className='text-lg text-gray-600'> ✓ Some great feature name here</div>
              <div className='text-lg text-gray-600'> ✓ Some great feature name here</div>

            </div>


          </div>

          {/* you may like */}
          <div className='w-[280px] h-[553px] shadow rounded-md bg-white p-3'>
            <h3 className="font-medium mb-3 text-xl text-gray-800">You may like</h3>

            <div className="flex flex-col gap-3">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="w-[242px] h-[80px] flex items-center gap-3 rounded-md px-2 py-1 hover:shadow transition"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
                    className=" object-cover rounded-md"
                  />
                  <div className="text-sm w-[170px] overflow-hidden">
                    <p className="text-gray-700 leading-snug line-clamp-2">
                      {product.name}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>


        {/* related products */}
        <div className='w-[1180px] h-[350px] bg-white shadow rounded-md mx-auto mb-10 p-5'>
          <h1 className='text-lg font-bold p-2'>Related products</h1>
          <div className='flex w-full justify-between' >
            {relatedProducts.map((product, index) => (
              <div key={index} className='w-[172px] h-[254px] flex flex-col gap-3 '>
                <Link href={"/productsListing"}>
                  <Image src={product.image} alt='product' width={172} height={172} />
                </Link>
                <h1 className='text-xl'>{product.name}</h1>
                <p className='text-md text-gray-500'>{product.price}</p>

              </div>
            ))}

          </div>

        </div>

        {/* banner */}
        <BlueBanner />
      </div>


      {/* phone */}
      <div className='sm:hidden'>
        <Image
          src={"/images/dmain.png"}
          alt='product'
          width={360}
          height={305}
        />
        <div className='flex gap-3 text-gray-500 py-3'>
          <div>⭐⭐⭐⭐☆ 9.3</div>
          <div className='flex items-center gap-1'>
            <MdOutlineMessage />
            <div>34 review</div>
          </div>
          <div className='flex items-center gap-1'>
            <TbShoppingBag />
            <div>154 sold</div>
          </div>
        </div>
        <h1 className='font-bold text-xl'>Mens long Sleeve T-shirt Cotton Base Layer Slim Muscle</h1>
        <div className='flex gap-1 text-xl'>
          <h1 className='text-red-600'>$129.95</h1>
          <p className='text-gray-400 text-md'>(50 - 100)pcs</p>
        </div>
        <div className="flex items-center py-4 gap-4">
          <button className="w-[280px] h-[40px] shadow rounded-md bg-blue-500 text-white text-center hover:bg-blue-600">
            Send inquiry
          </button>
          <div className="w-[40px] h-[40px] flex items-center justify-center border border-gray-300 rounded-md">
            <FaRegHeart className="text-blue-600" />
          </div>
        </div>
        <div className="text-md text-gray-800 space-y-1 p-2">
          <div className="flex gap-2">
            <span className="text-gray-400">Condition</span>
            <span>Brand new</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-400">Material</span>
            <span>Plastic</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-400">Category</span>
            <span>Electronics, gadgets</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-400">Item num</span>
            <span>23421</span>
          </div>
          <p className="text-gray-700">
            Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and ...
          </p>
          <span className="text-blue-600 font-medium cursor-pointer">Read more</span>
        </div>
        <div className='bg-white border border-gray-300 rounded-md w-[340px] h-[120px] p-2 m-2'>
          <div className='flex gap-1 justify-start border-b border-gray-400 pb-4'>
            <div className='bg-green-200 text-gray-500 text-2xl font-bold w-[48px] h-[48px]  flex justify-center items-center'>R</div>
            <div className='text-lg text-gray-600'>
              <p>Supplier</p>
              <p>Guanjai trading LLC</p>
            </div>

          </div>
          <div className="flex justify-between items-center gap-6 flex-wrap pt-2">
            {/* Country */}
            <div className="flex items-center gap-2">
              <Image src="/images/german.png" alt="Germany, Berlin" width={21} height={15} />
              <p className="text-gray-400">Germany</p>
            </div>

            {/* Verified */}
            <div className="flex items-center gap-2">
              <MdOutlineVerifiedUser className="text-gray-400" />
              <p className="text-gray-400">Verified</p>
            </div>

            {/* Shipping */}
            <div className="flex items-center gap-2">
              <TbWorld className="text-gray-400" />
              <p className="text-gray-400">Shipping</p>
            </div>
          </div>

        </div>
        {/* related products for mobile */}
        <div className="w-full bg-white shadow rounded-md p-4 mb-10">
          <h1 className="text-lg font-bold mb-4">Related products</h1>

          <div className="grid grid-cols-2 gap-3">
            {relatedProducts.map((product, index) => (
              <div key={index} className="w-[150px] h-[220px] flex flex-col gap-2">
                <Link href="/productsListing">
                  <Image
                    src={product.image}
                    alt="product"
                    width={150}
                    height={150}
                    className="rounded-md"
                  />
                </Link>
                <h2 className="text-sm font-semibold text-left">{product.name}</h2>
                <p className="text-sm text-gray-500 text-left">{product.price}</p>
              </div>
            ))}
          </div>
        </div>



      </div>






    </div>
  )
}

export default page
