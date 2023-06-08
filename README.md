# Colombia-MunToDept

This is a Node.js application that uses Express to create a server. The server responds to two routes: `'/'` and `'/api/:municipio'`. It also reads data from a CSV file obtained from the [Open Data](https://www.datos.gov.co/en/Mapas-Nacionales/Departamentos-y-municipios-de-Colombia/xdk5-pm3f) page of the Colombian Government, which contains information about municipalities and their corresponding departments in Colombia.

## Installation

1. Clone the repository or download the source code files.
2. Make sure you have Node.js and npm (Node Package Manager) installed on your system.
3. Open a terminal or command prompt and navigate to the project directory.
4. Install the required dependencies by running the following command:

   ```
   npm install
   ```

## Usage

1. Ensure you are in the project directory using the terminal or command prompt.
2. Start the server in development mode by running the following command:

   ```
   npm run dev
   ```

   This will use `nodemon` to automatically restart the server whenever changes are made to the code.

   **OR**

   Start the server in production mode by running the following command:

   ```
   npm start
   ```

   This will start the server using Node.js.

3. The server will start running on port 5000 (or a different port if specified in the environment variables).
4. Open a web browser and navigate to `http://localhost:5000` (replace `5000` with the appropriate port number if different).
5. You should see the message "Hello World!" indicating that the server is running successfully.

## API Endpoint

### Get Departamento for a Municipio

To retrieve the corresponding "Departamento" (department) for a given "Municipio" (municipality), make a GET request to the following endpoint:

```
GET /api/:municipio
```

Replace `:municipio` in the endpoint with the name of the municipality for which you want to get the department.

For example, to get the department for "Bogota", make a GET request to `http://localhost:5000/api/Bogota` (replace `5000` with the appropriate port number if different).

The response will be the corresponding department name, or the same municipality name if no matching department is found.

## CSV Data

The application reads data from the `Departamentos_y_Municipios_de_Colombia.csv` file located in the same directory as the script file (`src/index.js`). The CSV data was obtained from the [Open Data](https://www.datos.gov.co/en/Mapas-Nacionales/Departamentos-y-municipios-de-Colombia/xdk5-pm3f) page of the Colombian Government.

## Note

Please ensure that you have the necessary permissions to read files and listen on the specified port.

Feel free to explore the code and make any modifications as needed.
