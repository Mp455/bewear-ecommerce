import { headers } from "next/headers";
import { redirect } from "next/navigation";

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { getCartWithDetailsByUserId } from "@/data/cart/get-cart-with-details-by-user-id";
import { getShippingAddressesByUserId } from "@/data/shipping-address/get-shipping-addresses-by-user-id";
import { auth } from "@/lib/auth";

import CartSummary from "../components/cart-summary";
import Addresses from "./components/addresses";

export default async function IdentificationPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user.id) {
    redirect("/");
  }
  const cart = await getCartWithDetailsByUserId(session.user.id);
  if (!cart || cart.items.length === 0) {
    redirect("/");
  }

  const shippingAddresses = await getShippingAddressesByUserId(session.user.id);

  const cartTotalInCents = cart.items.reduce(
    (acc, item) => acc + item.productVariant.priceInCents * item.quantity,
    0,
  );
  return (
    <div>
      <Header />
      <div className="space-y-4 px-5">
        <Addresses
          shippingAddresses={shippingAddresses}
          defaultShippingAddressId={cart.shippingAddress?.id || null}
        />
        <CartSummary
          subtotalInCents={cartTotalInCents}
          totalInCents={cartTotalInCents}
          products={cart.items.map((item) => ({
            id: item.productVariant.id,
            name: item.productVariant.product.name,
            variantName: item.productVariant.name,
            quantity: item.quantity,
            priceInCents: item.productVariant.priceInCents,
            imageUrl: item.productVariant.imageUrl,
          }))}
        />
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
