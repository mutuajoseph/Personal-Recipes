import { Link } from 'react-router-dom'


export const Welcome = () => {
    return (
        <div>
            <h1>Welcome to the Recipe Planner</h1>
            <p>Your one-stop solution for managing and planning your recipes.</p>

            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <Link to="/add-recipe" style={{ textDecoration: 'none', color: 'blue' }}>
                    <button style={{ padding: '10px 20px', fontSize : '16px' }}>Add Recipe</button>
                </Link>
                <Link to="/view-recipes" style={{ textDecoration: 'none', color: 'blue' }}>
                    <button style={{ padding: '10px 20px', fontSize : '16px' }}>View Recipes</button>
                </Link>
            </div>
        </div>
    );
}