import { AuthLogin } from '@/components/Auth/component/auth.Login';

export default function Page() {
  return (
    <div>
      Project Synthex
      <main className="my-12">
        <AuthLogin />
      </main>
      <footer>Designed by Synthex</footer>
    </div>
  );
}
