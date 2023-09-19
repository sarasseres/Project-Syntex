import { AuthLogin } from '@/components/Auth/component/auth.Login';
import { AuthRegister } from '@/components/Auth/component/auth.Register';

export default function Page() {
  return (
    <div>
      <div>Project Synthex</div>
      <main className="my-12">
        <AuthLogin />
        <AuthRegister />
      </main>
      <footer>Designed by Synthex</footer>
    </div>
  );
}
