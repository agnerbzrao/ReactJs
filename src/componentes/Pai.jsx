import React from 'react'
import Filho from './Filho'
export default props => {
    const funcaoAlert = lugar => alert(`Saida para ${lugar} liberada`)

  return <Filho notificar={funcaoAlert}/>        
}