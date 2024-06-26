import { useState, useEffect } from "react";

function Info() {

    const [info, setInfo] = useState(null);
    useEffect(() => {
        fetch("https://onlineprojectsgit.github.io/API/WDEndpoint.json")
            .then(response => response.json())
            .then(data => setInfo(data.info))
    }, [])

    if (info === null) {
        return (<></>)
    }
    else {
        return (
            <div>
                <h1>Cohort Details</h1>
                <p>ID: {info.id}</p>
                <p>Cohort:  {info.cohort}</p>
                <p>Name:  {info.Name}</p>
                <p>Start:  {info.Start}</p>
                <p>End:  {info.End}</p>
                <h2>Instructor Details</h2>
                <p>Name: {info.instructor.name}</p>
                <p>Position: {info.instructor.position}</p>
                <p>Cohorts:  {info.instructor.cohorts}</p>
                <h2>Student Details</h2>
                {JSON.stringify(info.students)}
            </div>
        )
    }
}
export default Info;