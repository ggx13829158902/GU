import dynamic from "next/dynamic"
import { Suspense } from "react"
import { LoadingScreen } from "@/components/loading-screen"

// Dynamically import client components with SSR disabled
const DynamicLoginPage = dynamic(() => import("@/components/login-page"), {
  ssr: false,
  loading: () => <LoadingScreen />,
})

export default function LoginPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <DynamicLoginPage />
    </Suspense>
  )
}
