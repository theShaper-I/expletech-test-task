type SortByPriceListProps = {
  sortOrder: 'asc' | 'desc';
  onSortOrderChange: (order: 'asc' | 'desc') => void;
};

export const SortByPriceList: React.FC<SortByPriceListProps> = ({
  sortOrder,
  onSortOrderChange
}) => {
  return (
    <div>
      <span className='text-[18px] font-bold'>Sort by Price:</span>
      <select
        className='flex gap-20 mt-10 bg-white rounded-xl px-10 py-10'
        value={sortOrder}
        onChange={(event) =>
          onSortOrderChange(event.target.value as 'asc' | 'desc')
        }
      >
        <option value='asc'>Ascending</option>
        <option value='desc'>Descending</option>
      </select>
    </div>
  );
};
