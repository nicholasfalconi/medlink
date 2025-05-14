// src/components/TeamSection.tsx
import { Users } from 'lucide-react';

interface Member {
  src: string;
  name?: string;
}

const members: Member[] = [
  { src: '/team/IMG_5084.jpeg', name: 'Alec Weller' },
  { src: '/team/IMG_4457.jpeg', name: 'Ervis Musa' },
  { src: '/team/hill_braede_headshot_fall2023.jpeg', name: 'Braeden Hill' },
  { src: '/team/IMG_7430.jpeg', name: 'Adam Levitan' },
  { src: '/team/14E93BF8-8332-4B80-A121-0F8D91B1722C.jpeg', name: 'Matey Juric' }
];

export const TeamSection: React.FC = () => (
  <section className="bg-gray-50 py-16 px-6">
    <div className="flex items-center justify-center mb-12 space-x-2">
      <Users className="w-8 h-8 text-blue-500" />
      <h2 className="text-3xl font-bold text-center">Meet the Team</h2>
    </div>
    <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
      {members.map((m, i) => (
        <div key={i} className="text-center">
          <img
            src={m.src}
            alt={m.name ?? 'Team member'}
            className="w-32 h-32 rounded-full object-cover mx-auto"
          />
          {m.name && (
            <p className="mt-4 text-lg font-medium text-gray-700">
              {m.name}
            </p>
          )}
        </div>
      ))}
    </div>
  </section>
);
