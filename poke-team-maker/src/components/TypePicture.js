import React from 'react';

type Props = {
    name: string;
}

export const TypePicture = ({name}) => {
    return (
        <div>
            <img style={{width: "100px"}} src={`types/${name}.svg`}/>
        </div>
    )
}