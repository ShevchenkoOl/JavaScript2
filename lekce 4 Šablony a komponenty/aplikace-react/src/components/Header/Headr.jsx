import '../style.css';

export const Header = (props) => {
    return (
    <header>
       <div className="logo"></div>
       <h1>{props.title}</h1>
     </header>
    );
};