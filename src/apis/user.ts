import { QueryClient, useMutation } from '@tanstack/react-query';
import { client } from 'apis';

// const queryClient = new QueryClient();

export const useSigninMutation = () =>
  useMutation({
    mutationFn: function (params: Login) {
      return client.post(`/v1/login`, params);
    },
    onSuccess: function () {
      // queryClient.invalidateQueries({ queryKey: KEYS.communityList });
    },
  });

export const useSignupMutation = () =>
  useMutation({
    mutationFn: function (params: Signup) {
      return client.post(`/v1/signup`, params);
    },
    onSuccess: function () {
      // queryClient.invalidateQueries({ queryKey: KEYS.communityList });
    },
  });

type Login = {};

type Signup = {};
