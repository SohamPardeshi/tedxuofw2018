
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Section} from './section.jsx';
import {StyleSheet, css} from 'aphrodite';

export class LandingVideo extends React.Component {
    render() {
        const componentClasses = [styles.houdini];
        const show = this.props.show;
        
        if(show) { componentClasses.push(styles.show); }

        return (
            <div id="houdini-wrapper" className={css(componentClasses)}>
                <div className={css(styles.videoContent)}>
                    <div className={css(styles.videoOverlay)}></div>
                    <video className={css(styles.video)} id='tedvideo' poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/15309/sp-poster.jpg" autoPlay loop muted>
                        <source src="./app/resources/videos/seattle.webm" type="video/webm" />
                        <source src="./app/resources/videos/seattle.mp4" type="video/mp4" />
                    </video>
                    <div className={css(styles.textCopy)} >
                        <center><i onClick={this.props.close} className="fa fa-angle-down fa-2x" aria-hidden="true"></i></center>
                    </div>
                </div>
            </div>
        );    
    }
}

LandingVideo.propTypes = {
    show: PropTypes.bool.isRequired
};


const styles = StyleSheet.create({
    houdini: {
        width: '0',
        height: '0', 
        WebkitTransition: '0.5s',
        MozTransition: '0.5s',
        OTransition: '0.5s',
        transition:' 0.5s',
        opacity: '0',
        visibility: 'hidden',
    },
    show: {
        opacity: '1',
        visibility: 'visible',
        width: '100%',
        height: '100%',
    },
    videoContent : {
        position: 'relative',
        zIndex: '5',
    },
    videoOverlay: {
        top: '0%',
        left: '0%',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        position: 'absolute',
        zIndex: '2',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },

    video: {
        top: '0%',
        left: '0%',
        position: 'relative',
        minWidth: '100%', 
        minHeight: '100%',
        width: 'auto', 
        height: 'auto',
        objectFit: 'fill',
        zIndex: '1',
    },

    textCopy: {
        position: 'absolute',
        top: '75%',
        width: '100%',
        zIndex: '2',
        color: 'white'
    }

});
