export const SearchFilter = ({searchTerm, setSearchTerm}) => {
    return (
        <div>
          <input type="text" placeholder="Search recipes..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    )
}