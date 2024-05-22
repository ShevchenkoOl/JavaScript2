import './style.css';

export const Bubl = ({src, name, on}) => {
    const bulbClass = on ? 'bubl bulb--on' : 'bubl';
    return <div className="bubl"><img src={src} alt={name} /></div>
}