import { isAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";
import ClientWrapper from "./client-wrapper";

const AdminPage = async () => {

  if (!isAdmin()) {
    redirect("/");
  }

  return <ClientWrapper />;
};

export default AdminPage;
