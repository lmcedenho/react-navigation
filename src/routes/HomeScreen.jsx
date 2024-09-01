import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const HomeScreen = () => {

    const {user} = useContext(UserContext)

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">nombre</th>
                    <th scope="col">Tecnologia</th>
                    <th scope="col">Email</th>
                    <th scope="col">Redes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{user.name}</th>
                    <td>{user.technology}</td>
                    <td>{user.email}</td>
                    <td>{user.networks}</td>
                </tr>
            </tbody>
        </table>
    )
}
