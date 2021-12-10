import React from "react";
import { Grid, Text, Button } from "../elements/elementsIndex";
import { history } from '../redux/configureStore';

const NotFound = (props) => {    

    const goBack = () => {
        history.replace('/')
    }

    return (
        <React.Fragment>
            <Grid padding='200px 30px'>
                <Text size='3rem' bold>404</Text>
                <Text size='3rem' bold>Not Found</Text>
                <Button _onClick={goBack} margin='50px 0'>돌아가기</Button>
            </Grid>
        </React.Fragment>
    )
}

export default NotFound