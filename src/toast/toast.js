import React from 'react'
import { connect } from 'react-redux'
import { Box, Layer, Text, ResponsiveContext } from 'grommet';
import { Close } from 'grommet-icons';

import * as constants from '../status/status.constants';
import * as utils from '../status/status.utils';


const mapStateToProps = (state)=>{
    return {
        toasts: state.toasts
    };
};

const STYLE = {
    background: 'transparent'
}

const MOBILE_STYLE = {
    position: 'fixed',
    right: 'unset',
    height: 'auto',
    width: 'auto',
    ...STYLE
}

const Toast = ({
    toasts,
    onClose,
    position = 'top-right',
    margin = 'xsmall',
    statuses = constants,
    getStatusText = utils.getStatusText,
    getStatusIcon = utils.getStatusIcon,
    getStatusColor = utils.getStatusColor,
    style = STYLE,
    mobileStyle = MOBILE_STYLE
}) => {
    if(toasts && Array.isArray(toasts) && toasts.length > 0){
        return (
            <ResponsiveContext.Consumer>
            {(size) => (
                <Layer modal={false} position={position} style={size !== 'small' ? style : mobileStyle}>
                    {toasts.map((toast) => {
                        const Icon = getStatusIcon(toast.status, statuses);
                        const color = getStatusColor(toast.status, statuses);

                        return (
                            <Box
                                margin={margin}
                                key={toast.id}
                                background={{ light: 'light-1', dark: 'dark-2' }}
                                border={{
                                    color: color,
                                    size: 'medium',
                                    side: 'left'
                                }}
                                pad='small'
                                elevation='medium'
                                round='xsmall'
                                direction='row'
                                align='center'
                                gap='small'>
                                <Icon color={color} size='medium' />
                                <Box flex direction='column'>
                                    <Text size='small' weight='bold'>
                                        {getStatusText(toast.status, statuses)}
                                    </Text>
                                    <Text size='small'>{toast.text}</Text>
                                </Box>
                                <Box margin={{ left: 'medium' }}>
                                    <Close
                                        color='light-5'
                                        size='small'
                                        onClick={() => {onClose(toast.id)}}
                                        cursor='pointer'
                                    />
                                </Box>
                            </Box>
                        )
                    })}
                </Layer>
            )}
            </ResponsiveContext.Consumer>
        );
    }

    return null;
};


// displayName needed for UI Automation
Toast.displayName = 'Toast';
export default connect(mapStateToProps)(Toast);