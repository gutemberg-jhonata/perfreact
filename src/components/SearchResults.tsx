import { List, ListRowRenderer } from 'react-virtualized';

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
    const rowRender: ListRowRenderer = (({ index, key, style }) => {
        return (
            <div key={key} style={style}>
                <ProductItem  
                    product={results[index]} 
                    onAddToWishList={onAddToWishList} 
                />
            </div>
        );
    });

    return (
        <div>
            <h2>{totalPrice}</h2>

            <List 
                height={300}
                rowHeight={30}
                width={900}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRender}
            />
        </div>
    );
}