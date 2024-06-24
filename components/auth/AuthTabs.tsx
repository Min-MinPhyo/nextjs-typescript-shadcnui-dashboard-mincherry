import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RegisterForm from "./RegisterForm"
import LoginForm from "./LoginForm"
const AuthTabs = () => {
  return (
   
<Tabs defaultValue="register" className="w-[400px]">
  <TabsList className="w-full grid grid-cols-2">
    <TabsTrigger value="register">Register</TabsTrigger>
    <TabsTrigger value="login">Login</TabsTrigger>
  </TabsList>
  <TabsContent value="register"><RegisterForm/></TabsContent>
  <TabsContent value="login"><LoginForm/></TabsContent>
  
</Tabs>

 
  )
}

export default AuthTabs