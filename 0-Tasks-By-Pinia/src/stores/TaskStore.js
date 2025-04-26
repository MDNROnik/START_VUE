import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks:[],
        name: "Task Storee",
        isLoading : false,
        valueChange: false,
    }),
    getters: {
        getFav () {
            return this.tasks.filter((task) => task.isFav === true);
        },
        getFavCount(state) {
            return state.tasks.filter((task) => task.isFav === true).length;
        },
        getTotalCount(state) {
            return state.tasks.length;
        }
    },
    actions: {
        async fetchTasks() {
            try {
                const response = await fetch("http://localhost:3000/tasks");
                const data = await response.json();
                this.tasks = data;
                this.isLoading = true;
            } catch (error) {
                console.error("Error fetching tasks:", error);
                this.isLoading = false;
            }

        },
        async addTask(task) {
            this.tasks.push(task);
            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {'Content-Type': 'application/json'}
            })
            this.valueChange = true;
        
            if (res.error) {
                console.log(res.error)
            }
        },
        async removeTask(id) {
            const url = "http://localhost:3000/tasks/" + id;
            const res = await fetch(url, { method: "DELETE" })
            .then(() => console.log("Task deleted"))
            .catch((err) => console.log(err));
        },
        async changeFav(id) {
            const task = this.tasks.find((task) => task.id === id);
            if (task) {
                task.isFav = !task.isFav;
            }
            const res = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'PATCH',
                body: JSON.stringify({ isFav: task.isFav }),
                headers: {'Content-Type': 'application/json'}
            })
        
            if (res.error) {
                console.log(res.error)
            }
        },
    },



})

