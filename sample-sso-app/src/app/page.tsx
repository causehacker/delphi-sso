import Embed from "./_components/embed";
import LoginButton from "./_components/login-btn";

export default function Home() {
  return (
    <main style={{ paddingTop: '30px' }}>
      <LoginButton />
      <Embed />
    </main>
  );
}