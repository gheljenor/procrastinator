import {createTaskListStore, TaskListStore} from "./stores/task-list";
import type {TaskData} from "./types";

let fromHistory: boolean = true;

type State = {
    current: TaskData[],
    next: TaskData[],
}

const state: State = loadState();
history.replaceState(state, document.title);

export const current: TaskListStore = createTaskListStore(state.current);
export const next: TaskListStore = createTaskListStore(state.next);

export function loadState(): State {
    const state = localStorage.getItem("state");
    return state && JSON.parse(state) || {current: [], next: []};
}

export function storeState(state: State) {
    localStorage.setItem("state", JSON.stringify(state));
    console.debug("saved", "state", JSON.stringify(state));

    if (fromHistory) {
        fromHistory = false;
    } else {
        history.pushState(state, document.title);
    }
}

export function onPopState(event: PopStateEvent) {
    if (!event.state) {
        return;
    }

    fromHistory = true;

    current.set(event.state.current);
    next.set(event.state.next);

    console.debug("loaded", JSON.stringify(event.state));
}
