import { headers } from "next/headers";
import { redirect } from "next/navigation";

import Header from "@/components/common/header";
import { getOrders } from "@/data/orders/get-orders";
import { auth } from "@/lib/auth";

import Orders from "./components/orders";

export default async function MyOrdersPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user.id) {
    redirect("/login");
  }
  const orders = await getOrders(session.user.id);

  return (
    <>
      <Header />
      <div className="px-5">
        <Orders orders={orders} />
      </div>
    </>
  );
}
