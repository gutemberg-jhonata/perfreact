import { memo, useState } from 'react';
import { AddProducttoWishListProps } from './AddProductToWishlist';
import dynamic from 'next/dynamic';
import lodash from 'lodash';

const AddProducttoWishList = dynamic<AddProducttoWishListProps>(async () => {
    const mod = await import('./AddProductToWishlist');
    return mod.AddProducttoWishList;
}, {
    loading: () => <span>Carregando...</span>
});

type ProductItemProps = {
    product: {
        id: number,
        price: number,
        priceFormatted: string,
        title: string,
    },
    onAddToWishList: (id: number) => void,
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
    const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => setIsAddingToWishlist(true)}>Adicionar ao favoritos</button>

            {isAddingToWishlist && (
                <AddProducttoWishList 
                    onAddToWishList={() => onAddToWishList(product.id)} 
                    onRequestClose={() => setIsAddingToWishlist(false)}
                />
            )}
        </div>
    );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.product, nextProps.product);
});