import { useState } from 'react'

// Write your Color component here


const Color = ({color, setSelectedColor}) => {
  return (
    <div 
      className={color} 
      onClick={() => setSelectedColor(color)} 
     ></div>
  )
}


// const Color = ({color, setSelectedColor}) => { //<change the props to be
 
//   return <div className={props.color}></div> //add in the "red" - props.color
  
// }

//const [selectedColor, setSelectedColor] = useState("")

// const Picker = () => {  < not this
//   return(
//     <div id="colors-list">
//     <Color />
//     <Color />
//     <Color />
//    </div>

//   )
// }

// function Color ({#eb6b56, #462446, #1d4fda}) {
//   retu
// }



const App = () => {
  const [selectedColor, setSelectedColor] = useState("") //< added this here
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
        {/* <div className="red">red</div> */}
      </div>


      <div id="colors-list">{/* colors go here */}
      <Color color='orange' setSelectedColor={setSelectedColor}/>
      <Color color='violet' setSelectedColor={setSelectedColor}/>
      <Color color='blue'   setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};





export default App;
