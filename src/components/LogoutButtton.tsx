"use client";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { use, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";





function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const errorMessage = "Failed to log out. Please try again later.";

    if (!errorMessage) {
      toast.success("Logged out successfully", {
        description: "You have been logged out.",
      });
      router.push("/login");
    } else {
      toast.error("Logout failed", {
        description: errorMessage,
      });
    }

    setLoading(false);
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogout}
      disabled={loading}
      className="w-24"
    >
      {loading ? <Loader2 className="animate-spin" /> : "Logout"}
    </Button>
  );
}

export default LogoutButton;
