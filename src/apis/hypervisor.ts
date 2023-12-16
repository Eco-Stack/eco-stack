import { useQuery } from '@tanstack/react-query';
import { client } from 'apis';

const KEYS = {
  hypervisorMetrics: ['hypervisor', 'metrics'],
  hypervisorOverview: ['hypervisor', 'overview'],
};

export const useHypervisorMetricQuery = ({ hypervisorId }: { hypervisorId: number }) => {
  return useQuery({
    queryKey: KEYS.hypervisorMetrics,
    queryFn: async () => {
      const reponse = await client.get(`/v1/hypervisors/${hypervisorId}`);
      return reponse.data;
    },
  });
};

export const useHypervisorOverviewQuery = () => {
  return useQuery<Metrics>({
    queryKey: KEYS.hypervisorOverview,
    queryFn: async () => {
      const reponse = await client.get('/v1/hypervisors/outlines');
      return reponse.data;
    },
  });
};

/**
 *  "id": "Hypervisor 1",
    "hypervisorName": "Hypervisor Name 1",
    "metric": 0.2991366486808349 | 'NaN'
 */

type Metric = {
  id: string;
  hypervisorName: string;
  metric: number | string;
};

type Metrics = {
  cpuUsageAverageMetrics: Metric[];
  memoryUsageAverageMetrics: Metric[];
  diskUsageAverageMetrics: Metric[];
};
