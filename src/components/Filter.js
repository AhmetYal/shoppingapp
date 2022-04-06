import { useState } from "react";

const Filter = () => {
  const [filter, setFilter] = useState();

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  console.log(filter);
  return (
    <div>
      <div className="filter">
        <div className="filter-result">Products</div>
        <div className="filter-sort">
          Order{" "}
          <select name="order" onChange={handleFilter}>
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter{" "}
          <select name="size" onChange={handleFilter}>
            <option value="">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
