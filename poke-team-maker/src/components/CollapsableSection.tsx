import React, { FC } from 'react';
import {collapsableSection, arrowIcon} from './styles/styles';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type Props = {
    text: string;
    open: boolean;
    onClick: () => void;
  };

export const CollapsableSection: FC<Props> = ({text, open, onClick}) => {
    return (
        <div style={collapsableSection} onClick={onClick}>
            <span>{text}</span>
            { open ? <ArrowDropDownIcon sx={arrowIcon}/> : <ArrowRightIcon sx={arrowIcon}/>}
        </div>
    )
}