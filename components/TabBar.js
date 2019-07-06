import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'react-native-classnames'
import { StyleSheet } from 'react-native'

import TabBarNav from './TabBarNav';
import Block from './Block';

import { theme } from '../constants';

class TabBar extends Component {

    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
      }
    
    static defaultProps = {
        children: null,
        className: '',
    }

    state = {
        activeTab: null
    }

    componentDidMount() {
        const {children  = []} = this.props
        const activeTab = this.getChildrenLabels(children)[0]
        this.setActiveTab(activeTab) 
    }

    getChildrenLabels(children) {
        return children.map(({props}) => props.label)
    }

    setActiveTab(activeTab) {
        const {activeTab: currentTab} = this.state;
        if(currentTab !== activeTab) {
            this.setState({activeTab})
        }
    }

    renderTabs = () => {
        const  { children = [] } = this.props
        const { activeTab } = this.state

        return this.getChildrenLabels(children).map((navLabel) => (
            <TabBarNav
                key={navLabel}
                className= { classNames({active: activeTab === navLabel}) }
                onChangeActiveTab={this.setActiveTab}
            />
        ))
    }

    render() {
        const { activeTab } =  this.state;
        const { children, className, ...attrs } = this.props;

        const classes = cn(
            'tab-bar',
            className,
        );

        const OpaqueWrapper = ({ children }) => (
            children.map(children, child => (
                <Block>
                    {{ activeTab }}
                </Block>
             ))
        )         
        return (
            <Block className={classes} {...attrs}>
                <Block className="tab-bar-nav">{this.renderTabs}</Block>
                <Block>{OpaqueWrapper}</Block>
            </Block>
        )   
    }
  }

const styles = StyleSheet.create({
  badge: {
    height: theme.sizes.base,
    width: theme.sizes.base,
    borderRadius: theme.sizes.border,
  }
})

export default TabBar