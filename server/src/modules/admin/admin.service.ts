export class AdminService {
    async exportAllData(params: any) {
        let type = params.type;

        // Здесь будет запрос к БД на получение всех данных в один файл в формате type

        return type;
    }

    async importData(body: any) {
        // let type = body.type;
        
        let users = body.users;
        let experiences = body.experiences;
        let educations = body.educations;
        let additionalInformations = body.additions;

        // Здесь запрос к БД на добавление данных в соответствующие коллекции

        return body;
    }
}