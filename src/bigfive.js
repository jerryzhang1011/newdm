import data from "./big_five_data";
import BigFiveCard from "./big_five_card";

export default function Bigfive() {
    let cards = data.map(item => {
        return <BigFiveCard
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    rank={item.rank}/>
    })

    return (
        <div className="remove_scr" id="big-five-list">
            {cards}
        </div>
    )
}