import './App.css'
import Card from './components/card'

function App() {
  let myObject = {
    username: "Sam",
    btnText: "Next"
  }

  return (
    <>
      <div className='flex'>
        <h1 className='bg-white text-black p-[15px] rounded-[10px] m-[10px]'>Taiwind</h1>
        <Card values={myObject} />
        <Card />
      </div>
    </>
  )
}

export default App
