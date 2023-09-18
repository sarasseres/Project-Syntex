import { AuthLogin } from "@/components/auth.Login";

export default function Page(){
  return (
    <div>
        <div>Project Synthex</div>
        <main className="my-12">
          <AuthLogin />
        </main>
        <footer>
          Designed by Synthex
        </footer>
    </div>
  );
};