import React from 'react';
import { ThemeContext } from 'grommet';
import { alpha } from '../utils/color-utils';

import './loader.scss';

export default ({size = 'medium', color = 'brand'}) => {
    return (
        <ThemeContext.Consumer>
        {(theme) => {
            const loaderSize = theme ? theme.icon.size[size] : '24px';
            const loaderColor = theme ? theme.global.colors[color] : '#000';
            const loaderBaseColor = alpha(loaderColor, 0.25);

            return (
                <div
                    className='loader'
                    style={{
                        borderRadius: '50%',
                        width: loaderSize,
                        height: loaderSize,
                        borderWidth: `${loaderSize/10}px`,
                        borderStyle: 'solid',
                        borderRightColor: loaderBaseColor,
                        borderLeftColor: loaderBaseColor,
                        borderBottomColor: loaderBaseColor,
                        borderTopColor: loaderColor
                    }}
                ></div>
            )
        }}
        </ThemeContext.Consumer>
    )
}