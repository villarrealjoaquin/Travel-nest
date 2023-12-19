import { create } from 'zustand';
import { User } from '../../models';

interface State {
  accessToken: string | undefined;
  refreshToken: string | undefined;
  accessTokenData: User | undefined;
}

interface Actions {
  setAccessToken: (accessToken: string) => void;
  setAccessTokenData: (data: User | undefined) => void;
  setRefreshToken: (refreshToken: string) => void;
}

export const useAuthStore = create<State & Actions>((set) => ({
  accessToken: '',
  accessTokenData: undefined,
  refreshToken: '',
  setAccessToken: (accessToken) => set({ accessToken }),
  setAccessTokenData: (accessTokenData) => set({ accessTokenData }),
  setRefreshToken: (refreshToken) => set({ refreshToken }),
}))

export const authActions = {
  setAccessToken: (accessToken: string) => useAuthStore.getState().setAccessToken(accessToken),
  setAccessTokenData: (data: User | undefined) => useAuthStore.getState().setAccessTokenData(data),
  setRefreshToken: (refreshToken: string) => useAuthStore.getState().setRefreshToken(refreshToken),
};