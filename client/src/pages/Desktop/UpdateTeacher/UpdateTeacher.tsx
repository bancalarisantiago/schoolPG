import { useSelector } from "react-redux"

import UpdateComponent from "../UpdateComponent/UpdateComponent";






const UpdateTeacher: React.FC = () => {
const userTeacher = useSelector((state: any) => state.user)

return (
    <>
    <UpdateComponent userType={"profesores"}/>
    </>
)
}

export default UpdateTeacher