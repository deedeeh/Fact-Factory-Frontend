class API {

    static getFacts = () => {
        fetch('http://localhost:3000/api/v1/categories')
        .then(res => res.json())
    } 

}

export default API;