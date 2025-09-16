import { MagnifyingGlass } from "phosphor-react";
import { SeachFormContainer } from "./styles";

export function SearchForm() {
    return(
        <SeachFormContainer>
            <input type="text" placeholder="Search for transactions" />

            <button type="submit">
                <MagnifyingGlass size={20}/>
                Search
            </button>
        </SeachFormContainer>
    )
}