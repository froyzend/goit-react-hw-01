import css from './Profile.module.css';



const Profile = ({name, avatar, tag, location, stats}) => (
        <div className={css.profileCard}>
            <img className={css.avatar} src={avatar} alt="User avatar" />
            <p className={css.userTextName}>{name}</p>
            <p className={css.userText}>@{tag}</p>
            <p className={css.userText}>{location}</p>
            <ul className={css.profileList}>
                <li className={css.profileItem}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={css.profileItem}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={css.profileItem}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );

export default Profile;
