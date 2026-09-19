class TaskQueue {
  constructor(name) {
    this.queueName = name;
    this.tasks = [];
  }

  addTask(taskFn, priority) {
    if (!taskFn || typeof taskFn !== 'function') {
      console.error('Task must be a function.');
      return;
    }

    const task = {
      taskFn,
      priority,
      timestamp: Date.now()
    };

    this.tasks.push(task);
  }
}

class TaskQueueProcessor {
  start(queue) {
    if (queue.tasks.length === 1) {
      console.log(`Starting queue ${queue.queueName}.`);
      queue.isProcessing = true;
    }
  }

  notifyHighPriority(queue, priority) {
    if (priority > 9) {
      console.warn(
        `High priority task added to ${queue.queueName}.`
      );
    }
  }
}