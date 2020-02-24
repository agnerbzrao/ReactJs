import React from 'react'
import {filhoComProps} from '../util/util'
export default props=>
<div>
    <h1>Familia</h1>
    {/* {React.cloneElement(props.children, {...props})} */}
    {filhoComProps(props)}
</div>