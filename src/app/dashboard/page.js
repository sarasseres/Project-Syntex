import { Dashboard } from '@/components/Dashboard/component/Dashboard';

async function getDashboard() {
  const res = await fetch(`https://eventmakers-api.vercel.app/api/event`, {
    cache: 'no-cache',
  });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { data } = await getDashboard();
  const author = data;
  console.log(author);
  return <Dashboard DashboardData={author} />;
}
