import { useQuery } from '@tanstack/react-query';
import { client } from 'apis';

const KEYS = {
  cloudInstance: ['cloud', 'instance'],
};

export const useCloudInstanceQuery = ({ cloudInstanceId }: { cloudInstanceId: number }) => {
  return useQuery<InstanceMetric>({
    queryKey: KEYS.cloudInstance,
    queryFn: async () => {
      const reponse = await client.get(`/v1/cloud-instances/${cloudInstanceId}`);
      return reponse.data;
    },
  });
};

type InstanceMetric = {
  cpuUtilizationMetricValues: MetricValueDTO[];
  memoryUtilizationMetricValues: MetricValueDTO[];
  diskUtilizationMetricValues: MetricValueDTO[];
};

type MetricValueDTO = {
  metricValuesDto: MetricValue[];
};

type MetricValue = {
  dateTime: string;
  value: number;
};
