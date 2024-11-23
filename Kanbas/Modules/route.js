import * as modulesDao from "./dao.js";

export default function ModuleRoutes(app) {
    app.delete("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        await modulesDao.deleteModule(moduleId);
        res.sendStatus(204);
    });

    app.put("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        const module = req.body;
        const updatedModule = await modulesDao.updateModule(moduleId, module);
        res.json(updatedModule);
    });
}
