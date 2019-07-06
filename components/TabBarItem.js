import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'react-native-classnames'
import { StyleSheet } from 'react-native'

import Block from './Block';
import { theme } from '../constants';

  const TabBarItem = ({
      children, label, activeTab, ...attrs
  }) => {
      
      const classes = cn(
          'tab-bar-item',
          { active: activeTab === label }
      )
      return (
        <Block className={classes} {... attrs}>
          {children}
        </Block>
      ) 
  }

  TabBarItem.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node,
    activeTab: PropTypes.string,
  }

  TabBarItem.defaultProps = {
    children: null,
    activeTab: '',
  }


const styles = StyleSheet.create({
  badge: {
    height: theme.sizes.base,
    width: theme.sizes.base,
    borderRadius: theme.sizes.border,
  }
})

export default TabBarItem