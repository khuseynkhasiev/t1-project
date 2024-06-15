import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useLazySearchProductsQuery } from "../../store";
import { IProduct } from "../../interfaces/data";
import ButtonAction from "../ButtonAction/ButtonAction";
import useDebouncedFunction from "../../hooks/useDebouncedFunction";
import styles from "./Search.module.scss";

interface SearchProps {
    onSearchResults: (data: IProduct[]) => void;
    setLoading: (isLoading: boolean) => void;
}

function Search({ onSearchResults, setLoading }: SearchProps) {
    const [name, setName] = useState("");
    const [triggerSearchProducts, { isLoading }] = useLazySearchProductsQuery();

    useEffect(() => {
        setLoading(isLoading);
    }, [isLoading, setLoading]);

    const handleGetSearchedProducts = useCallback(async () => {
        const result = await triggerSearchProducts(name).unwrap();
        if (result) {
            onSearchResults(result.products);
        }
    }, [name, triggerSearchProducts, onSearchResults]);

    const debouncedGetSearchedProducts = useDebouncedFunction(
        handleGetSearchedProducts,
        1000
    );

    const handleInputName = (event: ChangeEvent<HTMLInputElement>): void => {
        setName(event.target.value);
        debouncedGetSearchedProducts();
    };

    return (
        <div className={styles.search}>
            <input
                className={styles.search__input}
                type="text"
                placeholder="Search by title"
                value={name}
                onChange={handleInputName}
            />
            <ButtonAction
                tag={"button"}
                text={"Search"}
                handleClickButton={handleGetSearchedProducts}
            />
        </div>
    );
}

export default Search;
