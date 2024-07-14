const SearchBox = ({handleChangeInput, searchBoxValue}) => {
  return (
    <div>
      <label>
        <span>Find contact by name</span>
        <input
          type="text"
          onChange={handleChangeInput}
          value={searchBoxValue}
        />
      </label>
    </div>
  );
};

export default SearchBox