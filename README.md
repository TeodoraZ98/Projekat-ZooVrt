## ZooVrt – ASP.NET Core Web API

ZooVrt is a C# ASP.NET Core Web API project designed for managing a virtual zoo system. It provides endpoints for managing zoos, animals, and directors, including CRUD operations, relational mapping, and simple inventory adjustments.

## Features

- List all zoos and view their associated animals and directors  
- Add new animals to specific zoos  
- Update the quantity of animals in the zoo  
- Remove directors from the system  
- Entity relationships managed with Entity Framework Core  
- Data persisted using a relational database  

## Key Endpoints

- GET /ZooloskiVrt/vratiZooVrtove – Returns a list of all zoos, including animals and directors  
- POST /ZooloskiVrt/dodajZivotinju/{idzoo} – Adds a new animal to a specific zoo by ID  
- PUT /ZooloskiVrt/dodajKolicinu/{id}/{kolicina} – Updates the quantity of a specific animal  
- DELETE /ZooloskiVrt/brisiDirektora/{id} – Deletes a director by ID  

## Technologies Used

- C# / .NET 5  
- ASP.NET Core Web API  
- Entity Framework Core  
- JSON Serialization / Deserialization  
- Microsoft SQL Server or other EF-compatible databases  

## How to Run

1. Clone the repository:  
git clone https://github.com/TeodoraZ98/Zoo-Web-Project-CSharp.git  
cd Zoo-Web-Project-CSharp  

2. Open the solution in Visual Studio 2019 or later.  

3. Ensure a valid database connection string is set in appsettings.json.  

4. Run the application using IIS Express or Kestrel.  

5. Test endpoints using Swagger or Postman.  

## Folder Structure

- Controllers/ – Contains API controller files  
- Models/ – Entity classes for Zoo, Animal, and Director  
- Migrations/ – Entity Framework database migrations  
- ContextKlasa.cs – Database context setup  

## Author

Teodora Zlatanovic  
Computer Science graduate specializing in software development, based in Serbia.  
GitHub: [github.com/TeodoraZ98](https://github.com/TeodoraZ98)
