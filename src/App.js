
import { Profile } from './Gallery.js';
import { getImageUrl } from './utils.js';

export default function App() {
  return (
    <Profile />
  );
}



function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export  function Profile1() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
     
    </div>
  );
}
