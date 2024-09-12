import { ChangeEvent, useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setFilter, setFilterType, selectFilter, selectFilterType } from '../../features/filter/filterSlice';
import { FaMagnifyingGlass as GlassIcon } from 'react-icons/fa6';
import { FilterTypes } from '../../types/filter.type';

const Filter = () => {
  const filter = useAppSelector(selectFilter);
  const filterType = useAppSelector(selectFilterType);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [filterType]);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };

  const handleFilterTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterType(event.target.value as FilterTypes));
  };

  return (
    <div className="p-4">
      <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        <label className="input input-sm input-bordered flex items-center gap-2 sm:w-auto">
          <input
            type="text"
            className="w-[61vw] grow sm:w-auto"
            placeholder="Filter"
            ref={inputRef}
            value={filter}
            onChange={handleFilterChange}
          />
          <GlassIcon />
        </label>
        <div className="join join-horizontal border border-slate-500">
          <div className="join-item flex items-center justify-center p-1 px-4 font-sans text-xs font-semibold sm:text-sm">
            Filter by
          </div>
          <input
            type="radio"
            name="filter-buttons"
            className="btn join-item btn-xs sm:btn-sm"
            checked={filterType === 'name'}
            onChange={handleFilterTypeChange}
            aria-label="Name"
            value="name"
          />
          <input
            type="radio"
            name="filter-buttons"
            className="btn join-item btn-xs sm:btn-sm"
            checked={filterType === 'username'}
            onChange={handleFilterTypeChange}
            aria-label="Username"
            value="username"
          />
          <input
            type="radio"
            name="filter-buttons"
            className="btn join-item btn-xs sm:btn-sm"
            checked={filterType === 'email'}
            onChange={handleFilterTypeChange}
            aria-label="Email"
            value="email"
          />
          <input
            type="radio"
            name="filter-buttons"
            className="btn join-item btn-xs sm:btn-sm"
            checked={filterType === 'phone'}
            onChange={handleFilterTypeChange}
            aria-label="Phone"
            value="phone"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
