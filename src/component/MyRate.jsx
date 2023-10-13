import React from 'react'
import { useState } from 'react';
import { Rate } from 'antd';


function MyRate({ranking}) {
    const [value, setValue] = useState(ranking);

    return (
        <span>
            <Rate onChange={setValue} value={ranking} />
            {value ? <span className="ant-rate-text"></span> : ''}
        </span>
    )
}

export default MyRate

