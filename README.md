# Server Monitor

A real-time server health and log monitoring system designed to ingest, process, and detect anomalies in system logs to ensure application reliability and security.

## Features

- **Log Ingestion:** Integrates with log brokers (e.g., Prometheus) to capture system events.
- **Batch Processing:** Aggregates logs over specified time windows for batch analysis.
- **Anomaly Detection:** Filters routine logs and identifies anomalous events using specialized ML/AI models.
- **Automated Actions:** Triggers remote remediation workflows (e.g., via SSH) upon threat classification.

## Tech Stack

- **Runtime:** Node.js (ES Modules)
- **Package Manager:** pnpm v12.9.1

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (`pnpm@12.9.1`)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd server-monitor
   ```
