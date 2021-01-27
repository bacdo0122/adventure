import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn-primary', 'btn-outline'];
const SIZES = ['btn-medium', 'btn-large'];
export default function Button({children,type,ButtonStyle,ButtonSize}) {
    const checkButtonStyle = STYLES.includes(ButtonStyle)? ButtonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(ButtonSize)? ButtonSize : SIZES[0];
    return (
        <Link to="/sign-up" className="btn-mobie">
        <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
        >{children}</button>
        </Link>
    )
}
