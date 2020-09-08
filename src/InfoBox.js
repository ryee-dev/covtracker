import React from 'react'
import {Card, CardContent, Typography} from "@material-ui/core"
import "./InfoBox.css"

function InfoBox({title, isRed, cases, active, total, country, ...props }) {
    return (
        <Card onClick = {props.onClick} className = {`infobox ${active && 'infobox--selected'} ${isRed && 'infobox--red'}`}>
            <CardContent>
                {/* Title */}
                <Typography color = "textSecondary" className="infobox__title">{title}</Typography>
                {/* Cases */} 
                <h2 className = {`infobox ${!isRed && "infobox__cases--green"}`}>{cases}</h2>
                {/* Total */}
                <Typography className = "infobox__total" color = "textSecondary">{total} total</Typography>
              
            </CardContent>
        </Card>
    )
}

export default InfoBox
