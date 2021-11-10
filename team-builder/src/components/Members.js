import React from "react";
import Member from "./Member";

export default function Members(props) {
    const { membersList } = props;


    return (
        <div>
            {
                membersList.map((member, i) => {
                    return <Member member={member}/>
                })
            }
        </div>
    )


}













































