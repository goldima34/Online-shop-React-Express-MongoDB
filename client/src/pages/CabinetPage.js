import React, { useContext } from 'react'
import { Context } from '../index'

const CabinetPage = () => {
    const { userStore } = useContext(Context)
    return (
        <div>
            <button onClick={() => userStore.logout()}>Logout</button>
        </div>
    )
}

export default CabinetPage
