import React, { FC } from 'react';

type Props = {
    name: string;
}

export const TypePicture: FC<Props> = ({name}) => {
    return (
        <div>
            <img style={{width: "100px"}} src={`types/${name}.svg`}/>
        </div>
    )
}