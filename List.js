import React from 'react'


const list = (props) => {

    return <div className="User row">
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Sn.</th>
                    <th>Full Name</th>
                    <th>Gender</th>
                </tr>
             </thead>
             <tbody>
                    {props.showdata.map(data => <tr key={data.id}>
                        <td>{data._id}</td>
                        <td>{data.name}</td>
                        <td>{data.gender}</td>
                        </tr>)}
                </tbody>            
             </table>
            </div>
}

export default list