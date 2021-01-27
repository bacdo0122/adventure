import React from 'react'
import { Link } from 'react-router-dom'
import './CardItem.css'
export default function CardItem({props}) {
    return (
        <>
            <div className="cards-item">
                <div className="img-item">
                <Link to={props.onClick} ><img src={props.src} alt={props.name} className="cards-link" /></Link>
                <div className="lable">{props.name}</div>
                </div>
                <p className="cards-info">{props.info}</p>
              
            </div>
        </>
    )
}
