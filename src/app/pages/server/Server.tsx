import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom';

import { LOGIC_SERVER_URL } from "../../constants";

import { Container } from "@material-ui/core";

import { Title } from "../../components/server/Title";
import { ServerName } from "../../components/server/ServerName";
import { DescriptionText } from "../../components/server/DescriptionText";
import { SearchBar } from "../../components/misc/SearchBar";
import { CircularButton } from "../../components/misc/CircularButton";
import axios from "axios";
import {ErrorPage} from "../common/ErrorPage";

interface ServerProps {}

export type ServerInformation = {
    id: string
    name: string;
}

export const Server: React.FC<ServerProps> = () => {

    const {
        params: {id},
    } = useRouteMatch<{ id: string }>();

    const [searchTerm, setSearchTerm] = useState("")

    const [serverInfo, setServerInfo]: [ServerInformation, (info: ServerInformation) => void] = React.useState({id: "", name: ""});

    const [loading, setLoading]: [
        boolean,
        (loading: boolean) => void
    ] = React.useState<boolean>(true);

    const [error, setError]: [string, (error: string) => void] = React.useState('');

    React.useEffect(() => {
        axios.get<ServerInformation>(LOGIC_SERVER_URL + "server/" + id, {
            timeout: 10000
        })
        .then((response) => {
            setServerInfo(response.data)
            setLoading(false)
        })
        .catch((ex) => {
            let error = ex.code === 'ECONNABORTED' ? 'A timeout error has occurred' :
                (ex.response !== undefined && ex.response.status) === 404 ?
                    'This server wasn\'t found!' :
                    'An unexpected error has occurred';
            setError(error)
            setLoading(false)
        })
    })
    const onSearch = (search?: string) => {
        alert("Clicked " + search)
    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <ErrorPage error={error}/>
    }

    const onKeyDown = (event: KeyboardEvent) => {
        console.log("called " + event.constructor.name)
        if (event.key === "Enter") { // enter
            onSearch(searchTerm)
        }
    }

    document.addEventListener("keydown", onKeyDown, false)

    return (
        <Container>
            <div style={{ textAlign: "center" }}>
                <Title title={"ProximityChat"} />
                <ServerName name={ serverInfo.name } />
            </div>
            <DescriptionText />
            <SearchBar
                name={"Code"}
                label={"Server Code"}
                autoFocus={ true }
                onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {
                    event.preventDefault()
                    event.persist()
                    setSearchTerm(event.target.value)
                } } />
                <div style={{ textAlign: "center"}} >
                    <CircularButton title={"Confirm"} onClick={() => { onSearch(searchTerm) }} />
                </div>
        </Container>
    )
}