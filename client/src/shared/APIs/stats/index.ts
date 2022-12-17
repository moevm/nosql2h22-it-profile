import { fetchInstance } from "../fetch";


class StatsAPIs {

    async stats(params: Record<string, any>) {
        return await fetchInstance.get('stats', {
            params
        });
    }
}

export const statsAPIs = new StatsAPIs()