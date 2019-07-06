import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'react-native-classnames'
import { StyleSheet } from 'react-native'

import Button from './Button';
import { theme } from '../constants';

  const TabBarNav = ({
      navLabel, className, onChangeActiveTab,
  }) => {
      
      const classes = cn(
          'nav-item',
            className,
        )
      return (
        <Button 
            className={classes}
            onClick={() => { onChangeActiveTab(navLabel); }}
        >
          {navLabel}
        </Button>
      ) 
  }

  TabBarNav.propTypes = {
    navLabel: PropTypes.string,
    className: PropTypes.string,
    onChangeActiveTab: PropTypes.func,
  }

  TabBarNav.defaultProps = {
    navLabel: 'Tab',
    className: '',
    onChangeActiveTab: () => {}
  }


const styles = StyleSheet.create({
  badge: {
    height: theme.sizes.base,
    width: theme.sizes.base,
    borderRadius: theme.sizes.border,
  }
})

export default TabBarNav