// components/ServiceCard.tsx

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  isFeatured?: boolean; // Una prop opcional por si queremos resaltar alguna
}

export default function ServiceCard({ icon, title, description, isFeatured }: ServiceProps) {
  return (
    <div className={`p-8 border rounded-2xl shadow-sm hover:shadow-xl transition-all text-center ${
      isFeatured ? 'border-blue-500 bg-blue-50' : 'border-gray-100 bg-white'
    }`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}