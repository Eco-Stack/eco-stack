import { useQuery } from '@tanstack/react-query';
import { client } from 'apis';

const KEYS = {
  cloudInstance: ['cloud', 'instance'],
};

export const useCloudInstanceQuery = (
  {
    cloudInstanceId,
    days,
  }: {
    cloudInstanceId: string;
    days: string;
  },
  enabled: boolean,
) => {
  return useQuery<InstanceMetric>({
    queryKey: [...KEYS.cloudInstance, cloudInstanceId, days],
    queryFn: async () => {
      const reponse = await client.get(`/v1/cloud-instances/${cloudInstanceId}?days=${days}`);
      return reponse.data;
    },
    enabled: enabled,
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
