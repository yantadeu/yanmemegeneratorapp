const dev={
    API_URL:"http://localhost:3000"
};

const prod={
    API_URL:"https://yanmemegeneratorserver.herokuapp.com"
};

const url_api = process.env.NODE_ENV === 'development' ? dev : prod;

export default url_api