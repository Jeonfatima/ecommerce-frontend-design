import Link from "next/link"

function Button() {
    return (
        <Link href={"/productsListing"}>
        <button className=' w-30 h-10 font-semibold justify-center items-center flex flex-start rounded-lg bg-amber-50  cursor-pointer'>
            Learn more
        </button>
        </Link>
    )
}

export default Button