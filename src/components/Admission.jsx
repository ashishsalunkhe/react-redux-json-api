import  { Component } from 'react';
import axios from 'axios'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setData } from '../store/apiAction'


function Admission() {

    // storing the api data using dispatch and axios
    const dispatch = useDispatch()
    const storeData = async () => {
        const data = await axios.get('http://localhost:3004/grades')
        dispatch(setData(data))
    }
    useEffect(() => {
        storeData()
    }, [])

    // getting data from store using useSelector hook
    const dataFromStore = useSelector(state => state)

    
    return (
        <div>
            <div className="col-sm-6 offset-md-3 text-center">
            <br/>
                <h1>Learning Curve Public School</h1>
                <br/>
                <img className="img-fluid center-block center" src={process.env.PUBLIC_URL + "assets/img/myschool.jpg"} alt="LCPS_School"></img>
            <br/>
            <br/>
            <br/>
            <h2>Grades Available</h2>
            <br/>
            <ul className='list-group'>
                {
                    dataFromStore && dataFromStore.data.map((value, key) => (
                        <li className="list-group-item list-group-item-action " key={key}>
                            <Link to={`/admission/allgrade/${value.category}`}>{value.category}</Link>
                        </li>
                    ))
                }
            </ul>
            </div>
        </div>
    )
}



// class Admission extends Component{
//     constructor(props){
//         super(props)

//         this.state = {
//             grades: []
//         }
//     }

//     componentDidMount(){
//         axios.get("http://localhost:3004/grades")
//         .then(response=>{
//             console.log(response)
//             this.setState( {grades: response.data})
//         })
//         .catch(error => {
//             console.log(error)
//         } )
//     }

//     render(){
//         const {grades} = this.state

//         return(
//             <div className="container">
//                 <div className="col-sm-6 offset-md-3 text-center">
//                 <h1>Learning Curve Public School</h1>
//                 <img className="img-fluid" src={process.env.PUBLIC_URL + "myschool.jpg"} alt="School" width="500px" />
//             </div>
//             <h2>Grades Available</h2>
//                 {
//                     grades && grades.map((value, key) => (
//                         <li key={key}>
//                             <Link to={`/admission/allgrade/${value.category}`}>{value.category}</Link>
//                         </li>
//                     ))
//                 }
//             </div>
//         )
//     }
// }



export default Admission;