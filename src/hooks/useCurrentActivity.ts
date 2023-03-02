import axios, { isAxiosError } from "axios";
import { useAuthentication } from "./useAuthentication";
import { useQuery } from "react-query";
import { SnakeToCamelCaseNested } from "../utils/typeUtils";

export type CurrentActivityResponse = {
  started: string,
  duration: number,
  heartbeat: {
    project_name: string,
    language: string,
    editor_name: string,
    hostname: string
  }
}

export type CurrentActivity = Omit<SnakeToCamelCaseNested<CurrentActivityResponse>, "started"> & {
  started: Date
}

export const useCurrentActivity = (username: string) => {
  const { token } = useAuthentication();

  const { data: currentActivity } = useQuery(["currentActivity", username], async () => {
    try {
      const response = await axios.get<CurrentActivityResponse>(`/users/${username}/activity/current`, {
        headers: { Authorization: `Bearer ${token ?? ""}` }
      });

      return {
        started: new Date(response.data.started),
        duration: response.data.duration,
        heartbeat: {
          projectName: response.data.heartbeat.project_name,
          language: response.data.heartbeat.language,
          editorName: response.data.heartbeat.editor_name,
          hostname: response.data.heartbeat.hostname
        }
      } satisfies CurrentActivity;
    }
    catch (e) {
      if (isAxiosError(e) && e.response?.status === 404) {
        return null;
      }

      throw e;
    }
  }, {
    refetchInterval: 10000
  });

  return currentActivity;
};
