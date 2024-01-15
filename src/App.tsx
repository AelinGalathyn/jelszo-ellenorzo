import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Hibauzenet } from './HibauzenetProps'
import './App.css'
import { HibauzenetProps } from './HibauzenetProps'

function App() {

  const [password, setPassword] = useState('');
  const regex = /^[a-zA-Z]+$/

  return <div>
    <header>
      <h1>Jelszó ellenőrző</h1>
      <h3>Mennyire biztonságos a jelszó?</h3>
    </header>
    <main>
      <div>
        <label>Jelszó: </label>
        <input type="password" onInput={e => { setPassword(e.currentTarget.value) }} />
      </div>
      <Hibauzenet hibauzenetek={password.length < 8 ? 'gyenge' : ''}
        sulyos={0} />
      <Hibauzenet hibauzenetek={password.length >= 8 && regex.test(password) ? 'közepes' : ''}
        sulyos={1} />
      <Hibauzenet hibauzenetek={password.length >= 8 && !regex.test(password) ? 'erős' : ''}
        sulyos={2} />
    </main>
  </div>
}

export default App
