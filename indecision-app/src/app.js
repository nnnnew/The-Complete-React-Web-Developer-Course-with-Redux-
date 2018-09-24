console.log('App.js is running!!');

// Create app object title/subtitle
let app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    option: ['one', 'two']
};

// JSX - Java script XML
let templete = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>app.subtitle</p>}
        <p>{app.option.length > 0 ? 'Here are your options': 'No options'}</p>
        {app.option.length > 0 &&
            <ol>
                <li>This is item one</li>
                <li>This is item two</li>
            </ol>
        }
    </div>
);

let user = {

};

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
};

let templeteTwo = (
    <div>
        <p>{user.name ? user.name : 'Anonymous'}</p>
        {(user.age && user.age) >= 20 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
let appRoot = document.getElementById('app');

ReactDOM.render(templete, appRoot);