import Links from "./Links"
import SearchBox from "./SearchBox"

const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <div className = "flex justify-between items-start p-4 border-b-2 border-black dark:border-white">
            <span className = "bg-blue-500 text-white rounded-lg font-bold p-3 text-xl block sm:hidden">Google Search</span>
            <div className = "w-3/12 sm:w-8/12 lg:w-6/12">
                <SearchBox></SearchBox>
                <Links></Links>
            </div>
            <div className = 'text-2xl p-3 rounded-lg bg-black text-white dark:bg-white dark:text-black sm:text-lg sm:py-2 sm:px-4 lg:py-2' onClick = {() => setDarkTheme(!darkTheme)}>{darkTheme ? 'Light' : 'Dark'}</div>
        </div>
    )
}

export default Navbar
