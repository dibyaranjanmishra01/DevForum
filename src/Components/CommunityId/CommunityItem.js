import React from 'react'
import './communityitem.css'
import { useParams } from 'react-router-dom'

export default function CommunityItem() {

    const { id } = useParams();

    return (
        <div>CommunityItem {id}</div>
    )
}
