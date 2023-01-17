import { getCsrfToken, getProviders } from "next-auth/react"

export default function SignIn({ csrfToken, providers }) {
  return (
    <>
      <form method="post" action="/api/auth/signin/email">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Email address
          <input type="email" id="email" name="email" />
        </label>
        <button type="submit">Sign in with Email</button>
      </form>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>

  )
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  const providers = await getProviders()
  return {
    props: { csrfToken, providers },
  }
}