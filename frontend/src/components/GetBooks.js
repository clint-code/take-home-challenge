import React, {useEffect} from 'react';
import { Button, Box, Autocomplete, TextField, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { useQuery, useMutation } from '@apollo/client';
import {LOAD_BOOKS} from '../GraphQL/Queries'
import exampleImage from '../assets/image1.webp'


const GetBooks = () => {

    const {error, loading, data, refetch}  = useQuery(LOAD_BOOKS);

    useEffect(() => {
        refetch();
    }, []);

    //const books = ['Option 1', 'Option 2', 'Option 3'];

    // const bookData = [
    //   {
    //     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    //     title: 'Breakfast',
    //     author: '@bkristastucchio',
    //   },
    //   {
    //     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    //     title: 'Burger',
    //     author: '@rollelflex_graphy726',
    //   },
    //   {
    //     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    //     title: 'Camera',
    //     author: '@helloimnik',
    //   }
    // ]

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (


    <Box component="section" sx={{ p:2 }}>
{/* 
        <picture>
            <img src={`${exampleImage}?w=164&h=164&fit=crop&auto=format`}
            alt='example'/>
        </picture> */}
       

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
        />*/}
        
        <Box component="section">

            <ImageList sx={{width:650}}>
                
                {data.books.map((item , i)=> (
                    
                    <ImageListItem key={i} sx={{padding: 2}}>
                        {item.coverPhotoURL ? (

                        <img
                            srcSet={`${item.coverPhotoURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.coverPhotoURL}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"    
                            />) : (
                                <img src="https://via.placeholder.com/150" alt="Placeholder" />
                            )}

                        {/* <img src="https://via.placeholder.com/150" alt="Placeholder" /> */}
              
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

            

        </Box> 

    </Box>

  );
};

export default GetBooks;