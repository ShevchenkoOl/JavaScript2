import './style.css';
 
 export const Inbox = ({account, messages}) => {
    
    return (
    <div>{account}:
    {messages != null && messages > 0 ? (<div className="unread">Nepřečtených zpráv: {messages}</div> 
    ) : (
    <div className="no-unread">Žádné nepřečtené zprávy</div>
)}</div>
)
 };