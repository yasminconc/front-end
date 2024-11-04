import { zodResolver } from '@hookform/resolvers/zod'
import { z as zod } from 'zod'
import { useForm } from 'react-hook-form'

export type FormPropsLogin = zod.infer<typeof zodLoginValidate>

export type FormPropsSignup = zod.infer<typeof zodSignupValidate>


export type loginType = {
    email: string
    password: string
}

export type SignupType = {
    name: string
    email: string
    birthDate: string
    password: string
}
  
export const zodLoginValidate = zod.object({
    email: zod.string().min(1, 'Digite seu email').email('Email inválido'),
    password: zod
    .string()
    .min(1, 'Digite sua senha')
    .min(6, 'Senha inválida'),
})


export const formLogin = (onSubmitHandler: (data: loginType) => void) => {
    const {
    register, 
    handleSubmit, 
    formState: {errors},
    } = useForm<FormPropsLogin>({
        mode: 'onBlur',
        resolver: zodResolver(zodLoginValidate)

    })

    const onSubmit = handleSubmit(onSubmitHandler)

    return {
        handleSubmit,
        register,
        errors,
        onSubmit
    }
}


  
export const zodSignupValidate = zod.object({
    name: zod.string().min(1, 'Digite seu nome'),
    
    email: zod.string().min(1, 'Digite seu email').email('Email inválido'),

    birthDate: zod
    .string()
    .min(1, 'Selecione sua data de nascimento')
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0)
      return selectedDate < today;
    }, {
      message: 'A data de nascimento deve ser anterior ao dia atual'
    }),

    password: zod
    .string()
    .min(1, 'Digite sua senha')
    .min(6, 'A senha deve conter 6 caracteres')

})



export const formSignup = (onSubmitHandler: (data: SignupType) => void) => {
    const {
    register, 
    handleSubmit, 
    formState: {errors}
    } = useForm<FormPropsSignup>({
        mode: 'onBlur',
        resolver: zodResolver(zodSignupValidate)
    
    })

    const onSubmit = handleSubmit(onSubmitHandler)

    return {
        handleSubmit,
        register,
        errors,
        onSubmit
    }
}

