import * as React from 'react';

import './Fish.css';
import { Typography, Box } from '@mui/material';


export default function Fish() {
  return (
    <Box id='carta' className="contenedor"  >
        
        <div className="bodyFish">
          
            {itemData.map((item, index) => (
            
                <img
                  key={index}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  className={item.class}
                />
                
           
            ))}
            
        
        </div>
        <div className='carta' >
              <Typography my={5} color='black' variant='h2'>
                La Carte
              </Typography>
        </div>
    </Box>
    
  );
}


const itemData = [
  {
    img: '../img/p-1.png',
    title: 'pescado1',
    class: 'pescado1'
  },
  {
    img: '../img/p-2.png',
    title: 'pescado2',
    class: 'pescado2'
  },
  {
    img: '../img/p-3.png',
    title: 'pescado3',
    class: 'pescado3'
  },
  {
    img: '../img/p-4.png',
    title: 'pescado4',
    class: 'pescado4'
  },
  {
    img: '../img/p-5.png',
    title: 'pescado5',
    class: 'pescado5'
    
  },
  {
    img: '../img/p-6.png',
    title: 'pescado6',
    class: 'pescado6'
  },
  {
    img: '../img/p-7.png',
    title: 'pescado7',
    class: 'pescado7'
  },
  {
    img: '../img/p-8.png',
    title: 'pescado8',
    class: 'pescado8'
  },
  {
    img: '../img/p-1.png',
    title: 'pescado9',
    class: 'pescado9'
  },
  {
    img: '../img/p-2.png',
    title: 'pescado10',
    class: 'pescado10'
  },
  {
    img: '../img/p-3.png',
    title: 'pescado11',
    class: 'pescado11'
  },
  {
    img: '../img/p-5.png',
    title: 'pescado12',
    class: 'pescado12'
    
  },
];