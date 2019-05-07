import * as colors from './colors';

const font = {
    family: '"Open Sans", sans-serif',
    size: '14px',
    height: '16px',
};

const glowbal = {
    font: font,
    control: {
        border: {
            width: '1px',
            radius: '12px',
            color: 'border'
        }
    },
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
    xsmall: '6px',
    small: '12px',
    medium: '24px',
    large: '36px',
    xlarge: '48px',
    responsiveBreakpoint: 'small'
};

const button = {
    padding: {
        vertical: '0.6em',
        horizontal: '0.8em'
    },
    border: {
        radius: '12px',
        width: '1px'
    }

}

const text = {
    "xsmall": { "size": "10px", "height": "12px", "maxWidth": "288px" },
    "small": { "size": "12px", "height": "14px", "maxWidth": "336px" },
    "medium": { "size": "14px", "height": "16px", "maxWidth": "432px" },
    "large": { "size": "18px", "height": "21px", "maxWidth": "528px" },
    "xlarge": { "size": "26px", "height": "30px", "maxWidth": "624px" },
    "xxlarge": { "size": "32px", "height": "36px", "maxWidth": "816px" }
}

const textInput = {
    extend: () => {
      return {
        padding: '0.6em 0.8em'
      }
    }
}

const iconSize = {
    xxsmall: '12px',
    xsmall: '16px',
    small: '20px',
    medium: '24px',
    large: '30px',
    xlarge: '48px',
    xxlarge: '72px'
}

export const dark = {
    global: Object.assign({}, glowbal, {
        colors: colors.theme.dark,
        edgeSize
    }),
    anchor: Object.assign({}, anchor, {
        color: colors.light2
    }),
    icon: {
        color: colors.light3,
        size: iconSize
    },
    size,
    button,
    text,
    textInput
};

export const light = {
    global: Object.assign({}, glowbal, {
        colors: colors.theme.light,
        edgeSize
    }),
    anchor: Object.assign({}, anchor, {
        color: colors.dark1
    }),
    icon: {
        color: colors.dark4,
        size: iconSize
    },
    size,
    button,
    text,
    textInput,
    select: {
        container: {
            extend: ({theme}) => {
                console.log(theme.dark);
                return {
                    background: theme.dark ? `${colors.dark1} !important` : '#fff'
                }
            }
        }
    }
};

export const vapor = {
    global: Object.assign({}, glowbal, {
        colors: colors.theme.vapor,
        edgeSize
    }),
    anchor: Object.assign({}, anchor, {
        color: colors.dark1
    }),
    icon: {
        color: colors.dark4,
        size: iconSize
    },
    size,
    button,
    text,
    textInput
};