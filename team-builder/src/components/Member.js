import React from "react";

export default function Member(props) {
    const { member } = props;


    return(
        <>
            <div>
                <h2>{member.name}</h2>
            </div>
            <div>
                <p>{member.email}</p>
                <p>{member.role}</p>
            </div>
        </>
    )
}














































