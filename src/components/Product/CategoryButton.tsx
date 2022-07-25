type Props = {
    category: string,
    filter(category: string): void,
}

const CategoryButton = ({ category, filter }: Props) => {
    const handleFilter = (event: React.MouseEvent<HTMLElement>) => {
        const value = (event.target as HTMLButtonElement).innerHTML.trim()
        filter(value)
    }
    return (
        <button onClick={handleFilter}>{category}</button>
    )
}

export default CategoryButton