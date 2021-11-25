import React from "react"
import SvgIcon from '@material-ui/core/SvgIcon';


export default function App({ children, viewBox }) {
    return (
        <SvgIcon viewBox={ viewBox || "0 0 56.693 56.693"}>
            {children}
        </SvgIcon>
    )

}