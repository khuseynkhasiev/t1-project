import { useGetProductsQuery } from "../../store";
import { IProduct } from "../../interfaces/data";
import { useState, useEffect } from "react";
import Product from "../Product/Product";
import Search from "../Search/Search";
import ButtonAction from "../ButtonAction/ButtonAction";
import styles from "./Products.module.scss";

function Products() {
    const [limitProducts, setLimitProducts] = useState<number>(9);
    const {
        data: initialData,
        isLoading: isInitialLoading,
        isError,
    } = useGetProductsQuery(limitProducts);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isSearchLoading, setIsSearchLoading] = useState<boolean>(false);

    useEffect(() => {
        if (initialData?.products) {
            setProducts(initialData.products);
        }
    }, [initialData]);

    const handleSearchResults = (products: IProduct[]): void => {
        setProducts(products);
    };

    const handleShowMoreProducts = (): void => {
        setLimitProducts((prevLimit) => prevLimit + 9);
    };

    if (isInitialLoading || isSearchLoading) {
        return (
            <>
                <Search
                    onSearchResults={handleSearchResults}
                    setLoading={setIsSearchLoading}
                    key="search-key"
                />
                <h1>Loading...</h1>
            </>
        );
    }

    if (isError) {
        console.error("Error loading");
        return (
            <>
                <Search
                    onSearchResults={handleSearchResults}
                    setLoading={setIsSearchLoading}
                    key="search-key"
                />
                <h1>Error loading</h1>
            </>
        );
    }

    return (
        <>
            <Search
                onSearchResults={handleSearchResults}
                setLoading={setIsSearchLoading}
                key="search-key"
            />
            <ul className={styles.products}>
                {products.map((product: IProduct) => (
                    <Product product={product} key={product.id} />
                ))}
            </ul>
            <div className={styles.products__containerBtn}>
                <ButtonAction
                    tag="button"
                    text="Show more"
                    handleClickButton={handleShowMoreProducts}
                />
            </div>
        </>
    );
}

export default Products;
