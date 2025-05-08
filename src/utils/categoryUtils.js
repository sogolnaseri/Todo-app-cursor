export const getCategoryIcon = (category) => {
  switch (category) {
    case 'produce':
      return '🌿';
    case 'dairy':
      return '🥛';
    case 'meat':
      return '🥩';
    case 'frozen':
      return '❄️';
    case 'snacks':
      return '🍿';
    case 'beverages':
      return '🥤';
    case 'pantry':
      return '🥫';
    default:
      return '📦';
  }
};

export const categories = [
  { id: 'produce', name: 'Produce', bgColor: 'bg-green-100', textColor: 'text-green-800' },
  { id: 'dairy', name: 'Dairy', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
  { id: 'meat', name: 'Meat', bgColor: 'bg-yellow-100', textColor: 'text-yellow-800' },
  { id: 'frozen', name: 'Frozen', bgColor: 'bg-cyan-100', textColor: 'text-cyan-800' },
  { id: 'snacks', name: 'Snacks', bgColor: 'bg-orange-100', textColor: 'text-orange-800' },
  { id: 'beverages', name: 'Beverages', bgColor: 'bg-purple-100', textColor: 'text-purple-800' },
  { id: 'pantry', name: 'Pantry', bgColor: 'bg-red-100', textColor: 'text-red-800' },
  { id: 'other', name: 'Other', bgColor: 'bg-gray-100', textColor: 'text-gray-800' }
]; 