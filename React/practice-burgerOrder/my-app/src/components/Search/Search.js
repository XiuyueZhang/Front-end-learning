import classes from './Search.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const Search = (props) => {

    const [keyword, setKeyword] = useState("")

    useEffect(()=>{
        const timer = setTimeout(()=>{
            props.valueChangeHandler(keyword)
        },1000)

        return () => {
            clearTimeout(timer)
        }
    },[keyword])

    const inputChangeHandler = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <FontAwesomeIcon icon={faSearch} className={classes.icon}/>
                <input 
                    type="text"
                    className={classes.keyword}
                    value={keyword}
                    // onKeyDown={props.keyDown}
                    onChange={inputChangeHandler}
                    placeholder="Keywords"
                />
            </div>
        </div>

    );
}

export default Search;