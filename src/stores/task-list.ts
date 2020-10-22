import type {TaskData} from "../types";
import {writable} from "svelte/store";

export function createTaskListStore(initialState: TaskData[]) {
    const store = writable<TaskData[]>(initialState);
    const subscribe: typeof store.subscribe = store.subscribe.bind(store);

    return {
        subscribe,
        moveUp(task: TaskData) {
            store.update(list => {
                const idx = list.indexOf(task);
                list.splice(idx, 1);
                list.splice(idx - 1, 0, task);
                return list;
            });
        },
        moveDown(task: TaskData) {
            store.update(list => {
                const idx = list.indexOf(task);
                list.splice(idx, 1);
                list.splice(idx + 1, 0, task);
                return list;
            });
        },
        moveTop(task: TaskData) {
            store.update(list => {
                list.splice(list.indexOf(task), 1);
                list.unshift(task);
                return list;
            });
        },
        moveBottom(task: TaskData) {
            store.update(list => {
                list.splice(list.indexOf(task), 1);
                list.push(task);
                return list;
            });
        },
        add(task: TaskData) {
            store.update(list => {
                list.push(task);
                return list;
            });
        },
        remove(task: TaskData) {
            store.update(list => {
                list.splice(list.indexOf(task), 1);
                return list;
            });
        },
        updateTask(task: TaskData, text: string) {
            store.update(list => {
                task.title = text;
                return list;
            });
        },
        set(values: TaskData[]) {
            store.set(values);
        },
    };
}

export type TaskListStore = ReturnType<typeof createTaskListStore>;
