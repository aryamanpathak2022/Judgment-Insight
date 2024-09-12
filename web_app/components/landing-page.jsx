'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart3, Book, Gavel, Search, Upload } from "lucide-react";
import Link from "next/link"

export function LandingPageComponent() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-black text-white ">
        <Link className="flex items-center justify-center" href="#">
          <Gavel className="h-6 w-6 mr-2" />
          <span className="font-bold">Judgment Insight</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
  <Button variant="ghost" className="text-sm font-medium hover:bg-gray-800 hover:text-white hover:scale-105 transition-transform">
    <BarChart3 className="mr-2 h-4 w-4" />
    Prediction
  </Button>
  <Button variant="ghost" className="text-sm font-medium hover:bg-gray-800 hover:text-white hover:scale-105 transition-transform">
    <Search className="mr-2 h-4 w-4" />
    Insights
  </Button>
  <Button variant="ghost" className="text-sm font-medium hover:bg-gray-800 hover:text-white hover:scale-105 transition-transform">
    <Upload className="mr-2 h-4 w-4" />
    Upload Documents
  </Button>
  <Button variant="ghost" className="text-sm font-medium hover:bg-gray-800 hover:text-white hover:scale-105 transition-transform">
    <Book className="mr-2 h-4 w-4" />
    Laws Repository
  </Button>
</nav>

      </header>
      <main className="flex-1">
        <section className=" flex justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted bg-slate-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  AI-Driven Research Engine for Commercial Courts
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Revolutionize your legal research with advanced AI. Get predictions, insights, and access to comprehensive legal resources.
                </p>
              </div>
              <div className="space-x-4 ">
                <Button  >Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <BarChart3 className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-bold">Predictive Analytics</h3>
                <p className="text-sm text-muted-foreground">Forecast case outcomes with our advanced AI model</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Search className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-bold">Deep Insights</h3>
                <p className="text-sm text-muted-foreground">Uncover patterns and trends in legal data</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Upload className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-bold">Document Analysis</h3>
                <p className="text-sm text-muted-foreground">Upload and analyze legal documents with ease</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Book className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-bold">Comprehensive Repository</h3>
                <p className="text-sm text-muted-foreground">Access a vast database of laws and precedents</p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-muted  bg-slate-100">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Legal Research?</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Join the future of legal technology. Sign up now for a free trial.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Sign Up</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 Judgment Insight. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>)
  );
}