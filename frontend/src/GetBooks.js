import React, {useEffect, useState} from 'react';
import { Button, Box, Autocomplete, TextField, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import {LOAD_BOOKS} from './GraphQL/Queries'


const GetBooks = () => {

    const {error, loading, data}  = useQuery(LOAD_BOOKS)
  
    useEffect(() => {
        console.log(data);
    }, (data))

    //const books = ['Option 1', 'Option 2', 'Option 3'];
    //console.log(books);
    const bookData = [
      {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
      },
      {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
      },
      {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
      }
    ]

  return (

    <Box component="section" sx={{ p:2 }}>

        <p>Hello world!!</p>
        {/* <Autocomplete
        options={books}
        autoHighlight
        renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': {mr:2, flexShrink: 0 } }} {...props}>
            <img
                loading="lazy"
                width="50"
                srcSet={`https://i.pinimg.com/564x/ba/7a/ac/ba7aacb6de87e3646f58bc35632ab02d.jpg`}
                src={`https://i.pinimg.com/564x/ba/7a/ac/ba7aacb6de87e3646f58bc35632ab02d.jpg`}
                alt=""
            />
            {books}
            </Box>
        )}
        renderInput={(params) => <TextField {...params} />}
        />

        <Box component="section">

            <ImageList sx={{width:650}}>
            {bookData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"    
                />
                <ImageListItemBar
                    title={item.title}
                    subtitle={<span>by: {item.author}</span>}
                    position="below"
                />

                <Button color="success">
                    Add to Reading List
                </Button>

                </ImageListItem>
            ))}

            </ImageList>


        </Box> */}


    </Box>

  );
};

export default GetBooks;