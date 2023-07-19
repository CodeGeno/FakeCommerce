import { Wrapper } from '../styles/FilterWrapper'
import FormRow from './FormRow'
import { useAppContext } from '../context/appContext'
import { useState, useEffect } from 'react'
import FormRowSelect from './FormRowSelect'

function FilterSection({ category }) {
  const { handleChange, getFilteredProducts, subCategoryOptions } =
    useAppContext()
  const initialState = {
    minPrice: '',
    maxPrice: '',
    subCategory: '',
    category: category,
    name: '',
  }
  const [filters, setFilters] = useState(initialState)
  const [showFilters, setShowFilters] = useState(false)
  const handleSearch = (e) => {
    e.preventDefault()
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  const clearFilters = (e) => {
    e.preventDefault()
    setFilters(initialState)
  }
  useEffect(() => {
    getFilteredProducts(filters)
  }, [filters])

  const handleSubmit = (e) => {
    e.preventDefault()
    clearFilters()
  }

  return (
    <Wrapper>
      <div className='form'>
        <button
          className='page-title'
          onClick={() => {
            setShowFilters(!showFilters)
          }}
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        {showFilters && (
          <div
            className={`active form-center ${
              showFilters ? 'fade-in' : 'fade-out'
            }`}
          >
            <FormRow
              type='text'
              name='name'
              value={filters.name}
              handleChange={handleSearch}
            />
            <FormRowSelect
              labelText='Category'
              name='subCategory'
              value={filters.subCategory}
              handleChange={handleSearch}
              list={subCategoryOptions}
            />
            <FormRow
              labelText='Minimum Price'
              type='number'
              name='minPrice'
              value={filters.minPrice}
              handleChange={handleSearch}
            />
            <FormRow
              labelText='Maximum Price'
              type='number'
              name='maxPrice'
              value={filters.maxPrice}
              handleChange={handleSearch}
            />
            <button className='btn btn-block btn-danger' onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default FilterSection
