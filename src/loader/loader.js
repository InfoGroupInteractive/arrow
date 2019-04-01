import React from 'react';
import { ThemeContext } from 'grommet';
import { alpha } from '../utils/color-utils';
import './loader.scss';

export default ({size, color='brand'}) => {
    return (
        // border-radius: 50%;
        // width: $size;
        // height: $size;
        // border: $border-size solid $base-color;
        // border-top-color: $color;
        // animation: spin $spin-duration infinite ease;
        <ThemeContext.Consumer>
        {(theme) => {
            const loaderSize = theme.icon.size[size];
            const loaderColor = theme.global.colors[color];
            const loaderBaseColor = alpha(loaderColor, 0.25);
            
            return (
                <div
                    className='loader'
                    style={{
                        borderRadius: '50%',
                        width: loaderSize,
                        height: loaderSize,
                        border: `${loaderSize/10}px solid ${loaderBaseColor}`,
                        borderTopColor: loaderColor
                    }}
                ></div>
            )
        }}
        </ThemeContext.Consumer>
    )
}