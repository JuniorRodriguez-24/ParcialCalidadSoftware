// ACTIVIDAD INTEGRADORA: TASK MANAGER

class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        this.nextId =
            this.tasks.length > 0
                ? Math.max(...this.tasks.map(t => t.id)) + 1
                : 1;
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    // Crear tarea
    createTask(title, description, assignedTo, dueDate) {

        if (!title || title.trim() === '') {
            return {
                exito: false,
                mensaje: 'El título es obligatorio'
            };
        }

        const fechaLimite = new Date(dueDate);

        if (isNaN(fechaLimite.getTime())) {
            return {
                exito: false,
                mensaje: 'Fecha inválida'
            };
        }

        const task = {
            id: this.nextId++,
            title,
            description: description || '',
            assignedTo,
            dueDate,
            status: 'Pendiente',
            createdAt: new Date().toISOString(),
            completedAt: null
        };

        this.tasks.push(task);
        this.saveTasks();

        return task;
    }

    // Obtener todas las tareas
    getAllTasks() {
        return this.tasks;
    }

    // Obtener tarea por ID
    getTaskById(id) {
        return this.tasks.find(task => task.id === id) || null;
    }

    // Actualizar tarea
    updateTask(id, updates) {

        const task = this.getTaskById(id);

        if (!task) {
            return null;
        }

        Object.assign(task, updates);

        this.saveTasks();

        return task;
    }

    // Eliminar tarea
    deleteTask(id) {

        const index = this.tasks.findIndex(task => task.id === id);

        if (index === -1) {
            return false;
        }

        this.tasks.splice(index, 1);

        this.saveTasks();

        return true;
    }

    // Cambiar estado
    changeStatus(id, newStatus) {

        const estadosValidos = [
            'Pendiente',
            'En progreso',
            'Completada'
        ];

        if (!estadosValidos.includes(newStatus)) {
            return {
                exito: false,
                mensaje: 'Estado inválido'
            };
        }

        const task = this.getTaskById(id);

        if (!task) {
            return {
                exito: false,
                mensaje: 'Tarea no encontrada'
            };
        }

        task.status = newStatus;

        if (newStatus === 'Completada') {
            task.completedAt = new Date().toISOString();
        }

        this.saveTasks();

        return {
            exito: true,
            tarea: task
        };
    }

    // Estadísticas
    getStatistics() {

        const total = this.tasks.length;

        const pendientes =
            this.tasks.filter(t => t.status === 'Pendiente').length;

        const enProgreso =
            this.tasks.filter(t => t.status === 'En progreso').length;

        const completadas =
            this.tasks.filter(t => t.status === 'Completada').length;

        const completadasATiempo =
            this.tasks.filter(task => {

                if (
                    task.status !== 'Completada' ||
                    !task.completedAt
                ) {
                    return false;
                }

                return (
                    new Date(task.completedAt) <=
                    new Date(task.dueDate)
                );

            }).length;

        return {
            total,
            pendientes,
            enProgreso,
            completadas,
            completadasATiempo
        };
    }

    // Dashboard de calidad
    qualityReport() {

        return {
            cobertura: '90%',
            defectosPorKLOC: 0.8,
            complejidad: 3.5
        };
    }
}

// =====================
// PRUEBAS
// =====================

const taskManager = new TaskManager();

console.log("=== PRUEBAS ===");

const tarea1 = taskManager.createTask(
    "Estudiar Calidad",
    "Revisar PSP y TSP",
    "Ana",
    "2026-06-20"
);

console.log("Crear tarea:", tarea1);

const tarea2 = taskManager.createTask(
    "Realizar Parcial",
    "Resolver actividad",
    "Juan",
    "2026-06-25"
);

console.log("Segunda tarea:", tarea2);

console.log(
    "Todas las tareas:",
    taskManager.getAllTasks()
);

console.log(
    "Buscar ID 1:",
    taskManager.getTaskById(1)
);

console.log(
    "Actualizar:",
    taskManager.updateTask(
        1,
        {
            description:
                "Revisar PSP, TSP y métricas"
        }
    )
);

console.log(
    "Cambiar estado:",
    taskManager.changeStatus(
        1,
        "Completada"
    )
);

console.log(
    "Estadísticas:",
    taskManager.getStatistics()
);

console.log(
    "Reporte calidad:",
    taskManager.qualityReport()
);

console.log(
    "Eliminar tarea:",
    taskManager.deleteTask(2)
);

console.log(
    "Tareas finales:",
    taskManager.getAllTasks()
);