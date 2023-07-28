

import { useState } from 'react'
import { Accordion } from './components/Accordion'

function App() {
  const [ contentList, setContentList ] = useState([
    'pato',
    'galinha',
    'galinha',
    'vaca'
  ])

  const title = 'Titulo genérico apenas para preencher'

  return (
    <>
      <Accordion content={contentList} title={title} backgroundColor='#888888' />
    </>
  )
}

export default App
