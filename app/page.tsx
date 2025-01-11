import { Dashboard } from "@/components/dashboard";
import { Header } from "@/components/header";
import { FreeSpin } from "@/components/freeSpin";
export default function Home() {
  return (
    <div className="py-5 bg-[url('../public/background.svg')]">
      <Header  />
      <Dashboard />
      <FreeSpin />
    </div>
  );
}
