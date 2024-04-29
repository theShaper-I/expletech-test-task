'use client';

type CategoriesListProps = {
  categories: string[];
  setSelectedCategory: (category: string) => void;
};

export const CategoriesList = ({
  categories,
  setSelectedCategory
}: CategoriesListProps) => {
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className='mt-10'>
      <label className='text-[18px] font-bold'>Categories:</label>
      <select
        onChange={handleCategoryChange}
        className='flex gap-20 mt-10 bg-white rounded-xl px-10 py-10'
      >
        <option value=''>All</option>
        {categories.map((category, index) => (
          <option
            value={category}
            className='rounded-[13px] font-medium hover:bg-gray-200 duration-300 cursor-pointer bg-white px-20 py-10'
            key={index}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
