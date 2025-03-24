# Airline Reservation System

This is a simple airline reservation system built using Java, Spring Boot, and React. It provides a RESTful API for managing flight reservations and a frontend for users to interact with the system.

![Aplicação](https://github.com/user-attachments/assets/3741301e-d781-4cae-abb7-a75b2dbc8f05)

## Features
- Add new reservations
- Retrieve all reservations
- User-friendly interface built with React
- Uses Spring Boot with JPA for database management
- Integration with React Query for efficient data fetching

## Technologies Used
### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST API

### Frontend
- React
- TypeScript
- React Query
- Axios

## Installation

### Prerequisites
- Java 17 or later
- Maven
- Node.js and npm
- A database (e.g., PostgreSQL, MySQL, or H2 for testing)

### Steps
#### Backend Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```
2. Build the backend project:
   ```sh
   mvn clean install
   ```
3. Run the backend application:
   ```sh
   mvn spring-boot:run
   ```
4. The backend will be available at `http://localhost:8080/`

#### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend application:
   ```sh
   npm run dev
   ```
4. The frontend will be available at `http://localhost:5173/`

## API Endpoints
### Add a Reservation
**POST /reserves**
- Request Body:
  ```json
  {
    "location": "New York",
    "image": "image_url",
    "price": 300.0
  }
  ```
- Response: `201 Created`

### Get All Reservations
**GET /reserves**
- Response:
  ```json
  [
    {
      "id": 1,
      "location": "New York",
      "image": "image_url",
      "price": 300.0
    }
  ]
  ```

## Project Structure
```
├── backend
│   ├── com.airline
│   │   ├── AirlineApplication.java  # Main entry point
│   │   ├── controller
│   │   │   ├── ReserveController.java  # Handles API requests
│   │   ├── models
│   │   │   ├── Reserve.java  # Entity class
│   │   │   ├── ReserveRepository.java  # JPA Repository
│   │   │   ├── ReserveRequestDTD.java  # DTO for requests
│   │   │   ├── ReserveRespondeDTD.java  # DTO for responses
│
├── frontend
│   ├── src
│   │   ├── App.tsx  # Main React component
│   │   ├── components
│   │   │   ├── Card.tsx  # UI component for displaying reservations
│   │   │   ├── CreateModal.tsx  # UI component for adding reservations
│   │   ├── hooks
│   │   │   ├── useReserveData.ts  # Fetch reservations
│   │   │   ├── useReserveDataMutate.ts  # Add reservations
```

## License
This project is licensed under the MIT License.

---

Feel free to modify this README as needed!

