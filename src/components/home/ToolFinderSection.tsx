
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Code, PenTool, Brain, BarChart3, MessageSquare } from 'lucide-react';

const categories = [
  { 
    id: 'writing',
    name: 'Writing & Content',
    icon: <PenTool className="h-5 w-5 mr-2" />,
    description: 'Tools for writing, editing, and content creation'
  },
  { 
    id: 'coding',
    name: 'Coding & Development',
    icon: <Code className="h-5 w-5 mr-2" />,
    description: 'Assistants for programming and software development'
  },
  { 
    id: 'analytics',
    name: 'Data & Analytics',
    icon: <BarChart3 className="h-5 w-5 mr-2" />,
    description: 'Tools for data processing and visualization'
  },
  { 
    id: 'creative',
    name: 'Creative & Design',
    icon: <Brain className="h-5 w-5 mr-2" />,
    description: 'AI-powered tools for creative professionals'
  },
  { 
    id: 'chatbots',
    name: 'Conversational AI',
    icon: <MessageSquare className="h-5 w-5 mr-2" />,
    description: 'Chatbots and conversational assistants'
  }
];

const ToolFinderSection: React.FC = () => {
  return (
    <section className="py-20 px-4 section-focus" data-animate="true">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Find the Best AI Tool for You</h2>
            <p className="text-muted-foreground mb-6">
              Answer a few questions about your needs and we'll recommend the perfect AI tools for your specific use case.
            </p>
            
            <Card className="bg-background/50 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="mr-2 text-turquoise" size={18} />
                  AI Tool Finder
                </CardTitle>
                <CardDescription>
                  Discover tools tailored to your specific requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      What type of tasks do you need help with?
                    </label>
                    <Tabs defaultValue="writing">
                      <TabsList className="grid grid-cols-2 sm:grid-cols-3 mb-4">
                        {categories.map(category => (
                          <TabsTrigger key={category.id} value={category.id}>
                            <div className="flex items-center">
                              {category.icon}
                              <span className="sr-only sm:not-sr-only">{category.name}</span>
                            </div>
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      
                      <div className="bg-muted/20 p-4 rounded-lg mb-4">
                        {categories.map(category => (
                          <TabsContent key={category.id} value={category.id}>
                            <p className="text-sm text-muted-foreground">{category.description}</p>
                          </TabsContent>
                        ))}
                      </div>
                    </Tabs>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Do you have any specific requirements?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="justify-start h-auto py-2 px-3">
                        Free/Open Source
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-2 px-3">
                        API Available
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-2 px-3">
                        No-code Friendly
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-2 px-3">
                        Enterprise Ready
                      </Button>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-turquoise to-san-marino hover:opacity-90 text-white">
                    Find Tools
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Topics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TopicCard 
                title="Text Generation"
                count={12}
                color="from-turquoise/80 to-turquoise"
              />
              <TopicCard 
                title="Image Generation"
                count={8}
                color="from-san-marino/80 to-san-marino"
              />
              <TopicCard 
                title="Code Assistants"
                count={15}
                color="from-new-york-pink/80 to-new-york-pink"
              />
              <TopicCard 
                title="Text-to-Speech"
                count={6}
                color="from-purple-500/80 to-purple-500"
              />
              <TopicCard 
                title="Data Analysis"
                count={9}
                color="from-blue-500/80 to-blue-500"
              />
              <TopicCard 
                title="Content Creation"
                count={14}
                color="from-indigo-500/80 to-indigo-500"
              />
            </div>
            
            <div className="mt-8">
              <Button variant="outline" className="w-full">View All Categories</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TopicCardProps {
  title: string;
  count: number;
  color: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, count, color }) => {
  return (
    <div 
      className={`rounded-lg p-4 hover-lift bg-gradient-to-br ${color} text-white`}
    >
      <h4 className="font-bold">{title}</h4>
      <p className="text-white/80">{count} tools</p>
    </div>
  );
};

export default ToolFinderSection;
