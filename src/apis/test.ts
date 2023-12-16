import { useQuery } from '@tanstack/react-query';
import { client } from 'apis';

export const useTestQuery = () => {
  return useQuery({
    queryKey: ['test'],
    queryFn: async () => {
      console.log('TEST');
      const reponse = await client.get('/test');
      return reponse.data.data;
    },
  });
};
