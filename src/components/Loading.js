import { CircularProgress } from "@material-ui/core"

const Loading = () => {
    return (
        <div className = "w-full -mt-20 h-screen flex justify-center items-center">
            <CircularProgress></CircularProgress>
        </div>
    )
}

export default Loading
