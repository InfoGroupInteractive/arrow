import React from 'react'
import { connect } from 'react-redux'
import { Box, Layer, Text } from 'grommet';
import { Close } from 'grommet-icons';



const mapStateToProps = (state)=>{
    return {
        toasts: state.toasts
    };
};


const Toast = ({ toasts, onClose, margin, position = 'top-right' }) => {
    if(toasts && Array.isArray(toasts) && toasts.length > 0){
        return (
            <Layer modal={false} position={position} style={{background: 'transparent'}}>
                <Box gap='small' margin={margin} >
                    {toasts.map((m) => (
                        <Box
                            key={m.id}
                            background={ m.background || {light: 'light-2', dark: 'dark-2'}}
                            pad='medium'
                            elevation='xsmall'
                            round='small'
                            direction='row'
                            justify='between'
                            align='center'
                            gap='medium'>
                            <Text size='large'>{m.text}</Text>
                            <Close onClick={()=>{onClose(m.id)}} />
                        </Box>
                    ))}
                </Box>

            </Layer>
        )
    } else {
        return null;
    }    
};

export default connect(mapStateToProps)(Toast);