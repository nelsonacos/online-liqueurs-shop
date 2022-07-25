
type Props = {
    category: string,
    filter(value: string): void,
}

const AllProductButton = ({ category, filter }: Props) => {
    const handleFilter = (event: React.MouseEvent<HTMLElement>) => {
        const value = (event.target as HTMLButtonElement).innerHTML.trim()
        filter(value)
    }
    return (
        <button onClick={handleFilter}>{category}</button>
    )
}

export default AllProductButton