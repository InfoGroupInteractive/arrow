import React, { Component, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Grommet, Box } from 'grommet';
import * as themes from './theme/theme'
import ErrorBoundary from './error-boundary/error-boundary';
import Toast from './toast/toast';
import Navigation from './navigation/navigation';
import Loader from './loader/loader';
import store from './store';





class ArrowApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedTheme: store.getState().selectedTheme
    };

    const unsubscribe = store.subscribe(()=>{
      const newState = store.getState();
      if(newState.selectedTheme && newState.selectedTheme !== this.state.selectedTheme){
        this.setState({selectedTheme: newState.selectedTheme});
      }
    });    
  }
  render() {
    const { navItems, onNavItemClick } = this.props;
    const { selectedTheme } = this.state;
    
    return (
      <Grommet full theme={themes[selectedTheme]}>
        <ErrorBoundary>
          <Box direction='column' flex fill>
            {!window.embeddedArrow ? <Box
                tag='header'
                justify='between'
                direction='row'
                align='center'
                border='bottom'>
                <Box tag='nav' direction='row' align='center'>
                    <Navigation navigationItems={navItems} onClick={onNavItemClick} />
                </Box>
            </Box> : null }
            <Suspense fallback={<Loader />} maxDuration={300}>
              {this.props.children}
            </Suspense>
            <Provider store={store}>
                <Toast />
            </Provider>
          </Box>          
        </ErrorBoundary>
      </Grommet>
    );
  }
}

export default ArrowApp;

