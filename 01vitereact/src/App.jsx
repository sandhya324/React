import './App.css'
import Learn from './learn.jsx'

function App() {

  const username = "John Doe"
  
  return (
    <> // React Fragement
      <Learn/>
      <h4>Learning react to build modern web applications ! {username} </h4> //{username} this is called expression , evaluated expression means final outcome.
      <p>test paragraph</p>
    </>
  )
}

export default App