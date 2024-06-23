import { IProduct } from "../../../interfaces/data";
import { useState, useEffect } from "react";
import Product from "../../Molecules/Product/Product";
import Search from "../../Molecules/Search/Search";
import ButtonAction from "../../Atoms/ButtonAction/ButtonAction";
import styles from "./Products.module.scss";
import { useGetProductsQuery } from "../../../store";
import Loading from "../../Atoms/Loading/Loading";

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

    const totalProducts = initialData?.total ?? 0;
    const isAllProductsLoaded = totalProducts <= products.length;
    return (
        <>
            <Search
                onSearchResults={handleSearchResults}
                setLoading={setIsSearchLoading}
                key="search-key"
            />
            {isInitialLoading || isSearchLoading ? (
                <Loading />
            ) : isError ? (
                <p>Error loading products...</p>
            ) : (
                <>
                    <ul className={styles.products}>
                        {products.map((product: IProduct) => (
                            <Product product={product} key={product.id} />
                        ))}
                    </ul>
                    {!isAllProductsLoaded && (
                        <div className={styles.products__containerBtn}>
                            <ButtonAction
                                tag="button"
                                text="Show more"
                                handleClickButton={handleShowMoreProducts}
                            />
                        </div>
                    )}
                </>
            )}
        </>
    );
}

export default Products;
