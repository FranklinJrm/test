import FortuneBox from "./components/FortuneBox"
import frases from "./Phrases/phrases.json"
import imagen from "./Phrases/image.js"
import { useState } from "react"

function App() {



  const arrayRandomElement = (array) => {
    const randomIndex = Math.floor(array.length*Math.random())
    return array[randomIndex]
  }
  
  
  const [phrase, setPhrase] = useState(arrayRandomElement(frases))
  const [images, setImage] = useState(arrayRandomElement(imagen))


  const getNewValues = () =>{
    const newPhrase = arrayRandomElement(frases)
    const newImage =arrayRandomElement(imagen)
    setImage(newImage)
    setPhrase(newPhrase)

  }

  const backgroundObject = {
    backgroundColor: images
  }

  const imageObject = {
    image: images
  }


  return (
    <div className="App" style={backgroundObject}>
      <FortuneBox 
      phrase = {phrase} 
      getNewValues={getNewValues}
      backgroundObject={backgroundObject}
      imageObject={imageObject}
      />
    </div>
  )
}

export default App
