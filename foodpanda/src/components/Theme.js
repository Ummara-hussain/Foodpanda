import { useDispatch } from "react-redux"
import { updateTheme } from '../store/theme'

export default function Theme() {
    const dispatch = useDispatch()

    return (
        <div className="theme-box">
            <div
                onClick={() => dispatch(updateTheme('red-theme'))} className='red box'></div>
            <div
                onClick={() => dispatch(updateTheme('black-theme'))} className='black box'></div>
            <div
                onClick={() => dispatch(updateTheme('white-theme'))} className='white box'></div>
        </div>
    )
}