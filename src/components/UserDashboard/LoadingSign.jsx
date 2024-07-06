import { CircularProgress } from "@mui/material";


function LoadingSign(){
    return (
        <div className="flex justify-center align-middle w-[100%] h-[100%] mt-28 overflow-hidden">
            <CircularProgress color="secondary" size={64} sx={{margin: 'auto'}}/>
        </div>
    )
}

export default LoadingSign;