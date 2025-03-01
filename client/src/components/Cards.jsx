import Card from "./Card"


const Cards = ({emojis}) => {
  
  return (
    <div className="my-8 flex items-center justify-center gap-4 flex-wrap ">
       {
        emojis.map((emoji,index ) => {
            return <Card key={index} emoji={emoji.emoji} />
        })
       }
    </div>
  )
}

export default Cards
