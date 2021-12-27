const Profile=(props)=>{

    console.log(props.ArrayOfStudents)
    return (<div>
        <h1>Profile Component</h1>
         <p>{props.person.firstName}</p>
        <p>{props.person.lastName}</p> 
        <p>{props.arrayOfHobbies.map((n)=>(<p>{n}</p>))}</p>
        <div>{props.ArrayOfStudents.map((x)=>(<p>{x.studentName}</p>))}</div>
        </div>
    )
}
export default Profile 