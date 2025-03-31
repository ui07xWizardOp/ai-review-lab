import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ChevronLeftRight, Filter } from 'lucide-react';

const models = [
  { id: 1, name: "GPT-4o", company: "OpenAI" },
  { id: 2, name: "Claude 3 Opus", company: "Anthropic" },
  { id: 3, name: "Gemini Pro", company: "Google" },
  { id: 4, name: "Llama 3", company: "Meta" }
];

const popularComparisons = [
  { id: 1, title: "GPT-4o vs Claude 3 Opus" },
  { id: 2, title: "Gemini Pro vs Llama 3" },
  { id: 3, title: "Stable Diffusion XL vs DALL-E 3" },
  { id: 4, title: "Whisper vs Gemini Audio" }
];

const benchmarkData = [
  {
    name: 'Reasoning',
    'GPT-4o': 92,
    'Claude 3 Opus': 89,
    'Gemini Pro': 85,
    'Llama 3': 81,
  },
  {
    name: 'Factuality',
    'GPT-4o': 88,
    'Claude 3 Opus': 91,
    'Gemini Pro': 82,
    'Llama 3': 79,
  },
  {
    name: 'Writing',
    'GPT-4o': 94,
    'Claude 3 Opus': 92,
    'Gemini Pro': 88,
    'Llama 3': 86,
  },
  {
    name: 'Coding',
    'GPT-4o': 91,
    'Claude 3 Opus': 87,
    'Gemini Pro': 89,
    'Llama 3': 84,
  },
  {
    name: 'Instruction',
    'GPT-4o': 95,
    'Claude 3 Opus': 93,
    'Gemini Pro': 87,
    'Llama 3': 83,
  },
];

const customColors = ['#48d9bd', '#d87a79', '#4256ac', '#8a77ed'];

const ComparisonSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('benchmarks');
  
  return (
    <section className="py-20 px-4 section-focus" data-animate="true">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4">Compare Models</h2>
            <p className="text-muted-foreground mb-6">
              See how different AI models stack up against each other on key performance metrics.
            </p>
            
            <Card className="mb-6 bg-background/50 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <ChevronLeftRight className="mr-2 text-turquoise" size={20} />
                  Select Models to Compare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {models.map(model => (
                    <div key={model.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{model.name}</p>
                        <p className="text-sm text-muted-foreground">{model.company}</p>
                      </div>
                      <Button variant="outline" size="sm">Add</Button>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-san-marino hover:bg-san-marino/90">
                  Compare Selected
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Popular Comparisons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {popularComparisons.map(comparison => (
                    <Button
                      key={comparison.id}
                      variant="ghost"
                      className="w-full justify-start text-left hover:bg-muted"
                    >
                      {comparison.title}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="bg-background/50 backdrop-blur-sm border border-border/50 h-full">
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Performance Comparison</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Model benchmark scores across different capability categories
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <Filter size={16} className="mr-2" />
                  Filter
                </Button>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="benchmarks" value={selectedTab} onValueChange={setSelectedTab}>
                  <TabsList className="mb-6">
                    <TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
                    <TabsTrigger value="specs">Specifications</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing</TabsTrigger>
                    <TabsTrigger value="community">Community</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="benchmarks" className="mt-0">
                    <div className="h-[400px] mt-6">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={benchmarkData}
                          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                          barGap={5}
                          barSize={15}
                        >
                          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                          <XAxis dataKey="name" />
                          <YAxis domain={[0, 100]} />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'rgba(29, 23, 71, 0.8)', 
                              border: 'none', 
                              borderRadius: '8px',
                              color: '#fff'
                            }} 
                          />
                          <Legend />
                          {models.map((model, index) => (
                            <Bar
                              key={model.name}
                              dataKey={model.name}
                              fill={customColors[index % customColors.length]}
                              radius={[4, 4, 0, 0]}
                            />
                          ))}
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="text-center mt-4 text-sm text-muted-foreground">
                      Higher scores indicate better performance (Scale: 0-100)
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="specs">
                    <div className="text-center py-12 text-muted-foreground">
                      Specification comparison coming soon
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="pricing">
                    <div className="text-center py-12 text-muted-foreground">
                      Pricing comparison coming soon
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="community">
                    <div className="text-center py-12 text-muted-foreground">
                      Community ratings coming soon
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
