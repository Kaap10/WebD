class PrinterQueue {
    constructor() {
      this.queue = new Queue();
    }
  
    addPrintJob(job) {
      this.queue.enqueue(job);
      console.log(`Print job added: ${job}`);
    }
  
    processPrintJobs() {
      while (this.queue.front() !== null) {
        const job = this.queue.dequeue();
        console.log(`Processing print job: ${job}`);
      }
    }
  }
  
  // Example usage
  const printer = new PrinterQueue();
  printer.addPrintJob("Document1");
  printer.addPrintJob("Document2");
  printer.addPrintJob("Document3");
  printer.processPrintJobs();
  // Output:
  // Print job added: Document1
  // Print job added: Document2
  // Print job added: Document3
  // Processing print job: Document1
  // Processing print job: Document2
  // Processing print job: Document3