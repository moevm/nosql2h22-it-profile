export class AdminService {
    async exportAllData(params: any) {
        let type = params.type;

        // Здесь будет запрос к БД на получение всех данных в один файл в формате type

        return type;
    }
}