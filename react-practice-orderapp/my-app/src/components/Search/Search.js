import classes from './Search.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <FontAwesomeIcon icon={faSearch} className={classes.icon}/>
                <input 
                    type="text"
                    className={classes.keyword}
                    // value={value}
                    // onKeyDown={props.keyDown}
                    onChange={props.valueChangeHandler}
                    placeholder="Keywords"
                />
            </div>
        </div>

    );
}

export default Search;