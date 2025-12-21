import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef
  let passwordRef = useRef(null)

  // useCallback
  const passwordGenerator = useCallback(() => {
    let pass = ""

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%^&*_-+=.?"

    for (let i = 1; i <= length; i++) {
      pass += str[Math.floor(Math.random() * str.length)]
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyToClip = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useEffect
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-[35%] bg-gray-600 m-auto my-10 text-white rounded p-3 font-bold font-mono'>

        <h1 className='w-full text-center pb-2'>Password Generator</h1>

        <div className='mb-2 bg-gray-400 text-white rounded font-bold font-mono flex justify-between truncate'>
          <input
            type="text"
            value={password}
            className="outline-none py-1 px-3 flex-1"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />

          <button
            onClick={copyToClip}
            className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'
          >copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>

          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            id='lenRange'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label htmlFor='lenRange'>Length: {length}</label>

          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>

          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>

        </div>
      </div>
    </>
  )
}

export default App
