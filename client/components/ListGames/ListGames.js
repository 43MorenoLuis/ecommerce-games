import React from 'react'
import { map } from 'lodash';
import Image from 'next/image';
import { Grid, Icon, Card } from 'semantic-ui-react';
import Link from 'next/link';
import useWindowSize from '../../hooks/useWindowSize';
import { breakpointUpSm, breakpointUpMd, breakpointUpLg } from '../../utils/breakpoint';

export default function ListGames(props) {
    const {width}=useWindowSize();
    const {games}=props;

    const getColumnsRender=()=>{
        switch (true) {
            case width > breakpointUpLg:
                return 5;
            case width > breakpointUpMd:
                return 3;
            case width > breakpointUpSm:
                return 2;
            default:
                return 1;
        }
    }

    return (
        <div className='list-games'>
            <Grid>
                <Grid.Row columns={getColumnsRender()}>
                {map(games, (game)=>(
                    <Game key={game._id} game={game}/>
                ))}
                </Grid.Row>
            </Grid>
        </div>
    );
}

function Game(props){
    const {game}=props;
    
    return(
        <Grid.Column className='list-game__game'>
            <Link href={`/${game.url}`}>
                <a>
                    <div className='list-games__game-poster'>
                        <Image layout='fill' src={game.poster.url} alt={game.title}  />
                    </div>
                </a>           
            </Link>
            <h3>{game.title}</h3>
        </Grid.Column>
    )
}
