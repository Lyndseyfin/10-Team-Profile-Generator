const generateManager = (data) => {
    return   `<li>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">Levi</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 1</li>
                <li class="list-group-item">Email: <a href="levi@fakemail.com">Levi@fakemail.com</a></li>
                <li class="list-group-item">Office number: L1</li>
            </ul>
        </div>
    </div>`
};

const generateEngineer = (data) => {
    return  `<li>
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">Jeremy</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: 2</li>
                    <li class="list-group-item">Email: <a href="jeremy@gakemail.com">Jeremy@fakemail.com</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/JCtesttest" target="_blank" rel="noopener noreferrer">JCtesttest</a></li>
                </ul>
            </div>
        </div>`
    };
  

const generateIntern = (data) => {
    return `<li>
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">Chelsey</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: 3</li>
                    <li class="list-group-item">Email: <a href="chelsey@fakemail.com">Chelsey@fakemail.com</a></li>
                    <li class="list-group-item">School: CUDenver</li>
                </ul>
            </div>
        </div>`
};

const generateCards = (data) => {
    let htmlString ="";
    //data will be an array of Employees (Manager/Intern/Engineer)
    data.forEach((element) => {
        console.log(element)
        //generate a card based on role
        if (element.getRole() === "Manager") {
            let string = generateManager(element);
            htmlString += string;
        } 
        else if 
            (element.getRole() === "Engineer") {
                let string = generateEngineer(element);
                htmlString += string; 
                
        } 
        else if 
            (element.getRole() === "Intern") {
            let string = generateIntern(element);
            htmlString += string;
        }
    });
    return htmlString;
    
};


const generateHTML = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">Levi</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 1</li>
                <li class="list-group-item">Email: <a href="levi@fakemail.com">Levi@fakemail.com</a></li>
                <li class="list-group-item">Office number: L1</li>
            </ul>
        </div>
    </div>
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">Jeremy</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 2</li>
                <li class="list-group-item">Email: <a href="jeremy@gakemail.com">Jeremy@fakemail.com</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/JCtesttest" target="_blank" rel="noopener noreferrer">JCtesttest</a></li>
            </ul>
        </div>
    </div>
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">Chelsey</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 3</li>
                <li class="list-group-item">Email: <a href="chelsey@fakemail.com">Chelsey@fakemail.com</a></li>
                <li class="list-group-item">School: CUDenver</li>
            </ul>
        </div>
    </div>
    
                </div>
            </div>
        </div>

    </body>
        ${generateCards(data)}
    
    </html>`
};

module.exports = generateHTML;