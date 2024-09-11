import { type FilterProps } from './Filter.type';
import { FaMagnifyingGlass as GlassIcon } from 'react-icons/fa6';

const Filter = ({ filter, filterType, setFilterType, setFilter }: FilterProps) => {
  return (
    <div className="p-4">
      <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        <label className="input input-sm input-bordered flex items-center gap-2 sm:w-auto">
          <input
            type="text"
            className="w-[61vw] grow sm:w-auto"
            placeholder="Filter"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
          <GlassIcon />
        </label>
        <div className="join join-horizontal border border-slate-500">
          <div className="join-item flex items-center justify-center p-1 px-4 font-sans text-xs font-semibold">
            Filter by
          </div>
          <input
            type="radio"
            name="filter-buttons"
            className="btn join-item btn-xs sm:btn-sm"
            checked={filterType === 'name'}
            onChange={(event) => setFilterType(event.target.value)}
            aria-label="Name"
            value="name"
          />
          <input
            type="radio"
            name="filter-buttons"
            className="btn join-item btn-xs sm:btn-sm"
            checked={filterType === 'username'}
            onChange={(event) => setFilterType(event.target.value)}
            aria-label="Username"
            value="username"
          />
          <input
            type="radio"
            name="filter-buttons"
            className="btn join-item btn-xs sm:btn-sm"
            checked={filterType === 'email'}
            onChange={(event) => setFilterType(event.target.value)}
            aria-label="Email"
            value="email"
          />
          <input
            type="radio"
            name="filter-buttons"
            className="btn join-item btn-xs sm:btn-sm"
            checked={filterType === 'phone'}
            onChange={(event) => setFilterType(event.target.value)}
            aria-label="Phone"
            value="phone"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
