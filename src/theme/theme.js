import * as colors from './colors';

const font = {
    family: '"Open Sans", sans-serif'
};

const glowbal = {
    font: font,
    input: {
        weight: 400
    },
    breakpoints: {
        medium: {
            value: 1200
        }
    }
};

const anchor = {
    fontWeight: 400
};

const size = {
    xxsmall: '48px',
    xsmall: '96px',
    small: '192px',
    medium: '384px',
    large: '576px',
    xlarge: '768px',
    xxlarge: '1152px',
    full: '100%'
};

const edgeSize = {
    none: '0px',
    hair: '1px',
    xxsmall: '3px',
    xsmall: '18px',
    small: '12px',
    medium: '24px',
    large: '48px',
    xlarge: '96px',
    responsiveBreakpoint: 'small'
};

export const dark = {
    global: Object.assign({}, glowbal, {
        colors: colors.theme.dark
    }),
    anchor: Object.assign({}, anchor, {
        color: colors.light2
    }),
    edgeSize,
    icon: {
        color: colors.light3
    },
    size
};

export const light = {
    global: Object.assign({}, glowbal, {
        colors: colors.theme.light
    }),
    anchor: Object.assign({}, anchor, {
        color: colors.dark1
    }),
    edgeSize,
    icon: {
        color: colors.dark4
    },
    size
};

export const vapor = {
    global: Object.assign({}, glowbal, {
        colors: colors.theme.vapor
    }),
    anchor: Object.assign({}, anchor, {
        color: colors.dark1
    }),
    edgeSize,
    icon: {
        color: colors.dark4
    },
    size
};