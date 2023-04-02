import React, { FC } from 'react';

type Props = {
    name: string;
}

export const MovementTypePicture: FC<Props> = ({name}) => {
    return (
        <div>
            <img style={{width: "90px"}} src={`movement-types/${name}.svg`}/>
        </div>
    )
}