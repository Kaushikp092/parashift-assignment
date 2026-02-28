import { Link } from "react-router"
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-xl font-bold text-gray-500">
      <h1>404 Page Not Found</h1>
       <Link to="/" className="underline">Home page</Link>
    </div>
  )
}

export default NotFound
