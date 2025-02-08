import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FeatureBlock } from "@/components/feature-block"
import { Testimonial } from "@/components/testimonial"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <section className="w-full max-w-6xl mx-auto px-4 py-0 text-center">
        {/* Navigation */}
        <nav className="w-full py-4 px-6 flex justify-between items-center">
          <Image src="/placeholder.svg?height=30&width=120" alt="Baseloop" width={120} height={30} />
          <div className="flex gap-4">
            <Button variant="ghost">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </nav>
      </section>

      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4">
          Relevant LinkedIn™ <br />
          Prospecting, Automated with AI
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Baseloop helps you find the most relevant leads on LinkedIn, get the context they sell with personalized
          outreach at scale.
        </p>
        <Button size="lg" className="rounded-full px-8 bg-black text-white hover:bg-gray-800">
          Start Free Trial
        </Button>

        <div className="mt-16 mb-20">
          <Image
            src="/homepage.webp"
            alt="Baseloop Dashboard"
            width={1000}
            height={600}
            className="rounded-lg shadow-2xl"
          />
        </div>

        {/* Logo Cloud */}
        <div className="grid grid-cols-6 gap-8 items-center justify-items-center opacity-70 max-w-4xl mx-auto">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Image
                key={i}
                src="/placeholder.svg?height=40&width=120"
                alt="Client Logo"
                width={120}
                height={40}
                className="h-8 w-auto grayscale opacity-60"
              />
            ))}
        </div>
      </section>

      {/* Problem Statement */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">
            Your ideal clients are on LinkedIn™, but you <br />
            are spending too many hours on manual <br />
            data collection and research.
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Sales Navigator's basic search doesn't help you find prospects",
                description: "and prospecting takes too much time",
              },
              {
                title: "Contact information isn't automatically enriched",
                description: "additional research and verification is needed",
              },
              {
                title: "LinkedIn's strict engagement limits",
                description: "prevent you from reaching out to prospects at scale",
              },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 text-red-500">●</div>
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <Button size="lg" className="mt-12 rounded-full px-8 bg-black text-white hover:bg-gray-800">
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Find and connect with the most relevant prospects on <br />
            LinkedIn™ in minutes
          </h2>

          <FeatureBlock
            title="Create Targeted Lists"
            description="Connect with Sales Navigator searches you love and create targeted lists of prospects. Save time by using our AI to find the most relevant leads."
            bulletPoints={[
              "Connect your Sales Navigator searches to import contacts",
              "Use our AI to find the most relevant leads",
              "Filter and search companies that match your ICP",
            ]}
            image="/placeholder.svg?height=600&width=800"
            buttonText="Start Free Trial"
          />

          <FeatureBlock
            title="Replace manual research with our AI agent"
            description="Get our AI agent to gather any information about companies and prospects. Save time by automating manual research."
            bulletPoints={[
              "Speed up your research, profile, publicly available information about your prospects",
              "Get insights about companies and their tech stack",
              "Use our AI to research specific details relevant for your outreach",
            ]}
            image="/placeholder.svg?height=600&width=800"
            imagePosition="left"
          />

          <FeatureBlock
            title="Context beats your competitors can't reach"
            description="Automatically learn difficult to get context about your prospects and use it to write highly personalized outreach."
            bulletPoints={[
              "Use AI to find valuable and unique context",
              "Write messages that stand out with our AI",
              "Get ahead by automating outreach with digital signals",
            ]}
            image="/placeholder.svg?height=600&width=800"
          />

          <FeatureBlock
            title="Write unique messages at scale"
            description="Use our trained AI to write unique messages for every prospect based on their context."
            bulletPoints={[
              "Write highly personalized messages at scale",
              "Use context to make your outreach stand out",
              "Get better results by reaching out at scale",
            ]}
            image="/placeholder.svg?height=600&width=800"
            imagePosition="left"
          />

          <FeatureBlock
            title="Connect to your campaign tool & send"
            description="Send your leads and unique messages to your campaign tool and start connecting."
            bulletPoints={[
              "Get your data cleaned ready to be used",
              "Connect with your CRM or other campaigns",
              "Start your first 100% direct & personal outreach",
            ]}
            image="/placeholder.svg?height=600&width=800"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">
            Meet the teams using Baseloop to find and <br />
            connect with the most relevant prospects <br />
            on LinkedIn™ in minutes.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mike Johnson",
                role: "Sales Development Manager",
                company: "Acme Corp",
                image: "/placeholder.svg?height=80&width=80",
                quote: "Really helped us increase our outreach efficiency while maintaining high personalization.",
              },
              {
                name: "Sarah Smith",
                role: "Head of Sales",
                company: "TechStart",
                image: "/placeholder.svg?height=80&width=80",
                quote: "Baseloop has transformed our prospecting process completely.",
              },
              {
                name: "Thomas Turner",
                role: "Business Development",
                company: "GrowthCo",
                image: "/placeholder.svg?height=80&width=80",
                quote: "The AI-powered research saves us countless hours every week.",
              },
            ].map((testimonial, i) => (
              <Testimonial key={i} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            These companies are using Baseloop to <br />
            reach more leads and get more meetings. <br />
            When will you?
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Say goodbye to hours spent on manual data collection and research and upgrade to an efficient lead
            generation process in a matter of hours, and get a 14-day free trial.
          </p>

          {/* Logo Cloud */}
          <div className="grid grid-cols-6 gap-8 items-center justify-items-center opacity-70 max-w-4xl mx-auto mb-12">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Image
                  key={i}
                  src="/placeholder.svg?height=40&width=120"
                  alt="Client Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto grayscale opacity-60"
                />
              ))}
          </div>

          <Button size="lg" className="rounded-full px-8 bg-black text-white hover:bg-gray-800">
            Start Free Trial
          </Button>
        </div>
      </section>
    </main>
  )
}

