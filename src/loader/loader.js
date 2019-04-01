import React from 'react';
import { ThemeContext } from 'grommet';
import './loader.scss';
import { alpha } from '../utils/color-utils';

const spin = keyframes`
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }`;

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
            const loaderSize = theme.icon[size];
            const loaderColor = theme.global.colors[color];
            const loaderBaseColor = alpha(loaderColor, 0.25);
            return (
                <div
                    style={{
                        borderRadius: '50%',
                        width: loaderSize,
                        height: loaderSize,
                        border: `${loaderSize/10}px solid ${base-color}`,
                        borderTopColor: loaderBaseColor,
                        animation: `${spin} 800ms infinite ease`
                    }}
                ></div>
            )
        }}
        </ThemeContext.Consumer>
    )
}