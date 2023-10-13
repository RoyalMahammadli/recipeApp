import React from 'react'
import { useState } from 'react';
import { Rate } from 'antd';


function MyRate({ranking}) {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [value, setValue] = useState(ranking);

    return (
        <span>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
        </span>
    )
}

export default MyRate

