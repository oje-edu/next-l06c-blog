

export default function Login() {
  return (
    <div>
      <form method="POST" action="/api/login">
        <input type="text" name="username" defaultValue="admin" />
        <input type="password" name="password" defaultValue="admin" />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}