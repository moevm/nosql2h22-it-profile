import { axiosInstance } from "../axios";


class StatsAPIs {

    async stats(params: Record<string, any>) {
        return await axiosInstance.get('stats', {
            params
        });
    }
}

export const statsAPIs = new StatsAPIs()