import { Box, CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react';
//import Server from '../../components/home/server/server'
import { useForm } from "react-hook-form";




const ReservasPage = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => console.log(data);


    return (
        <>
           <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                item
                xs={12} sm={8} md={5}  elevation={6} square>
                    <Box sx={{display: 'flex', m: 2, flexDirection: 'column',
                    alignItems: 'center'}} >
                        <tr>
                            <td >
                                <Typography variant="subtitle1" gutterBottom>Lunes  9:30-22:00</Typography>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <Typography variant="subtitle1" gutterBottom>Martes  9:30-22:00</Typography>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <Typography variant="subtitle1" gutterBottom>Miercoles  9:30-22:00</Typography>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <Typography variant="subtitle1" gutterBottom>Jueves  9:30-22:00</Typography>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <Typography variant="subtitle1" gutterBottom>Viernes  9:30-22:00</Typography>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <Typography variant="subtitle1" gutterBottom>Sabado  9:30-22:00</Typography>
                            </td>
                          
                        </tr>
            

                    </Box>
                </Grid>
            
                <Grid item xs={12} sm={8} md={5} elevation={6} square>
                    <Box
                        sx={{
                        my: 8,
                        mx: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="Name">Name</label>
                            <input placeholder="Name" {...register("lastName")} />
                        </div>

                        

                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                placeholder="example@hotmail.com"
                                type="email"
                                {...register("email")}
                            />
                        </div>
                        <div>
                            <label htmlFor="telf">Phone</label>
                            <input
                                placeholder="600 000 000"
                                type="number"
                                {...register("telf")}
                            />
                        </div>
                        <div>
                            <label htmlFor="personas">Personas</label>
                            <select {...register("personas")}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="personas">Personas</label>
                            <select {...register("personas")}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        
        
                                
                            <input type="submit" />
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default ReservasPage;
