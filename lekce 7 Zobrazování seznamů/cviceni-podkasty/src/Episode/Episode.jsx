import './style.css';

export const Episode = ({ num, title, guest }) => (
    <div className="el">
      <p>Number: {num}</p>
      <h2>{title}</h2>
      <p>Guest: {guest}</p>
    </div>
  );