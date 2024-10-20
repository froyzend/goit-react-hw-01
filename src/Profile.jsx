import './Profile.css'
import PropTypes from 'prop-types'

const Profile = ({ username, tag, location, avatar, stats})=>{

    return (
        <div className='profileCard'>
            <img className='avatar' src={avatar} alt="User avatar" />
            <p className='userTextName'>{username}</p>
            <p className='userText'>{tag}</p>
            <p className='userText'>{location}</p>
            <ul className='profileList'>
                <li className='profileItem'>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className='profileItem'>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className='profileItem'>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }).isRequired,
};

export default Profile
