import React from 'react'
import styles from '../../css/server.module.css'

interface ServerProps {}

export const Server: React.FC<ServerProps> = () => {
    return (
        <h1 className={styles.title}>ProximityChat</h1>
    )
}