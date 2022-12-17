import { fetchInstance } from "../axios";

class StatsAPIs {

    async stats(params: Record<string, any>) {
        return await fetchInstance.get('stats', {
            params
        });
    }
}

export const statsAPIs = new StatsAPIs()