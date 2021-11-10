import React from "react";


export default function MemberForm(props) {
    const {submit, update, values} = props

    const onChange = evt => {
        const name=evt.target.name;
        const { value } = evt.target;
        update(name,value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }


    return(
        <div>
            <form className="member-form" onSubmit={onSubmit}>
                <label name="Name-input">Name:&nbsp;
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label name="email-input">Email:&nbsp;
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label name="role">Role:&nbsp;
                    <select name="role" value={values.role} onChange={onChange}>----Select a Role----
                    <option value="Collector">Collector</option>
                    <option value="Vendor">Vendor</option>
                    <option value="Press">Press</option>
                    <option value="Artist">Artist</option>
                    </select>
                </label>
                {/*<input type="submit">Submit</input>*/}
                <br/>
                <br/>
                <button disabled={!values.name || !values.email || !values.role}>Submit</button>
            </form>
        </div>
    )

}













































