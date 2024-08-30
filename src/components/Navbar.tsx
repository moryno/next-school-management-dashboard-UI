import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex items-center p-4 box-border'>
        <div className="flex items-center gap-6 justify-end w-full">
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
                <Image src="/search.png" alt="this is a search icon" width={14} height={14} />
                <input type="text" placeholder="Search..." className="outline-none w-[200px] p-2 bg-transparent" />
            </div>
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <Image src="/message.png" alt="this is message image" width={20} height={20} />
            </div>
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                <Image src="/announcement.png" alt="this is announcement image" width={20} height={20} />
                <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-approved text-white rounded-full text-xs">1</div>
            </div>
            <div className="flex flex-col">
               <span className="text-xs leading-3 font-medium">Diana Nyambura</span>
               <span className="text-[10px] text-gray-500 text-right">Admin</span>
            </div>
            <Image src="/avatar.png" alt="this is avatar image" width={36} height={36} className="rounded-full" />
        </div>
    </div>
  )
}

export default Navbar