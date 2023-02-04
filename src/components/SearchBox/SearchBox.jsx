export const SearchBox = ({ updateQueryString }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    updateQueryString(form.elements.query.value);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};
