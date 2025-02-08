import { useState } from "react"


const Tags = () => {
    let [tags, setTags] = useState([
        "For You",
        "Premium",
        "Laughter Chefs",
        "Cricket",
        "World Cup",
        "Bigg Boss",
        "News",
        "Aus vs IND",
        "FREE shows",
        "Top 10",
        "TATA IPL",
        "Drama",
        "Musical",
        "War",
        "Western"
    ])
  return (
    <>
      <div className="w-full h-[75px] bg-[#060707] 
      border-t-2 border-[#2c2c2c] flex gap-x-3 items-center pl-5 ">
        {
            tags.map((tag)=>{
                return<p
                    className="py-[5px] px-[15px] bg-[#363636] w-fit rounded-full cursor-pointer font-bold text-[14px] whitespace-nowrap
                    hover:bg-[#888585] duration-300"
                >{tag}</p>
            })
        }
      </div>
    </>
  )
}

export default Tags
