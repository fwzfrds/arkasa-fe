import React, { Component } from 'react'
import styles from './Logo.module.css'
import { useNavigate } from 'react-router-dom'

export class LogoBrand extends Component {

    render() {
        return (
            <div className={`${styles.logo_brand}`}
                onClick={() => this.props.navigate('/')}
            >
                <svg width="50" height="35" viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.29307 32.9371C6.78369 33.6656 7.47274 34.0788 8.19382 34.0777L18.3921 34.0586C19.1969 34.0571 19.9901 33.7973 20.7076 33.3003L43.4385 17.576C45.5275 16.1308 47.4001 14.068 48.6743 11.3661C50.1047 8.3331 50.2602 6.1382 49.6954 4.5876C49.1321 3.03594 47.7626 1.89642 45.1447 1.66425C42.8127 1.45765 40.4932 2.29472 38.4042 3.73882L30.7082 9.06261L13.6226 0.323454C13.4172 0.134803 13.1785 0.0243769 12.9313 0.00359444C12.6841 -0.017188 12.4373 0.052427 12.2164 0.205242L7.07978 3.75905C6.2462 4.3352 6.04464 5.85172 6.67588 6.79742L18.8803 17.2448L10.8172 22.8231L5.16497 18.9392C4.97023 18.8053 4.75514 18.7358 4.53706 18.7361C4.31898 18.7365 4.10401 18.8068 3.90952 18.9413L0.774426 21.1106C-0.0411833 21.6751 -0.256023 23.1469 0.339278 24.1011L6.29307 32.9371Z" fill="#2395FF" />
                </svg>
                <h3>Ankasa</h3>
            </div >
        )
    }
}

export function LogoWithRouter(props) {
    const navigate = useNavigate()
    return (<LogoBrand navigate={navigate}></LogoBrand>)
}

export default LogoBrand