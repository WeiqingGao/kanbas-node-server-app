import * as modulesDao from "./dao.js";

export default function ModuleRoutes(app) {
    app.delete("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        await modulesDao.deleteModule(moduleId);
        res.sendStatus(204);
    });

    app.put("/api/modules/:moduleId", (req, res) => {
        try {
            console.log("Request params:", req.params); // 检查 id
            console.log("Request body:", req.body);    // 检查 body 数据

            const {moduleId} = req.params;
            const moduleUpdates = req.body;
            modulesDao.updateModule(moduleId, moduleUpdates);
            res.sendStatus(204);
        } catch (error) {
            console.error("Error updating module:", error);
            res.status(500).send("Internal Server Error");
        }
    });
}
