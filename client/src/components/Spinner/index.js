import React from 'react'
import RiseLoader from "react-spinners/RiseLoader";

export const Spinner = ({color,loading,}) => {
    return (
        <RiseLoader color={color} loading={loading} size={20} speedMultiplier="0.5" />
    )
}
