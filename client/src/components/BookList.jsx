
// eslint-disable-next-line react/prop-types
const BookList = ({ books, onDelete, onEdit }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/*  eslint-disable-next-line react/prop-types */}
          {books?.map(book => (
            <tr key={book._id}>
              <td className="border px-4 py-2">{book.title}</td>
              <td className="border px-4 py-2">{book.author}</td>
              <td className="border px-4 py-2">{book.genre}</td>
              <td className="border px-4 py-2 flex items-center  justify-center gap-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2"
                  onClick={() => onEdit(book._id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => onDelete(book._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
