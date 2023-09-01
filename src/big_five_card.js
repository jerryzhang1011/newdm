import React from 'react';

export default function BigfiveCard(prop) {
    let placement_class_name
    if (prop.rank == "1") {
        placement_class_name = "placement_badge1"
    } else if (prop.rank == "2") {
        placement_class_name = "placement_badge2"
    } else if (prop.rank == "3") {
        placement_class_name = "placement_badge3"
    } else {
        placement_class_name = "placement_badge"
    }
    return (
        <div className='big_five_card'>
            <div className='imgcontainer'>
                <div className={`${placement_class_name}`}></div>  
                <img id="bigfiveimg" src="https://github.com/jerryzhang1011/src/blob/main/stranger.png?raw=true"/>
            </div>
            <h4>{prop.name}</h4>
            <p>Rank: {prop.rank}</p>
        </div>
    )
}