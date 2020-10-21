<script lang="ts">
    import type {TaskData} from "../types";
    import type {TaskListStore} from "../stores/task-list";
    import {createEventDispatcher} from "svelte";
    import Task from "./Task.svelte";

    const dispatch = createEventDispatcher();

    export let current: boolean;
    export let taskList: TaskListStore;

    function moveLeft(task: TaskData) {
        taskList.remove(task);
        dispatch("left", task);
    }

    function moveRight(task: TaskData) {
        taskList.remove(task);
        dispatch("right", task);
    }
</script>

<style lang="less">
    task-list {
        display: block;
        padding: 5px;
    }
</style>

<task-list>
    {#each taskList as task (task.id)}
        <Task
                {current}
                bind:title={task.title}
                on:changed={() => taskList.identity()}
                on:close={() => taskList.remove(task)}
                on:moveDown={() => taskList.moveDown(task)}
                on:moveBottom={() => taskList.moveBottom(task)}
                on:moveUp={() => taskList.moveUp(task)}
                on:moveTop={() => taskList.moveTop(task)}
                on:moveLeft={() => moveLeft(task)}
                on:moveRight={() => moveRight(task)}
        />
    {/each}
</task-list>
