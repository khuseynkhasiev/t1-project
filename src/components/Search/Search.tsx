import ButtonAction from "../ButtonAction/ButtonAction";
import styles from "./Search.module.scss";

function Search() {
    return (
        <div className={styles.search}>
            <input
                className={styles.search__input}
                type="text"
                placeholder="Search by title"
            />
            <ButtonAction tag={"button"} text={"Search"} />
        </div>
    );
}

export default Search;
