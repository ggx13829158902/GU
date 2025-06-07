import dynamic from "next/dynamic"
import { Suspense } from "react"
import { LoadingScreen } from "@/components/loading-screen"

// Dynamically import client components with SSR disabled
const DynamicPortfolioPage = dynamic(() => import("@/components/portfolio-page"), {
  ssr: false,
  loading: () => <LoadingScreen />,
})

export default function PortfolioPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <DynamicPortfolioPage />
    </Suspense>
  )
}
