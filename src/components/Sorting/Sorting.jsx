import PropTypes from 'prop-types'

function Sorting({ value, onChange }) {
    return (
        <div>
            <input 
                className='SortInput'
                type="text"
                value={value}
                onChange={onChange}
                placeholder=" "
            />
        </div>
    );
}

Sorting.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Sorting;