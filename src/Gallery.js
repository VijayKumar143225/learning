export function Profile() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists from the World</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
  