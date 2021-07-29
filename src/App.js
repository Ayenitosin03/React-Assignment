import Tosin from './Tosin'
import Complexion from './Complexion'
import './App.css'
import Picture from './Picture'
import Hobbies from './Hobbies'
import Aspiration from './Aspiration'
import Biography from './Biography'
import InitialName from './InitialName'
import Random from './Random'
const App = () => {
  return (
    <div>
      <h1 className="hello"><i> Hello World, Welcome To My Coding Exercise.</i></h1>
      <Tosin/>
      <Complexion/>
      <Picture/>
      <Hobbies/>
      <Aspiration/>
      <Biography/>
      <InitialName/>
      <Random/>
      <h1 className="hello">The End </h1>
    </div>
  )
}

export default App;