import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
            <>
                <div className="not-found">
                    <h2>Sorry, That page cannot be found</h2>
                </div>  
                <div className="link">
                    <Link to="/">Back to the homepage</Link>
                </div>
            </>
    );
}

export default NotFound;