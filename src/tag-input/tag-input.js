import React, { Component } from 'react';
import { Box, Text, TextInput } from 'grommet';
import { Close } from 'grommet-icons';

class TagInput extends Component {
    render(){
        const {
            values,
            value,
            onRemoveValue,
            onAddValue,
            onValueChange,
            isInputDisabled,
            suggestions,
            type='text'
        } = this.props;

        return (
            <Box fill direction='row' border='all' round='xsmall' flex={true}>
                {Array.isArray(values) && values.length > 0 ? (
                    <Box
                        direction='row'
                        gap='xsmall'
                        margin={{ horizontal: 'xsmall' }}
                        style={{ maxWidth: '80%' }}
                        overflow='auto'>
                        {values.map((v) => {
                            return (
                                <Box
                                    direction='row'
                                    round='xsmall'
                                    pad='xxsmall'
                                    key={v}
                                    background='dark-3'
                                    flex={false}
                                    fill={false}
                                    gap='xsmall'
                                    alignSelf='center'
                                    align='center'>
                                    <Text size='xsmall'>{v}</Text>
                                    <Close
                                        size='xsmall'
                                        onClick={() => {
                                            onRemoveValue(v);
                                        }}
                                    />
                                </Box>
                            );
                        })}
                    </Box>
                ) : null}
                <Box fill flex={true}>
                    <TextInput
                        type={type}
                        disabled={isInputDisabled} //can only multi-select for =
                        plain={true}
                        value={value}
                        onChange={(e) => {
                            onValueChange(e.target.value);
                        }}
                        onSelect={(e) => {
                            if(this._blurTimeout){
                                clearTimeout(this._blurTimeout);
                                delete this._blueTimeout;
                            }
                            onAddValue(e.suggestion);
                        }}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter' && value !== '') {
                                onAddValue(value);
                            }
                        }}
                        onBlur={() => {
                            this._blurTimeout = setTimeout(()=>{
                                if (value !== '') {
                                    onAddValue(value);                               
                                }
                            }, 300);
                            //TODO: figure out the correct way to do this, so typed in values get selected when the user leaves
                            //but they DON'T get selected when the user starts typing, then selects a suggestion                        
                        }}
                        suggestions={suggestions}
                    />
                </Box>
            </Box>
        );
    }
}

export default TagInput;
