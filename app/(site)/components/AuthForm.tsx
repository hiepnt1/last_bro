'use client';
import Button from '@/app/components/buttons/Buttons';
// import Input from '@/app/components/inputs/input';
import Input from '../../components/inputs/Input'
import { useState, useCallback } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import AuthSocialButton from './AuthSocialButton';
import { BsGoogle, BsFacebook } from 'react-icons/bs'

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant("LOGIN")
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        if (variant === 'REGISTER') {
            // axios Register
        }

        if (variant === 'LOGIN') {
            // nextAuth signin
        }
    };

    const socialAction = (action: string) => {
        setIsLoading(true)
    }
    return (
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white px-4
            py-8
            shadow
            sm:rounded-lg
            sm:px-10'>
                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    {
                        variant === "REGISTER" && (
                            <Input label='name' id='name' type='text' register={register} errors={errors} />
                        )
                    }
                    <Input label="Email address" id="email" type='email' required errors={errors} disabled={isLoading} register={register} />
                    <Input label="password" id="password" type='password' required errors={errors} disabled={isLoading} register={register} />
                    <div>
                        <Button disabled={isLoading} fullWidth type='submit'>{variant === 'LOGIN' ? 'Sign in' : 'Register'}</Button>
                    </div>
                </form>

                <div className='mt-6'>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className=' bg-white px-2 text-gray-500'>
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton icon={BsGoogle} onClick={() => socialAction('google')} />
                        <AuthSocialButton icon={BsFacebook} onClick={() => socialAction('facebook')} />
                    </div>
                </div>

                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                    <div>
                        {variant === "LOGIN" ? "Let's go???" : "Already have a account!!!"}
                    </div>
                    <div onClick={toggleVariant} className=' underline cursor-pointer'>
                        {variant === "LOGIN" ? "Create an account!" : "Login"}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AuthForm;