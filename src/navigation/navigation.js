import React from 'react';
import { Box, Menu, ThemeContext } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';


export default function Navigation(props) {
    const { navigationItems, onClick } = props;

    const items = navigationItems.map((navItem) => ({
        onClick: () => onClick(navItem),
        label: navItem.label
    }));

    return (
        <ThemeContext.Consumer>
            {(theme) => (
                <Menu
                    icon={
                        <Box pad='xsmall' border='all' round='full'>
                            <MenuIcon />
                        </Box>
                    }
                    items={items}
                    dropAlign={{ top: 'bottom' }}
                    dropBackground={theme.dark ? 'dark-2' : 'light-1'}
                />
            )}
        </ThemeContext.Consumer>
    );
}
