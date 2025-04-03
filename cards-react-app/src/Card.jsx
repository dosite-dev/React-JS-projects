import profilePic from './assets/photo2a.jpg'
function Card(){
    return(
        <div className='card'>
        <img className="card-image" src={profilePic} alt="profile picture"></img>
        <h2 className='card-title'>Dosite</h2>
        <p className='card-text'>IT Student</p>
        </div>
    )
}
export default Card