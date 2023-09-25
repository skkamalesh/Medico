import React from 'react'
import Searchbar from './Searchbar'
import Form from './Form'
import Table from './Table'

function Dashboard() {
    return (
        <div className="container-fluid right-portion">
            <div>
                <div className="mt-4">
                    <Searchbar />
                    <div className="container mx-2 pe-4">
                        <h4>Sales Information</h4>
                        <Form />
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard