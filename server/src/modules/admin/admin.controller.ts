import { Controller, Get, QueryParams, UseBefore } from "routing-controllers";
import { validate } from "../../shared/middlewares/validate";
import { AdminService } from "./admin.service";
import { ExportSchema } from "./schemas/export.schema";

@Controller("/admin")
export class AdminController {
    service: AdminService;

    constructor() {
        this.service = new AdminService();
    }

    @Get("/export")
    @UseBefore(validate({query: ExportSchema}))
    async exportAllData(@QueryParams() params: any) {
        return await this.service.exportAllData(params);
    }
}