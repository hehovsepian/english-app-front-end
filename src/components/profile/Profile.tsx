import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import UserCard from '../global/UserCard'

function Profile(){

    const students = useSelector((state: RootState) => state.students)
	const user = students.filter(student => student.name === 'Rico Almeida')[0]

    return (
        <>
            <UserCard 
                user={user} profile={true}
            />
        </>
    )

}

export default Profile