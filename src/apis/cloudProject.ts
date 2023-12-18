import { useQuery } from '@tanstack/react-query';
import { client } from 'apis';

const KEYS = {
  cloudProjectOverview: ['cloud', 'overview'],
  projectOverview: ['project', 'overview'],
  projectDetail: ['project', 'detail'],
};

export const useCloudProjectOverviewQuery = () => {
  return useQuery<Projects>({
    queryKey: KEYS.cloudProjectOverview,
    queryFn: async () => {
      const reponse = await client.get(`/v1/projects/outlines`);
      return reponse.data;
    },
  });
};

export const useProjectOverviewQuery = ({ projectId }: { projectId: string }) => {
  return useQuery<InstanceData>({
    queryKey: KEYS.projectOverview,
    queryFn: async () => {
      const reponse = await client.get(`/v1/projects/${projectId}/dashboards`);
      return reponse.data;
    },
  });
};

export const useProjectDetailQuery = ({ projectId }: { projectId: string }) => {
  return useQuery<ProjectDetail>({
    queryKey: KEYS.projectDetail,
    queryFn: async () => {
      const reponse = await client.get(`/v1/projects/${projectId}/overviews`);
      return reponse.data;
    },
  });
};

// Types

type Project = {
  id: string;
  name: string;
  value: number;
};

type ResourceUsingProject = {
  id: string;
  name: string;
  cpuUtilization: number;
  memoryUtilization: number;
  cloudInstanceCnt: number;
};

type Projects = {
  mostInstanceCntProject: Project[];
  mostInstanceIncreaseProject: Project[];
  mostInstanceDecreaseProject: Project[];
  mostResourceUsingProject: ResourceUsingProject[];
};

type ResourceIntensiveCloudInstance = {
  id: string;
  cpuUsage: number;
  memoryUsageInBytes: number;
  diskUsage: number;
};

type InstanceData = {
  instanceCnt: number;
  instanceDiff: number;
  resourceIntensiveCloudInstances: ResourceIntensiveCloudInstance[];
};

type ProjectDetail = {
  id: string;
  name: string;
  instanceCnt: number;
  createdDate: string;
  owner: string;
};
