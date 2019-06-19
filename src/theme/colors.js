export const brand = '#54B948';
export const accent1 = '#ECE64A';
export const accent1Alt = '#D5DD48';
export const accent2 = '#08B0BC';
export const accent2Alt = '#28C0D2';
export const accent3 = '#F28049';
export const accent3Alt = '#F4985F';
export const accent4 = '#6A66AA';
export const accent4Alt = '#807AB9';
export const dark1 = '#231F20';
export const dark2 = '#303234';
export const dark3 = '#434445';
export const dark4 = '#58595B';
export const dark5 = '#6D6E71';
export const dark6 = '#7E8082';
export const light1 = '#F6F6F6';
export const light2 = '#E4E6E8';
export const light3 = '#D0D2D4';
export const light4 = '#BCBEC0';
export const light5 = '#A7A9AC';
export const light6 = '#939598';
export const error = '#EB3C3C';
export const warning = '#FFBB22';
export const success = '#329B46';

const light = {
    brand: brand,
    control: brand,
    focus: accent1,
    placeholder: light5,
    border: light3,
    text: {
        light: dark1
    },
    'accent-1': accent1,
    'accent-2': accent2,
    'accent-3': accent3,
    'accent-4': accent4,
    'dark-1': dark1,
    'dark-2': dark2,
    'dark-3': dark3,
    'dark-4': dark4,
    'dark-5': dark5,
    'dark-6': dark6,
    'light-1': light1,
    'light-2': light2,
    'light-3': light3,
    'light-4': light4,
    'light-5': light5,
    'light-6': light6,
    'status-critical': error,
    'status-error': error,
    'status-warning': warning,
    'status-ok': success,
    'status-unknown': light2,
    'status-disabled': light6
};

const dark = Object.assign({}, light, {
    background: dark1,
    focus: accent1Alt,
    border: dark3,
    text: {
        dark: light3
    },
    'accent-1': accent1Alt,
    'accent-2': accent2Alt,
    'accent-3': accent3Alt,
    'accent-4': accent4Alt,
    'status-unknown': dark2,
});

const vapor = Object.assign({}, light, {
    brand: '#FF71CE',
    'accent-1': '#B967FF',
    'accent-1-alt': '#D5DD48',
    'accent-2': '#01CDFE',
    'accent-2-alt': '#28C0D2',
    'accent-3': '#05FFA1',
    'accent-3-alt': '#F4985F',
    'accent-4': '#FFFB96',
    'accent-4-alt': '#807AB9',
    'dark-1': '#FF71CE',
    'dark-2': '#B967FF',
    'dark-3': '#01CDFE',
    'dark-4': '#05FFA1',
    'dark-5': '#FFFB96',
    'dark-6': '#103',
    'light-1': '#FF71CE',
    'light-2': '#B967FF',
    'light-3': '#01CDFE',
    'light-4': '#05FFA1',
    'light-5': '#FFFB96',
    'light-6': '#336',
    'status-critical': '#EB3C3C',
    'status-error': '#EB3C3C',
    'status-warning': '#F7E463',
    'status-ok':  '#329B46'
});

export const theme = {
    light,
    dark,
    vapor
};
