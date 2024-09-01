import { useContext } from "react"
import { useForm } from "../hooks/useForm"
import { UserContext } from "../context/UserContext"

export const LoginScreen = () => {

    const {user, setUser} = useContext(UserContext)

    const initialForm = {
        name: '',
        technology: '',
        email: '',
        networks: ''
    }

    const {name, technology, email, networks, onInputChange} = useForm(initialForm)

    const handleSubmit = (event) => {
        event.preventDefault()
        setUser({
            name, technology, email, networks
        })
    }

    return (
        <form onSubmit={handleSubmit} className="container m-5">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id=""
                    name="name"
                    value={name}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id=""
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="technology" className="form-label">technology</label>
                <input
                    type="text"
                    className="form-control"
                    id=""
                    name="technology"
                    value={technology}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="networks" className="form-label">networks</label>
                <input
                    type="text"
                    className="form-control"
                    id=""
                    name="networks"
                    value={networks}
                    onChange={onInputChange}
                />
            </div>
            <button
                type="submit" 
                className="btn btn-primary">Submit</button>
        </form>
    )
}
