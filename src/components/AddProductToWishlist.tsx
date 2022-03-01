export type AddProducttoWishListProps = {
    onAddToWishList: () => void;
    onRequestClose: () => void;
}

export function AddProducttoWishList({ onAddToWishList, onRequestClose }: AddProducttoWishListProps) {
    return (
        <span>
            Deseja adicionar ao favoritos?
            <button onClick={onAddToWishList}>Sim</button>
            <button onClick={onRequestClose}>Não</button>
        </span>
    );
}