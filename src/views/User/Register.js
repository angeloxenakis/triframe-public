import React from 'react'
import { tether, Container, Title } from '@triframe/designer'
import { VUser } from './'
import { Navigation } from '../Navigation'

export const Register = tether(function* ({ Api }) {

    const { User } = Api

    const form = yield new User({ email: '', password: '', profileUrl: '', name: '', confirmPassword: '' })

    const registerUser = async (newUser) => {
        if(newUser.password !== newUser.confirmPassword) throw Error('Passwords do not match')
        await User.register(newUser)
        form.email = ''
        form.profileUrl = ''
        form.password = ''
        form.confirmPassword = ''
    }

    return (
        <>
            <Navigation.Bar />
            <Container>
                <Title>Register</Title>
                <VUser.Form
                    value={form}
                    onSubmit={registerUser}
                />
            </Container>
        </>
    )
})