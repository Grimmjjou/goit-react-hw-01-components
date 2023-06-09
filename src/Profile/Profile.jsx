import PropTypes from 'prop-types';
import styles from './user.module.css';

const Profile=({name,tag,location,avatar,stats,})=>(
<div className={styles.profile}>
<div className={styles.description}>
  <img
    src={avatar}
    alt="User avatar"
    className={styles.avatar}
  />
  <p className={styles.name}>{name}</p>
  <p className={styles.tag}>@{tag}</p>
  <p className={styles.location}>{location}</p>
</div>

<ul className={styles.stats}>
  <li>
    <span className={styles.lable}>Followers</span>
    <span className={styles.quantity}>{stats.followers}</span>
  </li>
  <li>
    <span className={styles.lable}>Views</span>
    <span className={styles.quantity}>{stats.views}</span>
  </li>
  <li>
    <span className={styles.lable}>Likes</span>
    <span className={styles.quantity}>{stats.likes}</span>
  </li>
</ul>
</div>)

Profile.propTypes={
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats:PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
})}
export default Profile;