// components/ActivityList.tsx
import { useEffect, useState } from 'react'

export const ActivityList = () => {
  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    // Fetch activities from localStorage on component mount
    const storedActivities = JSON.parse(localStorage.getItem('activities') || '[]');
    setActivities(storedActivities);
  }, []);

}

export default ActivityList;
