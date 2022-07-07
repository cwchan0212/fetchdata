import './App.css';
import React from "react";

function App() {

    // Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0
    // https://type.fit/api/quotes
    // https://timeapi.io/api/Time/current/zone?timeZone=Asia/Hong_Kong
    // http://worldtimeapi.org/api/timezone/Asia/Hong_Kong

    const useAsyncStuff = () => {
        const [data, setData] = React.useState(null);
        const [error, setError] = React.useState("");
        const [loaded, setLoaded] = React.useState(false);
        const url = "http://worldtimeapi.org/api/timezone/Asia/Hong_Kong"
        const headers = new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0",
            "mode": 'no-cors',
            "method": "POST",
            "Origin": "https://timeapi.io",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "application/json",
        });


        React.useEffect(() => {
            const loadAsyncStuff = async () => {
                try {
                    const response = await fetch(url, headers);
                    // console.log("header", response.headers)
                    const json = await response.json();
                    setData(json);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoaded(true);
                }
            };
            loadAsyncStuff();
        }, []);
        return { data, error, loaded };
    };
   
   
    const { data, error, loaded } = useAsyncStuff()

    return (
 
        <div>
            123

        </div>



    )
    // const { data, error, loaded } = useAsyncStuff()

    // if (loaded) {
    //     return error ? (
    //         <span>Error: {error}</span>
    //     ) : (
    //         <p>{error}</p>
    //     );
    // }

    // if (!data) {
    //     return <p>Nothing to show...</p>;
    // } else {
    //     return (
    //         <div>
    //             {data.length}
    //         </div>


    //     )
    // }




}
export default App;
