import { postApi } from "..";
import Config from '../../../constants/config';

const initialData = (params: {userId: string}) => {
  return postApi(Config.apis.app.initialData, params);
}

export const AppService = {
  initialData
} ;