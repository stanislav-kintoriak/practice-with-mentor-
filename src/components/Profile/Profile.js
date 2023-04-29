import PropTypes from 'prop-types';
import styles from '../Profile/Profile.module.css'

export const Profile = ({
    imageUrl,
    name,
    tag,
    location,
    stats: { followers, views, likes },
  }) => {
    return (
        <div class={styles.profile}>
  <div class={styles.description}>
    <img
      src={imageUrl}
      alt={name}
      class={styles.avatar}
    />
    <p class={styles.name}>{name}</p>
    <p class={styles.tag}>{tag}</p>
    <p class={styles.location}>{location}</p>
  </div>

  <ul class={styles.stats}>
    <li>
      <span class={styles.label}>Followers</span>
      <span class={styles.quantity}>{followers}</span>
    </li>
    <li>
      <span class={styles.label}>Views</span>
      <span class={styles.quantity}>{views}</span>
    </li>
    <li>
      <span class={styles.label}>Likes</span>
      <span class={styles.quantity}>{likes}</span>
    </li>
  </ul>
</div>
    )}

    Profile.propTypes = {
        imageUrl:PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired
    }