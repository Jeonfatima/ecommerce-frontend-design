import Image from "next/image"

const Suppliers = () => {

const suppliers = [
    {
        name:"Arabic Emirates",
        des:"shopname.ae",
        image:"/images/flag1.png"
    },
    {
        name:"Australia",
        des:"shopname.ae",
        image:"/images/flag2.png"
    },
    {
        name:"United States",
        des:"shopname.ae",
        image:"/images/flag3.png"
    },
    {
        name:"Russia",
        des:"shopname.ru",
        image:"/images/flag4.png"
    },
    {
        name:"Italy",
        des:"shopname.it",
        image:"/images/flag5.png"
    },
    {
        name:"Denmark",
        des:"denmark.com.dk",
        image:"/images/flag6.png"
    },
    {
        name:"France",
        des:"shopname.com.fr",
        image:"/images/flag7.png"
    },
    {
        name:"Arabic Emirates",
        des:"shopname.ae",
        image:"/images/flag1.png"
    },
    {
        name:"China",
        des:"shopname.ae",
        image:"/images/flag9.png"
    },
    {
        name:"Great Britian",
        des:"shopname.co.uk",
        image:"/images/flag10.png"
    }
]

  return (
    <div className='w-[1180px] h-[138px] mx-auto my-20'>
          <h2 className="text-2xl font-semibold mb-10">Suppliers by region</h2>
        <div className='grid grid-cols-5 gap-4'>
            {suppliers.map((supplier,idx)=>(
                <div key={idx} className='w-[221px] h-[36px] flex gap-3 justify-start items-center'>
                    
                        <Image
                        src={supplier.image}
                        alt={supplier.name}
                        width={28}
                        height={20}
                        
                        />
                    
                    <div className="flex flex-col ">
                        <div className="text-lg text-black">{supplier.name}</div>
                        <div className=" text-gray-400">{supplier.des}</div>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Suppliers