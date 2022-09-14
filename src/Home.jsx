import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {    
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { error && <div className="loading">{ error }</div> }
            { isPending && <div className="loading">Loading..</div> }
            { data && <BlogList data={data} title="All Blogs"/>}
        </div>
    );
}

export default Home;