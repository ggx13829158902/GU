import dynamic from "next/dynamic"
import { Suspense } from "react"

// Import static components normally
import { LoadingScreen } from "@/components/loading-screen"

// Dynamically import client components with SSR disabled
const DynamicHomePage = dynamic(() => import("@/components/home-page"), {
  ssr: false,
  loading: () => <LoadingScreen />,
})

export default function Home() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <DynamicHomePage />
    </Suspense>
  )
}
