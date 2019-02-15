import React, { memo } from 'react';
import { Box, Text, TextInput } from 'grommet';
import { Close } from 'grommet-icons';

const TagInput = memo(({
    values,
    value,
    onRemoveValue,
    onAddValue,
    onValueChange,
    isInputDisabled,
    suggestions
}) => {
    return (
        <Box fill direction='row' border='all' round='xsmall'>
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
                                <Text size='small'>{v}</Text>
                                <Close
                                    size='small'
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
                    disabled={isInputDisabled} //can only multi-select for =
                    plain={true}
                    value={value}
                    onChange={(e) => {
                        onValueChange(e.target.value);
                    }}
                    onSelect={(e) => {
                        onAddValue(e.suggestion);
                    }}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter' && value !== '') {
                            onAddValue(value);
                        }
                    }}
                    onBlur={() => {
                        //TODO: figure out the correct way to do this, so typed in values get selected when the user leaves
                        //but they DON'T get selected when the user starts typing, then selects a suggestion
                        //if (clause.value !== '') {
                        //    const newValues = [...clause.values];
                        //    newValues.push(clause.value);
                        //    onClauseChange(clause, {
                        //        values: newValues,
                        //        value: '' //clear out value input
                        //    });
                        //}
                    }}
                    suggestions={suggestions}
                />
            </Box>
        </Box>
    );
});

TagInput.displayName = 'TagInput';
export default TagInput;
