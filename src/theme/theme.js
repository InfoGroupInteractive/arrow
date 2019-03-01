import * as colors from './colors';

const font = {
    family: '"Open Sans", sans-serif',
    size: '14px',
    height: '18px',
};

const glowbal = {
    font: font,
    control: {
        border: {
            width: '1px',
            radius: '9px',
            color: 'border'
        }
    },
    input: {
        weight: 400,
        padding: '8px'
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
    xsmall: '6px',
    small: '9px',
    medium: '18px',
    large: '36px',
    xlarge: '72px',
    responsiveBreakpoint: 'small'
};

const button = {
    padding: {
        vertical: '9px',
        horizontal: '18px'
    },
    border: {
        radius: '9px'
    }

}

const text = {
    "xsmall": { "size": "12px", "height": "16px", "maxWidth": "288px" },
    "small": { "size": "13px", "height": "17px", "maxWidth": "336px" },
    "medium": { "size": "14px", "height": "18px", "maxWidth": "432px" },
    "large": { "size": "16px", "height": "20px", "maxWidth": "528px" },
    "xlarge": { "size": "18px", "height": "22px", "maxWidth": "624px" },
    "xxlarge": { "size": "22px", "height": "26px", "maxWidth": "816px" }
}

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
    size,
    button,
    text
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
    size,
    button,
    text
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
    size,
    button,
    text
};