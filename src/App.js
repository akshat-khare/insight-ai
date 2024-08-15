import React from 'react';
import { AlertCircle, Code, Zap, RefreshCcw } from 'lucide-react';

const Header = () => (
  <header className="bg-blue-600 text-white py-8">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold">Insight AI</h1>
      <p className="text-xl mt-2">Revolutionizing Code Migration and Upgrades</p>
    </div>
  </header>
);

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    <Icon className="text-blue-600 w-12 h-12 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </div>
);

const Statistic = ({ value, description }) => (
  <div className="text-center p-4 bg-white rounded-lg shadow-md">
    <p className="text-3xl font-bold text-blue-600">{value}</p>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The Problem We Solve</h2>
          <p className="text-lg mb-8">
            Engineers spend significant time migrating data and code from one service to another (e.g., Datadog to Grafana) or upgrading programming language versions (e.g., Java 8 to Java 17). This process is time-consuming, repetitive, and doesn't meaningfully expand their skillset.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Statistic value="33%" description="Developer time spent on maintenance tasks" />
            <Statistic value="58%" description="Developers spend >1 day/week on legacy systems" />
            <Statistic value="$5,600" description="Per minute cost of downtime during migration" />
            <Statistic value="70%" description="IT budgets spent on maintaining existing systems" />
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
          <p className="text-lg mb-8">
            Insight AI is an AI-powered platform that automates migrations and upgrades, producing first versions that developers can approve with minimal changes. Our AI agent understands your tech stack, provides sophisticated boilerplates, and continuously improves.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Key Benefits:</h3>
          <ul className="list-disc list-inside text-lg mb-8">
            <li>Save up to 70% of migration time</li>
            <li>Reduce errors through AI-driven processes</li>
            <li>Free engineers to focus on innovation</li>
            <li>AI learns and improves with each interaction</li>
          </ul>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Feature 
              icon={Code}
              title="Lossless Semantic Tree (LST)"
              description="Advanced code representation capturing all dependencies, type information, and formatting"
            />
            <Feature 
              icon={RefreshCcw}
              title="AI x Rule-based Cookbooks"
              description="Efficient, large-scale code transformations, e.g., updating API calls when migrating from Datadog to Grafana"
            />
            <Feature 
              icon={Zap}
              title="Show-and-tell flows"
              description="Demonstrate a transformation once, and our AI replicates it across your codebase"
            />
            <Feature 
              icon={AlertCircle}
              title="Self-hosted AI models"
              description="Run our AI models in your own environment using Docker for data privacy and security compliance"
            />
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Pricing</h2>
          <p className="text-lg mb-6">We use a credit-based system tied directly to the value we provide:</p>
          <ul className="list-disc list-inside text-lg mb-8">
            <li>Pay-per-use: Credits consumed based on transformation complexity</li>
            <li>Transparent pricing: Open-source approach for full visibility</li>
            <li>Value-driven: We charge only 5-10% of manual work costs</li>
            <li>Flexible: No fixed license or seat-based fees</li>
          </ul>
          <p className="text-lg font-semibold">ROI: For every $1 spent with us, expect to save $7-$8 in developer time and resources.</p>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-6">Success Story</h2>
          <p className="text-lg mb-8">Entrepreneur First migrated 50 Salesforce dashboards to Looker:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-100 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-xl">Without Insight AI:</h3>
              <p className="text-lg">100 hours, $6000 (Average Developer cost: $60/hour)</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-xl">With Insight AI:</h3>
              <p className="text-lg">10 hours, $600 (90% savings)</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-lg mt-8">
            <li>95%+ accuracy with human review</li>
            <li>Minimal learning curve (VSCode integration)</li>
            <li>Works with various tech stacks</li>
            <li>Self-hosted for data security</li>
            <li>Expert support available</li>
          </ul>
        </section>
      </main>
      
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 Insight AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;