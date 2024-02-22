import { signIn, signOut } from "@/app/api/auth/[…nextauth]"
import { Button } from "./ui/button"

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {

console.log('provider', provider)
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full"
    >
      <Button variant="ghost" className="w-full p-0" {...props}>
        Sign Out
      </Button>
    </form>
  )
}
