import { ProductItem } from "./ProductItem";

type SearchResultProps = {
    results: Array<{
        id: number,
        price: number,
        priceFormatted: string,
        title: string,
    }>,
    totalPrice: number,
    onAddToWishList: (id: number) => void,
}

export function SearchResults({ results, totalPrice, onAddToWishList }: SearchResultProps) {
    return (
        <div>
            <h2>{totalPrice}</h2>

            {results.map(product => {
                return (
                    <ProductItem 
                        key={product.id} 
                        product={product} 
                        onAddToWishList={onAddToWishList} 
                    />
                )
            })}
        </div>
    );
}