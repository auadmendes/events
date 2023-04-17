import { useSession, signIn, signOut } from "next-auth/react"
import { Container, LoginButton, LogoutButton, RegisterButton } from "../../styles/styles"
import { GoogleLogo } from 'phosphor-react'

export default function Login() {
  const { data: session } = useSession()
  return (
    <Container>
      <div>
        <input type="text" placeholder="Login" value={String(session?.user?.name)} />
        <input type="email" placeholder="Email" value={String(session?.user?.email)} />

        {!session?.user ? (
          <LoginButton onClick={() => signIn('google')}>
            <GoogleLogo size={24} /><span>Log in</span>
          </LoginButton>
        ) : (
          <>
            <LogoutButton onClick={() => signOut()}>
              <GoogleLogo size={24} /><span>Log out</span>
            </LogoutButton>
            <RegisterButton>
              Register now as {session.user.email} on Event-ES
            </RegisterButton>
          </>
        )}

      </div>
    </Container>
  )
}