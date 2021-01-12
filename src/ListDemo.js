
function ListDemo(){

    const person=[
        {
            name:"John",
            address:[
                {street:"street1",area:"area1"},
                {street:"street2",area:"area2"}
        ]
        },
        {
            name:"Peter",
            address:[
                {street:"street3",area:"area3"},
                {street:"street4",area:"area4"}
            ]
        }
    ]

    return(
        <div>
            {person.map((person,i)=>(
                // <p key={i}>{person.name}</p>
                <div key={i}>
                    <h2>{person.name}</h2>

                   <div>
                        {person.address.map((address,i1)=>(
                            <p key={i1}>
                                Street: {address.street} Area: {address.area} 
                            </p>
                        ))}
                   </div> 
                </div>
            ))}
        </div>
    )
}

export default ListDemo