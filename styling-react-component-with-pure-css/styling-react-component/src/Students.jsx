function Students(props){
    return(
        <div className="students">
            <p>Name :{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Students:{props.isStudents ? "Yes" : "No"}</p>

        </div>
    )

}
export default Students