'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AuthForm = ({ type } : { type: string }) => {
    const router = useRouter();

    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: ''
        },
      })
  
      const onSubmit = async (data: z.infer<typeof formSchema>) => {

        try {
            if(type === 'sign-in') {
                const response = ({
                 email: data.email,
                 password: data.password,
                })
     
                if(response) router.push('/')
               }
             } catch (error) {
               console.log(error);
             } finally {
           }
         }

    return (
        <section className="auth-form">
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link href="/" className="cursor-pointer flex item-center gap-1 px-4">
                    <Image
                        src="/icons/dollar-circle.svg"
                        width={34}
                        height={34}
                        alt="My Own Project"
                    />
                    <h1 className="text-26 front-ibm-plex-serif font-bold text-black-1">My Own Project</h1>
                </Link>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <CustomInput control={form.control} name='email'
                        label="Email" placeholder="Enter you Email" />

                    <CustomInput control={form.control} name='password'
                        label="Password" placeholder="Enter you Password" />

                        <Button type="submit" className="form-btn">Entrar</Button>
                    </form>
                </Form>
            </header>
        </section>
    )
}


export default AuthForm