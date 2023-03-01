import FortuneButton from "./FortuneButton"

const FortuneBox = ({phrase, getNewValues, backgroundObject, imageObject}) => {
  return (
     
    <div className="fortuneBox">
<h1> Galleta de la Fortuna</h1>
<h2 style = {imageObject}> <span > <i className='bx bxs-quote-alt-left'></i> </span>  {phrase.phrase} <span > <i className='bx bxs-quote-alt-right'></i> </span> </h2>
<h3 style = {imageObject}>{phrase.author}</h3> <br />  

<section className="fortuneBox-footer">
<FortuneButton getNewValues={getNewValues} backgroundObject={backgroundObject}/>

</section>

    </div>
  )
}

export default FortuneBox