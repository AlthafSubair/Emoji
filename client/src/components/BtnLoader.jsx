

const BtnLoader = () => {
  return (

<div className="flex items-center justify-center min-h-screen">
  <div className="relative">
    <div className="relative w-4 h-4">
      <div
        className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-red-600 border-b-red-border-r-red-600 animate-spin"
        style={{ animationDuration: "3s" }}
      ></div>

      <div
        className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-[#0ff] animate-spin"
        style={{ animationDuration: "2s", animationDirection: "reverse" }}
      ></div>
    </div>

    <div
      className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm"
    ></div>
  </div>
</div>


  )
}

export default BtnLoader
