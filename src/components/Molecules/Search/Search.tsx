import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useLazySearchProductsQuery } from "../../../store";
import { IProduct } from "../../../interfaces/data";
import ButtonAction from "../../Atoms/ButtonAction/ButtonAction";
import useDebouncedFunction from "../../../hooks/useDebouncedFunction";
import styles from "./Search.module.scss";
import Input from "../../Atoms/Input/Input";

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

    const handleInputName = useCallback(
        (event: ChangeEvent<HTMLInputElement>): void => {
            setName(event.target.value);
            debouncedGetSearchedProducts();
        },
        [name, triggerSearchProducts]
    );

    return (
        <div className={styles.search}>
            <Input
                type="text"
                placeholder="Search by title"
                cls="Input_pdSmall"
                name="login"
                value={name}
                handleInput={handleInputName}
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
