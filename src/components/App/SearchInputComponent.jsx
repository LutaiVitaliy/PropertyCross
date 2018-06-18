import React from "react";
import s from "./styles.scss"

const instructionalText = "Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location', to search in your current location!"

class SearchInputComponent extends React.Component {
    render() {
        return (
            <div className={s.inpCont}>
                <p>{instructionalText}</p>
                <form>
                    <label>
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Go" />
                    <button>My location</button>
                </form>
            </div>)

    }
}

export default SearchInputComponent;