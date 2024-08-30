import Image from "next/image"

const UserCard = ({ type} : { type: string}) => {
  return (
    <div className="rounded-lg odd:bg-purple even:bg-yellow p-4 flex-1 min-w-[130px]">
        <div className="flex justify-between items-center">
            <span className="text-[10px] bg-white px-2 py-1 rounded-full text-spikeGreen">
                2024/25
            </span>
            <Image src="/more.png" alt="this is ellipses icon" width={20} height={20} />
        </div>
        <h1 className="text-2xl font-semibold my-4">1,235</h1>
        <h2 className="capitalize tx-sm font-medium text-gray500"> {type }s</h2>
    </div>
  )
}

export default UserCard