import React, { useState } from 'react';

const InputBar = () => {
    const [value, setValue] = useState('');


    return(
    <form>
        <i class="fas fa-search me-2"></i>
        <input placeholder='search' type='text' onChange={(e) => e.target.value}></input>
    </form>
    )
}

export default InputBar