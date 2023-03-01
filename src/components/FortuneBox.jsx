import FortuneButton from "./FortuneButton"

const FortuneBox = ({phrase, getNewValues, backgroundObject, imageObject}) => {
  return (
    
    <div className="fortuneBox">
<h1 style = {imageObject}>{phrase.phrase}</h1>
<h3 style = {imageObject} >{phrase.author}</h3> <br />  


<section className="fortuneBox-footer">
<FortuneButton getNewValues={getNewValues} backgroundObject={backgroundObject}/>
<i style={imageObject} className='bx bxs-quote-alt-left'></i>
</section>

    </div>
  )
}

export default FortuneBox