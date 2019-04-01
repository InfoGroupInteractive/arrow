import Color from 'color';

export const alpha = (color, percentage) => {
    return Color(color).alpha(percentage);
}

/**
 *
 * determines if seed color is light or dark and returns a contrasting color
 * @export
 * @param {string} color
 * @param {number} [ratio=3]
 * @returns string
 */
export const getContrastingColor = (color) => {
    const c = Color(color);
    let contrast = 0;

    if (c.isLight()) {
        contrast = c.contrast(Color('black'));
        return c.darken(contrast);
    } else {
        contrast = c.contrast(Color('white'));
        return c.lighten(contrast);
    }
};