import axios from 'axios'

 export const LoginAuth = async (email: string, password: string) => {
  try {
    const response = await axios.post("https://back-end-arvore.vercel.app/login", {
      email,
      password
    })
    return response.data
  } catch (error:any) {
    console.error("Erro ao fazer login:", error)
    throw error
  }
}

export const SignupAuth = async (name: string, email:string, birthDate:string, password:string) => {
  try {
    const response = await axios.post("https://back-end-arvore.vercel.app/signup", {
      name,
      email,
      birthDate,
      password
    })
    return response.data
  } catch (error) {
    console.error("Erro ao fazer login:", error)
    throw error
  }
}


