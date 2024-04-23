
import './StoredLink.css';

const StoredLink = ({ id, URL, name, type, description }) => {
  return (
    <div>
      <a href={URL}>{name}</a>
      <p>{type}</p>
      <p>{description}</p>
    </div>
  )
};


export default StoredLink;
