
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState('')

  const [length, setLength] = useState(8);

  const [ isCharacterAdded, setIsCharacterAdded] = useState(false)
  const [ isNumberAdded, setIsNumberAdded] = useState(false)

  useEffect( () => {

    let content = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (isNumberAdded) {
      content += '1234567890'
    }
    if (isCharacterAdded) {
      content += '!@#$%^&*$?.,%`'
    }


    let pass =""

    for ( let i = 0; i <= length - 1; i++){

      const random = Math.floor(Math.random() * content.length);

      console.log(content.charAt(random));

      pass += content.charAt(random)

    }

    console.log(pass);

    setPassword(pass)

  },[length,isCharacterAdded,isNumberAdded,isNumberAdded])


  const handleCopyToClipboard = () => {

    
  }

  

  return (
    <>
    <section id='Container' className=' bg-gray-700 max-w-xl mx-auto my-16 py-9 rounded-md'>
    <h1 className=' text-center text-2xl font-semibold text-white'>Password Generator</h1>

{/* password input field container  */}
    <div className=' w-full mt-6 flex items-center justify-center
    gap-4'>
      <input type="text"
      readOnly
      className=' w-96 px-4 rounded-md py-2'
      placeholder='Password'
      value={password}

      />

      <button className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-8 py-2.5 text-center' onClick={handleCopyToClipboard}>Copy</button>

    </div>

    <div className=' px-9 mt-6 flex items-center gap-8'>

      <div className=' flex items-center gap-2'>
        <input type="range"
        min={2}
        max={20}
        value={length}
        onChange={  (e) => setLength(e.target.value) }
        />
        <label htmlFor="" className=' text-white font-bold'>Length: {length}</label>
      </div>

      <div className='flex items-center gap-2'>
        <input type="checkbox" name="" id="" defaultChecked={isNumberAdded} onChange={ () => setIsNumberAdded(!isNumberAdded)}/>
        <label htmlFor="" className='text-white font-bold'>Number</label>
      </div>
      <div className='flex items-center gap-2'>
        <input type="checkbox" name="" id="" defaultChecked={isCharacterAdded} onChange={ () => setIsCharacterAdded(!isCharacterAdded)} />
        <label htmlFor="" className='text-white font-bold'>Character</label>
      </div>
    </div>

    
    </section>
    </>
  )
}

export default App
