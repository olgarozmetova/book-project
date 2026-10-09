import { useState } from 'react'

const Likes = () => {
    const [likes, setLikes] = useState(3)

    const handleClick = () => {
        setLikes(prev => prev + 1)
    }

    return (
    <div className="flex items-center gap-5 mt-10 p-2.5 bg-purple-50border-t border-dashed border-t-indigo-400">
        <p>{likes} people like this review.</p>
        <button onClick={handleClick} className="bg-purple-400 border-0 text-white py-1.5 px-2.5 text-base rounded-sm cursor-pointer">Like</button>
    </div>
  )
}

export default Likes
