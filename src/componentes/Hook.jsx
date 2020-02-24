import React, {useState,useEffect} from 'react';

export default props => {
    const [contador, setContador] = useState(10)
    const [parImpar, setParImpar] = useState('Par')

    useEffect (()=>{
        contador % 2 == 0 ? setParImpar('Par') : setParImpar('Impar')
    })
    return (
        <div>
            <h1>{contador}</h1>
            <h3>{parImpar}</h3>
            <button 
                onClick={() => setContador(contador +1)}>
                Inc
            </button>
            <button 
                onClick={() => setContador(contador -1)}>
                Inc
            </button>
        </div>
    )
}

