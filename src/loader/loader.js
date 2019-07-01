import React from 'react';
import { ThemeContext, Box } from 'grommet';
import { alpha } from '../utils/color-utils';

import './loader.scss';

const Loader = ({size = 'medium', color = 'brand'}) => {
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

export const LoaderCentered = (props) => (
    <Box fill flex justify='center' align='center'>
        <Loader {...props} />
    </Box>
);

export const LoaderOverlay = (props) => (
    <Box
        fill
        flex
        justify='center'
        align='center'
        background={{
            color: {'dark': 'dark-2', 'light': 'light-2'},
            opacity: 'strong'
        }}
        style={{
            display: 'fixed',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
        }}>
        <Loader {...props} />
    </Box>
);

export default Loader
