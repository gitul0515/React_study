const Pagination = ({ page, limit, total, onChange }) => {
  const totalPage = Math.ceil(total / limit);
  return (
    <div>
      <button onClick={() => page !== 0 && onChange(page - 1)}>이전</button>
      {Array.from(new Array(totalPage), (_, i) => i)
        .filter((i) => {
          /* 
            처음 두 페이지일 경우, 예를 들어 0 또는 1 페이지라면 
            0, 1, 2, 3, 4, 버튼을 렌더링한다. 
          */
          if (page < 2) {
            return i < 5;
          }
          /* 
            마지막 두 페이지일 경우, 예를 들어 8 또는 9 페이지라면 
            5, 6, 7, 8, 9 버튼을 렌더링한다. 
          */
          if (page >= totalPage - 2) {
            return i >= totalPage - 5;
          }
          /* 
            중간 페이지일 경우, 예를 들어 5 페이지라면
            3, 4, 5, 6, 7 버턴을 렌더링한다. 
          */
          return i >= page - 2 && i <= page + 2;
        })
        .map((i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            style={{ backgroundColor: setBackgroundColor(i, page) }}
          >
            {i + 1}
          </button>
        ))}
      <button onClick={() => page !== totalPage - 1 && onChange(page + 1)}>다음</button>
    </div>
  );
};

const setBackgroundColor = (i, page) => {
  return i === page ? 'red' : undefined;
};

Pagination.proptype = {};

export default Pagination;
