
import Image from 'next/image'  // Importing Image component from Next.js

function DiscountCard() {

    // Product data
    const products = [
        { name: 'Smart watches', discount: '-25%', image: '/images/watch.png' },
        { name: 'Laptop', discount: '-15%', image: '/images/laptop.png' },
        { name: 'GoPro camera', discount: '-40%', image: '/images/headphone.png' },
        { name: 'Headphones', discount: '-25%', image: '/images/camera.png' },
        { name: 'Smart phones', discount: '-25%', image: '/images/phone.png' },
    ]

    return (
        <div className="flex-1 bg-white border border-gray-200 border-l-0 h-full p-3">
            <div className="grid grid-cols-5 h-full">
                {products.map((product, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-col items-center justify-center p-4 
                                  ${index !== products.length - 1 ? 'border-r border-gray-200' : ''}`}
                    >
                        <Image
                            src={product.image}    // Use 'product.image' instead of 'products.image'
                            alt={product.name}     // Use 'product.name' instead of 'products.name'
                            width={120}            // Set width
                            height={120}           // Set height
                            className="object-contain"   // Optional styling
                        />
                        <h3 className="text-[16px] text-gray-600 mt-3">{product.name}</h3>
                        <span className="inline-block px-3 py-1 bg-[#FFE3E3] text-[#EB001B] 
                                     text-[13px] rounded-xl mt-2">
                            {product.discount}   {/* Use 'product.discount' instead of 'products.discount' */}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DiscountCard
