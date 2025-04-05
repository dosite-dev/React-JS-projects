// import propTypes from 'prop-types'
function Students(props){
    return(
        <div className="students">
            <p>Name :{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Students:{props.isStudents ? "Yes" : "No"}</p>

        </div>
    )

}
// Students.propTypes={
//     name : propTypes.string,
//     age: propTypes.number,
//     isStudents:propTypes.bool,

// }
Students.defaultProps = {
    name : "Guest",
    age: 0,
    isStudents:false,


}
export default Students