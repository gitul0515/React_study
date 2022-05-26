import { useState } from 'react';
import Board from './components/Board';
import Pagination from './components/Pagination';

function App() {
  const [page, setPage] = useState(0);

  const articles = new Array(104).fill().map((_, i) => ({
    id: i,
    title: `${i}번 게시물`,
  }));

  const limit = 10;
  const offset = page * limit;

  return (
    <div>
      <Pagination page={page} limit={limit} total={articles.length} onChange={setPage} />
      <Board articles={articles.slice(offset, offset + limit)} />
    </div>
  );
}

export default App;
