# Warehouse Vision

**Warehouse Vision** is an interactive warehouse management tool designed to help visualize, plan, and manage racking spaces within a warehouse.  
It features a customizable "warehouse designer" where users can create and adjust warehouse layouts on a resizable grid — each grid square representing one pallet's worth of racking space.

---

## Technologies Used

- ⚛️ [React](https://react.dev/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [TailwindCSS](https://tailwindcss.com/)
- 🧩 [Shadcn UI](https://ui.shadcn.dev/)
- 🖱️ [dnd-kit](https://dndkit.com/) (drag and drop library)

*(More dependencies may be added as the project evolves.)*

---

## Features

- 📦 **Warehouse Designer**  
  Select and customize your warehouse layout using a resizable grid where each square represents a pallet-sized space.

- 🛠️ **Configurable Grid System**  
  Adjust grid dimensions to match different warehouse layouts and racking strategies.

- 💻 **Modern UI**  
  Built with TailwindCSS and Shadcn UI for a clean, responsive design.

---

## Features To Be Added

- 🖱️ **Drag and Drop Pallet Management**  
  - Drag and drop pallets onto racking spaces.
  - Dynamically update pallet locations in the backend warehouse management system.

- 🔄 **Real-time Backend Sync**  
  - Changes made on the grid will persist and sync with the backend.

- 📊 **Inventory Overview**  
  - Visual summaries of current warehouse capacity, pallet locations, and storage efficiency.

- 📱 **Mobile-Friendly Controls**  
  - Optimized interface for touch and small screens.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/warehouse-vision.git
cd warehouse-vision
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Start the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The app will be running locally at [http://localhost:5173](http://localhost:5173).

---

## Project Structure (Example)

```
├── public/
├── src/
│   ├── components/         # Reusable UI components (e.g., Grid, Racking Units)
│   ├── features/designer/  # Warehouse designer specific logic
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # Tailwind and global styles
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [dnd-kit](https://dndkit.com/) for drag-and-drop interactions
- [TailwindCSS](https://tailwindcss.com/) for styling
- [Shadcn UI](https://ui.shadcn.dev/) for ready-to-use headless components

---