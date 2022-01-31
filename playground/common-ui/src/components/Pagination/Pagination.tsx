import usePagination from '../../hooks/usePagination';

interface Props {
  count: number;
  page: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
  siblingCount?: number;
  boundaryCount?: number;
}

const Pagination: React.FC<Props> = (props) => {
  const { items } = usePagination(props);
  return (
    <nav>
      <ul>
        {items.map(({ key, disabled, selected, onClick, item }) => (
          <li key={key}>
            <button disabled={disabled} onClick={onClick}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
