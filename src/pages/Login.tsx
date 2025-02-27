import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../components/Input"
import Card from "../components/Card"
import Button from "../components/Button"

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError(false)

        if (email === "admin" && password === "12345") {
            navigate("/home");
        } else {
            setError(true);
        }
    }

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gray-700">
            <Card title="Inciar Sesion">
                <form onSubmit={handleLogin} className="mt-5">
                    <Input
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        label="Email"
                    />
                    <Input
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        label="Password"
                    />

                    {error && (
                        <p className="text-red-500">Email o contraseña incorrectos</p>
                    )}
                    <Button>Iniciar Sesion</Button>
                </form>
            </Card>
        </div>
    )
}

export default Login