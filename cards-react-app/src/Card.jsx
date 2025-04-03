import profilePic from './assets/3photo.jpg'
function Card(){
    return(
        <div>
        <img src={profilePic} alt="profile picture"></img>
        <h2>Dosite</h2>
        <p>IT Student</p>
        </div>
    )
}
export default Card