import { NavLink } from "react-router-dom";
import { Search, Image, Email } from '@material-ui/icons';

const Links = () => {
    return (
        <div className = "flex mt-4 justify-between text-white">
            <NavLink to = "/search" className = "text-xl text-black dark:text-white sm:text-lg" activeClassName = "border-b-2 border-blue-800">
                <Search></Search>
                <span>All</span>
            </NavLink>
            <NavLink to = "/images" className = "text-xl text-black dark:text-white sm:text-lg" activeClassName = "border-b-2 border-blue-800">
                <Image></Image>
                <span>Images</span>
            </NavLink>
            <NavLink to = "/news" className = "text-xl text-black dark:text-white sm:text-lg" activeClassName = "border-b-2 border-blue-800">
                <Email></Email>
                <span>News</span>
            </NavLink>
        </div>
    )
}

export default Links
