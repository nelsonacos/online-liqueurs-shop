import { AiOutlineCloseCircle } from "react-icons/ai";

type ModalCloseButtonProps = {
    closeCart(): void,
    className: string
}

const ModalCloseButton = ({ closeCart, className }: ModalCloseButtonProps) => {

    const handleClick = () => {
        closeCart();
    }
    return (
        <>
            <button onClick={handleClick} className={className}>
                <AiOutlineCloseCircle />
            </button>
        </>
    )
}

export default ModalCloseButton