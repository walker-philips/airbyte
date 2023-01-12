import { useQuery } from "react-query";

import { useCurrentWorkspace } from "hooks/services/useWorkspace";
import { useDefaultRequestMiddlewares } from "services/useDefaultRequestMiddlewares";

import { webBackendGetFreeConnectorProgramInfoForWorkspace } from "../lib/domain/freeConnectorProgram/api";
import { useConfig } from "./config";

export const useFreeConnectorProgramInfo = () => {
  const { workspaceId } = useCurrentWorkspace();
  const { cloudApiUrl } = useConfig();
  const config = { apiUrl: cloudApiUrl };
  const middlewares = useDefaultRequestMiddlewares();
  const requestOptions = { config, middlewares };

  return useQuery(["freeConnectorProgramInfo", workspaceId], () =>
    webBackendGetFreeConnectorProgramInfoForWorkspace({ workspaceId }, requestOptions)
  );
};
