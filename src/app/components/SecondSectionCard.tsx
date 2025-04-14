import Image from "next/image"
import Link from "next/link"
const products = [
    { 
        name: 'Smart watches', 
        price: 'From USD 19', 
        image: "/images/2watch.png",
    },
    { 
        name: 'Cameras', 
        price: 'From USD 89', 
        image: '/images/2camera.png',
    },
    { 
        name: 'Headphones', 
        price: 'From USD 10', 
        image: '/images/2headphone.png',
    },
   
    { 
        name: 'Smart Watches', 
        price: 'From USD 90', 
        image: '/images/2jug.png',
    },
    { 
        name: 'Gaming set', 
        price: 'From USD 35', 
        image: '/images/2headset.png',
    },
    { 
        name: 'Laoptops 7 PC', 
        price: 'From USD 340', 
        image: '/images/2laptop.png',
    },
    { 
        name: 'Smartphones', 
        price: 'From USD 19', 
        image: '/images/2phone.png',
    },
    { 
        name: 'Iphones', 
        price: 'From USD 240', 
        image: '/images/2iphone.png',
    }
    
]


function ProductsCard() {
    return (
        <div className="flex-1 bg-white border border-gray-200 border-l-0 border-b-2  ">
            <div className="grid grid-cols-4 h-[280px]">
                {products.map((product, index) => (
                    <div 
                        key={index} 
                        className={`relative flex flex-col p-4 border-b-1 border-gray-200
                                  ${index !== products.length - 1 ? 'border-r border-gray-200' : ''}`}
                    >
                        <div className="flex flex-col">
                            <h3 className=" text-black">{product.name}</h3>
                            <p className="text-sm text-gray-500">{product.price}</p>
                        </div>
                        <div className="mt-auto self-end">
                        <Link href={'/ProductDetail'}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={70}
                                height={70}
                                className="object-contain"
                            />
                        </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsCard