export default function MemberCard(prop) {
    let status
    let badge_color
    if (prop.credit >= 50) {
        status = 'RELIABLE'
        badge_color = "green"
    } else {
        status = "RISKY"
        badge_color = "red"
    }
    let a = 'badge ' + badge_color
    let b = prop.img
    
    return (
        <div className='member-card'>
            <div className={a}>{status}</div>
            <img src={prop.img}/>
            <h4>{prop.name}</h4>
            <p>Men's credit: {prop.credit}</p>
        </div>
    )
}
