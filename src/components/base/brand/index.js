import React, { Component } from 'react'
import styles from './Brand.module.css'
import { LogoWithRouter } from '../logo'

export class Brand extends Component {
    render() {
        return (
            <div className={`${styles.brand}`}>
                {/* <LogoBrand /> */}
                <LogoWithRouter />
                <p>Find your Flight and explore the world with us. We will take care of the rest</p>
            </div>
        )
    }
}

export default Brand