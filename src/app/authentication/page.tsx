import Header from "@/components/common/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignForm from "./components/sign-in-form";
import SignupForm from "./components/sign-up-form";

export default function AuthenticationPage() {
  return (
    <>
      <Header />
      <div className="flex w-full flex-col gap-6 p-5">
        <Tabs defaultValue="sign-in">
          <TabsList>
            <TabsTrigger value="sign-in">Entrar</TabsTrigger>
            <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in">
            <SignForm />
          </TabsContent>
          <TabsContent value="sign-up">
            <SignupForm />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
