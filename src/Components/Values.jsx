import React from 'react'

function Values(props) {
    const { InvoiceID, Date, Customer, PayableAmount, PaidAmount, Due } = props.data;
    return (
        <>
            <tr>
                <th scope="row">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    </div>
                </th>
                <td className='text-primary'>{InvoiceID}</td>
                <td>{Date}</td>
                <td>{Customer}</td>
                <td>${PayableAmount}</td>
                <td>${PaidAmount}</td>
                <td>${PayableAmount-PaidAmount}</td>
            </tr>
        </>
    )
}

export default Values