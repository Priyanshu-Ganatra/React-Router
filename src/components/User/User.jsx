import { useParams } from "react-router-dom"

function Users() {
  const {userid} = useParams()

  return (
    <div className="font-bold text-white uppercase justify-center h-64 bg-slate-500 flex items-center">
      User: {userid}
    </div>
  )
}

export default Users
