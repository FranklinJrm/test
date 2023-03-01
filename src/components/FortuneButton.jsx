const FortuneButton=({getNewValues, backgroundObject}) => {


    return (
      <button onClick={getNewValues} style = {backgroundObject}>
            
    <p>Probar Suerte</p>
      </button>
    )
  
  }
  export default FortuneButton