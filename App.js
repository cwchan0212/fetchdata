import './App.css';
import React from "react";

/*
Reference:
https://youtu.be/Vspeudp-M9k
https://bobbyhadz.com/blog/javascript-syntaxerror-json-parse-unexpected-character

*/

function App() {

    // Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0
    // https://type.fit/api/quotes
    // https://timeapi.io/api/Time/current/zone?timeZone=Asia/Hong_Kong
    // http://worldtimeapi.org/api/timezone/Asia/Hong_Kong

    const useAsyncStuff = () => {
        const [data, setData] = React.useState(null);
        const [error, setError] = React.useState("");
        const [loaded, setLoaded] = React.useState(false);
        const url = "https://type.fit/api/quotes";        
        // const url = "http://worldtimeapi.org/api/timezone/Asia/Hong_Kong"
        // const url = "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Hong_Kong";
        const headers = new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0",
            "mode": 'no-cors',
            "method": "POST",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "application/json",
        });


        React.useEffect(() => {
            const loadAsyncStuff = async () => {
                try {
                    const response = await fetch(url, headers);
                    const jsonData = await response.json();
                    setData(jsonData)
                    //setData(JSON.parse(jsonData))
                    //setData(JSON.stringify(jsonData));
                } catch (error) {
                    setError(error);
                    console.log("catch:", error)
                } finally {
                    setLoaded(true);
                }
            };
            loadAsyncStuff();
        }, []);
        return { data, error, loaded };
    };


    const { data, error, loaded } = useAsyncStuff()

    if (!loaded) return <h1>LOADING ... </h1>;
    if (error) return <h1>{error}</h1>

    const objList = () => {
        console.log("insider", data, typeof(data));

         if (typeof(data) == "object") {
            console.log(data.length)
            return (
                data.length
           )
         }
    }

    // const objError = (error) => {
    //     console.log("error", error);
    //     let jsError = error.message;
    //     return (jsError);
    // }

    // const output = () => {
    //     if (error) {
    //         return objError();
    //     } else {
    //         return objList()
    //     }

    // }
    return (
        <div>{objList()}</div>
    )
}
export default App;
