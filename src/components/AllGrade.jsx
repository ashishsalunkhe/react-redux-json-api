import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function AllGrade(props) {

    // getting data from store
    const dataFromStore = useSelector(state => state)

    // filtering out the category from the params
    const data = dataFromStore && dataFromStore.data.filter(function (value) {
        return value.category === props.match.params.string;
    });


    return (
        <div>
            <div className="col-sm-6 offset-md-3 text-center">
                <h1>Learning Curve Public School</h1>
                <div className="col-sm-6 offset-md-3 text-center">
                    <img className="img-fluid center-block center" src="/assets/img/myschool.jpg" alt="LCPS_School"></img>
                </div>
                <br/>
                <br/>
                <br/>
                <h2>{data[0].category}</h2>
                <br/>
                <table className="table table-hover table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Grade</th>
                        <th>Fees</th>
                        <th>Seats</th>
                    </tr>
                    </thead>
                    {
                        data[0].options.map((value, key) => (
                            <tbody>
                            <tr key={key}>
                                <td>{value.grade}</td>
                                <td>₹ {value.fees}</td>
                                <td>{value.seats}</td>
                            </tr>
                            </tbody>
                            
                        ))
                    }
                    
                </table>
                <br/>
                            <Link className="btn btn-light" to='/admission'>Back to Admission</Link>
                            <br/>
                            <br/>
                            <Link className="btn btn-light" to='/'>Back to Home</Link>
            </div>
        </div>
    )
}

export default AllGrade
