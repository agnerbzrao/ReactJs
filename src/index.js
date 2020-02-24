import ReacDom from 'react-dom'
import React from 'react'
//import Pr, {Seg, Ter } from './componentes/PriCompo'
//import Familia from './componentes/Familia'
//import Membro from './componentes/Membro'
//import Outro from './componentes/OutroCompo'
//import CompoComFunc from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'
const elemento = document.getElementById('root')

ReacDom.render(
    <React.Fragment>
        <Hook/>
        {/* <Contador num={10}/> */}
        {/* <Pai/> */}
        {/* <CompoComFunc/> */}
        {/* <Familia sobrenome=" Bezerra">
            <Membro nome="Agner">
            </Membro>
            <Membro nome="Vania">
            </Membro>
        </Familia> */}
        {/* <Outro sobrenome="Bezerra"></Outro> */}
    </React.Fragment>
    , elemento
)