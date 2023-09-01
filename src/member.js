import member_data from "./member_data";
import MemberCard from "./member_card";
export default function Member() {
    let cards = member_data.map(item => {
        return <MemberCard
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    credit={item.credit}/>
    })

    return (
        <div className="remove_scr" id="member-list">
            {cards}
        </div>
    )
}