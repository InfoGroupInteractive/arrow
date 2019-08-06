import React from 'react'
import { connect } from 'react-redux'
import { Box, Layer, Text } from 'grommet';
import { Close, StatusGood, StatusWarning, StatusCritical, StatusInfo } from 'grommet-icons';


const mapStateToProps = (state)=>{
    return {
        toasts: state.toasts
    };
};

const STATUSES = {
    INFO: 'INFO',
    SUCCESS: 'SUCCESS',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
};

const GET_STATUS_COLOR = (status, statuses) => {
    switch (status) {
        case statuses.SUCCESS:
            return 'status-ok';
        case statuses.WARNING:
            return 'status-warning';
        case statuses.ERROR:
            return 'status-critical';
        default:
            return 'status-unknown';
    }
}

const GET_STATUS_TEXT = (status, statuses) => {
    switch (status) {
        case statuses.SUCCESS:
            return 'Complete';
        case statuses.WARNING:
            return 'Needs Attention';
        case statuses.ERROR:
            return 'Needs Attention';
        default:
            return 'FYI';
    }
}

function GET_STATUS_ICON (status, statuses) {
    switch (status) {
      case statuses.SUCCESS:
        return StatusGood;
      case statuses.WARNING:
        return StatusWarning;
      case statuses.ERROR:
        return StatusCritical;
      default:
        return StatusInfo;
    }
}


const Toast = ({
    toasts,
    position = 'top-right',
    margin = 'small',
    statuses = STATUSES,
    getStatusText = GET_STATUS_TEXT,
    getStatusIcon = GET_STATUS_ICON,
    getStatusColor = GET_STATUS_COLOR
}) => {
    if(toasts && Array.isArray(toasts) && toasts.length > 0){
        return (
            <ResponsiveContext.Consumer>
            {(size) => (
                <Layer modal={false} position={position}>
                    {toasts.map((toast) => {
                        const Icon = getStatusIcon(toast.status, statuses);
                        const color = getStatusColor(toast.status, statuses);

                        return (
                            <Box
                                margin={size === 'small' ? 'none' : margin}
                                key={toast.id}
                                background={{ light: 'white', dark: 'black' }}
                                border={{
                                    color: color,
                                    size: 'medium',
                                    side: 'left'
                                }}
                                pad='small'
                                elevation='xsmall'
                                round='xsmall'
                                direction='row'
                                align='center'
                                gap='small'>
                                <Icon color={color} size='medium' />
                                <Box flex direction='column'>
                                    <Text size='xsmall' weight='bold'>
                                        {getStatusText(toast.status, statuses)}
                                    </Text>
                                    <Text size='xsmall'>{toast.text}</Text>
                                </Box>
                                <Box margin={{ left: 'medium' }}>
                                    <Close
                                        color='dark-6'
                                        size='medium'
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
    };
}


// const Toast = ({ toasts, onClose, margin, position = 'top-right' }) => {
//     if(toasts && Array.isArray(toasts) && toasts.length > 0){
//         return (
//             <Layer modal={false} position={position} style={{background: 'transparent'}}>
//                 <Box gap='small' margin={margin} >
//                     {toasts.map((m) => (
//                         <Box
//                             key={m.id}
//                             background={ m.background || {light: 'light-2', dark: 'dark-2'}}
//                             pad='medium'
//                             elevation='xsmall'
//                             round='small'
//                             direction='row'
//                             justify='between'
//                             align='center'
//                             gap='medium'>
//                             <Text size='large'>{m.text}</Text>
//                             <Close onClick={()=>{onClose(m.id)}} />
//                         </Box>
//                     ))}
//                 </Box>

//             </Layer>
//         )
//     } else {
//         return null;
//     }
// };

// displayName needed for UI Automation
Toast.displayName = 'Toast';

export default connect(mapStateToProps)(Toast);