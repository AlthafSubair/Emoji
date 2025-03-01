import { useState } from "react"
import BtnLoader from "../components/BtnLoader"
import axios from 'axios'


const AddEmojisPage = () => {

  const [emoji, setEmoji] = useState("")
  const [key, setKey] = useState("")
  const [keywords, setKeywords] = useState([])
  const [code, setCode] = useState("")
  const [isloading, setisLoading] = useState(false)

  const handleAddKeyword = () => {
    if (key !== "") {
      setKeywords([...keywords, key])
      setKey("")
    }
  }

  const handleRemoveKeyword = (index) => {
    setKeywords((prevKeywords) => prevKeywords.filter((_, i) => i !== index));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setisLoading(true)
      console.log(emoji, keywords, code)

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/add_emoji`, { emoji, keywords, code })
      console.log(res.data)
      setisLoading(false)
      setEmoji("")
      setKeywords([])
      setCode("")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start">

    {/* Background Layer */}
    <div className="absolute inset-0">
      <div className="relative h-full w-full bg-slate-950 
        [&>div]:absolute [&>div]:inset-0 
        [&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
        [&>div]:bg-[size:14px_24px] 
        [&>div]:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        <div></div>
      </div>
    </div>  
  
  
  
    {/* Content Section */}
    <div className="relative z-10 flex flex-col items-center justify-start px-4 w-full pt-32">
      <div className="max-w-3xl text-center">
        <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white">
        Add a New <span className="text-sky-400">Emoji</span>
        </h1>
      </div>

<div className="lg:w-4/12 md:w-1/2 sm:w-3/4 w-full m shadow-lg rounded-md bg-gradient-to-br from-slate-950 to-slate-800 px-4 py-10">
  <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
  <input 
            type="text" 
            name="emoji"  
            placeholder="Emoji"
            className="rounded-lg border w-full h-10 px-3 py-3 font-medium border-slate-700 bg-slate-800 text-white hover:bg-slate-700"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
          />

<div className="flex flex-row gap-2 flex-wrap">
{
  keywords.length > 0 && keywords.map((item, index) => (
    <div className="bg-slate-800 text-white px-3 py-2 flex flex-row rounded-lg gap-4 items-center" key={index}>
      <p>{item}</p>
      <button
      type="button"
  onClick={() => handleRemoveKeyword(index)}
  className="hover:bg-black hover:opacity-55 w-5 h-5 flex items-center justify-center rounded-full"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
</button>




    </div>
  ))
}
</div>

          <div className="flex flex-row gap-3">
          <input 
            type="text" 
            name="key" 
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Keyword"
            className="rounded-lg border w-full h-10 px-3 py-3 font-medium border-slate-700 bg-slate-800 text-white hover:bg-slate-700"
          />

<button
  className="group cursor-pointer outline-none hover:rotate-90 duration-300"
  title="Add New"
  type="button"
  onClick={handleAddKeyword}
>
  <svg
    className="stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
    viewBox="0 0 24 24"
    height="40px"
    width="40px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeWidth="1.5"
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
    ></path>
    <path strokeWidth="1.5" d="M8 12H16"></path>
    <path strokeWidth="1.5" d="M12 16V8"></path>
  </svg>
</button>



          </div>


          <input 
            type="text" 
            name="code"  
            placeholder="Secert Code"
            className="rounded-lg mt-4 border w-full h-10 px-3 py-3 font-medium border-slate-700 bg-slate-800 text-white hover:bg-slate-700"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />


<div className="flex justify-center items-center mt-4">
<button
  href="#"
  className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-sky-600 text-white shadow hover:bg-sky-500 h-10 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
>
  <span
    className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
  ></span>
  <div className="flex items-center">
    <span className="ml-1 text-white text-lg">{isloading ? <BtnLoader />: "Submit"}</span>
  </div>
 
</button>
</div>

  </form>
</div>



  
    
  
    </div>
  </div>
  )
}

export default AddEmojisPage
