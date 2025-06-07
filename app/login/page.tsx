import dynamic from "next/dynamic";
import { Suspense } from "react";
import { LoadingScreen } from "@/components/loading-screen";

// Dynamically import client components with SSR disabled
const DynamicLoginPage = dynamic(() => import("@/components/login-page"), {
  ssr: false,
  loading: () => <LoadingScreen />,
});

export default function LoginPage() {
  return (
    <>
      <audio autoPlay loop className="hidden">
        <source src="/music/shining-background.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Suspense fallback={<LoadingScreen />}>
        <DynamicLoginPage />
      </Suspense>
    </>
  );
}
