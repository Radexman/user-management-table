import { type FilterProps } from './Filter.types';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const Filter = ({ filter, filterType, setFilterType, setFilter }: FilterProps) => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <label className="input input-sm input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <FaMagnifyingGlass />
        </label>
        <div className="join join-horizontal border border-slate-500">
          <div className="join-item flex items-center justify-center p-1 px-4 font-sans text-sm font-semibold">
            Filter by
          </div>
          <input
            type="radio"
            name="filter-buttons"
            className="btn join-item btn-sm"
            checked={filterType === 'name'}
            onChange={(e) => setFilterType(e.target.value)}
            aria-label="Name"
            value="name"
          />
          <input
            type="radio"
            name="filter-buttons"
            className="btn join-item btn-sm"
            checked={filterType === 'username'}
            onChange={(e) => setFilterType(e.target.value)}
            aria-label="Username"
            value="username"
          />
          <input
            type="radio"
            name="filter-buttons"
            className="btn join-item btn-sm"
            checked={filterType === 'email'}
            onChange={(e) => setFilterType(e.target.value)}
            aria-label="Email"
            value="email"
          />
          <input
            type="radio"
            name="filter-buttons"
            className="btn join-item btn-sm"
            checked={filterType === 'phone'}
            onChange={(e) => setFilterType(e.target.value)}
            aria-label="Phone"
            value="phone"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
