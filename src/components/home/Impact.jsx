import React from 'react';
import Card from '../ui/Card';

const Impact = () => {
  const impactAreas = [
    {
      title: 'Legal Literacy & Rights Awareness',
      description: 'Enhancing understanding of fundamental rights and legal procedures among citizens, especially the marginalized.',
      icon: '📚' // Changed icon
    },
    {
      title: 'Civic Participation & Advocacy',
      description: 'Encouraging active involvement in democratic processes and advocating for equitable policies and reforms.',
      icon: '📢' // Changed icon
    },
    {
      title: 'Capacity Building for Justice Seekers',
      description: 'Equipping individuals and communities with the skills and knowledge to navigate the legal system effectively.',
      icon: '🛠️' // Changed icon
    },
    {
      title: 'Policy Research & Reform',
      description: 'Conducting in-depth research to inform and influence the development of just and inclusive legal and civic policies.',
      icon: '⚖️' // Changed icon
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Key Impact Areas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactAreas.map((area, index) => (
            <Card key={index} hover className="p-6 text-center">
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;