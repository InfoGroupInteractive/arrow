import React from 'react'
import { connect } from 'react-redux'
import { Box, Layer, Text } from 'grommet';
import { Close } from 'grommet-icons';



const mapStateToProps = (state)=>{
    return {
        toasts: state.toasts
    };
};


const Toast = ({ toasts, onClose }) => {
    if(toasts && Array.isArray(toasts) && toasts.length > 0){
        let toastItems = toasts.map(m=>(
            <Box 
                key={m.id}
                background={ m.background || 'accent-1'}
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
        ));
        return (
            <Layer modal={false} position='bottom' style={{background: 'transparent'}}>
                <Box gap='small' margin={{bottom:'small'}} >
                    {toastItems}
                </Box>
                
            </Layer>
        )
    } else {
        return null;
    }    
};

export default connect(mapStateToProps)(Toast);