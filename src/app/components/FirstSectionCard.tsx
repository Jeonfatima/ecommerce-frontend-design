import Image from "next/image"
const products = [
    { 
        name: 'Soft Chairs', 
        price: 'From USD 19', 
        image: "/images/chair.png",
    },
    { 
        name: 'Kitchen Mixer', 
        price: 'From USD 100', 
        image: '/images/mixer.png',
    },
    { 
        name: 'Sofa & Chair', 
        price: 'From USD 19', 
        image: '/images/lamp.png',
    },
   
    { 
        name: 'Blenders', 
        price: 'From USD 39', 
        image: '/images/coffee.png',
    },
    { 
        name: 'Kitchen Dishes', 
        price: 'From USD 19', 
        image: '/images/mattress.png',
    },
    { 
        name: 'Home Appliance', 
        price: 'From USD 19', 
        image: '/images/decor.png',
    },
    { 
        name: 'Smart watches', 
        price: 'From USD 19', 
        image: '/images/jar.png',
    },
    { 
        name: 'Plants', 
        price: 'From USD 12', 
        image: '/images/plant.png',
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
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={70}
                                height={70}
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsCard