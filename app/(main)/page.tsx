import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
export default function Home() {
  return (

    <>
    <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
      <DashboardCard
        title="Posts"
        count={100}
        icon={<Newspaper className="text-salte-500" size={40} />}
      />

      <DashboardCard
        title="Categories"
        count={10}
        icon={<Folder className="text-salte-500" size={40} />}
      />

      <DashboardCard
        title="Users"
        count={50}
        icon={<User className="text-salte-500" size={40} />}
      />

      <DashboardCard
        title="Comments"
        count={70}
        icon={<MessageCircle className="text-salte-500" size={40} />}
      />
       
    </div>

   <AnalyticsChart/>
   <PostsTable title="MinCherry" limit={5}/>



</>
  );
}
