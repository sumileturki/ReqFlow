# ReqFlow 🚀

A modern, collaborative API testing and development platform built with Next.js 15, featuring real-time WebSocket testing, request collections, and team collaboration tools.

## ✨ Features

### 🔧 API Testing
- **REST API Testing**: Support for GET, POST, PUT, PATCH, DELETE methods
- **Request Builder**: Intuitive interface for building HTTP requests
- **Response Viewer**: Detailed response analysis with syntax highlighting
- **Request History**: Track and replay previous requests
- **Monaco Editor**: Advanced code editing with syntax highlighting
- **Hotkey Support**: Keyboard shortcuts for efficient workflow (Ctrl+S to save, Ctrl+G for new request)

### 🌐 WebSocket Testing
- **Real-time Connection**: Connect to WebSocket servers
- **Message Editor**: Send and receive WebSocket messages
- **Connection Management**: Easy connection/disconnection controls
- **Message Logging**: Track all sent and received messages

### 👥 Team Collaboration
- **Workspace Management**: Create and manage multiple workspaces
- **Team Invitations**: Invite team members via email tokens
- **Role-based Access**: Admin, Editor, and Viewer roles
- **Collection Sharing**: Share API request collections with team members

### 📁 Organization
- **Request Collections**: Organize requests into folders
- **Request Management**: Save, edit, and delete requests
- **Search & Filter**: Find requests quickly
- **Import/Export**: Share collections across workspaces

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **Monaco Editor** for code editing
- **Zustand** for state management
- **TanStack Query** for data fetching
- **React Hook Form** with Zod validation

### Backend
- **Next.js API Routes** (Server Actions)
- **Prisma** ORM with PostgreSQL
- **Better Auth** for authentication
- **Axios** for HTTP requests

### Development Tools
- **ESLint** for code linting
- **TypeScript** for type safety
- **Turbopack** for fast builds
- **Hotkeys** for keyboard shortcuts

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd postboy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/postboy"
   BETTER_AUTH_SECRET="your-secret-key"
   BETTER_AUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
postboy/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   ├── (workspace)/              # Main workspace routes
│   ├── api/                      # API routes
│   └── invite/                   # Invitation handling
├── components/                   # Shared UI components
│   └── ui/                       # Radix UI components
├── modules/                      # Feature modules
│   ├── authentication/          # Auth components & actions
│   ├── collections/             # Request collections
│   ├── invites/                 # Team invitations
│   ├── layout/                   # Layout components
│   ├── realtime/                # WebSocket functionality
│   ├── requests/                # API request handling
│   └── workspaces/               # Workspace management
├── lib/                          # Utility libraries
├── hooks/                        # Custom React hooks
├── prisma/                       # Database schema & migrations
└── public/                      # Static assets
```

## 🔑 Key Features Explained

### Request Playground
The main interface for API testing featuring:
- **Tabbed Interface**: Multiple requests in tabs
- **Method Selection**: Choose HTTP method with color coding
- **URL Input**: Enter target endpoints
- **Headers & Parameters**: Configure request details
- **Body Editor**: JSON, form data, and raw text support
- **Response Analysis**: Status codes, headers, timing, and data

### Collections Management
Organize your API requests:
- **Folder Structure**: Hierarchical organization
- **Request Persistence**: Save requests to collections
- **Team Sharing**: Collaborate on collections
- **Search & Filter**: Quick request discovery

### WebSocket Testing
Real-time communication testing:
- **Connection Management**: Connect to WebSocket endpoints
- **Message Exchange**: Send and receive messages
- **Connection Status**: Visual connection indicators
- **Message History**: Track communication flow

### Team Collaboration
Work together effectively:
- **Workspace Creation**: Multiple project spaces
- **Member Management**: Invite and manage team members
- **Role Permissions**: Control access levels
- **Invitation System**: Secure team invitations

## 🎯 Usage Examples

### Creating a New Request
1. Click the "+" button or use `Ctrl+G` to create a new tab
2. Select HTTP method (GET, POST, etc.)
3. Enter the target URL
4. Add headers and parameters as needed
5. Configure request body for POST/PUT requests
6. Click "Send" to execute the request

### Saving to Collections
1. Create or select a collection
2. Use `Ctrl+S` to save the current request
3. Give the request a meaningful name
4. The request is now saved and can be reused

### WebSocket Testing
1. Navigate to the WebSocket tab
2. Enter the WebSocket server URL
3. Click "Connect" to establish connection
4. Send messages using the message editor
5. View received messages in the log

## 🔧 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production with Turbopack
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🗄️ Database Schema

The application uses PostgreSQL with the following main entities:

- **Users**: Authentication and profile information
- **Workspaces**: Project spaces for team collaboration
- **WorkspaceMembers**: Team member relationships with roles
- **Collections**: Request organization folders
- **Requests**: Individual API requests with configuration
- **RequestRuns**: Execution history and results
- **WorkspaceInvites**: Team invitation system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Code editing powered by [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- Authentication handled by [Better Auth](https://www.better-auth.com/)
- Database management with [Prisma](https://www.prisma.io/)

---

**Postboy** - Making API testing collaborative and efficient! 🚀