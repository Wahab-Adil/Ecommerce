import React from 'react'
import { Typography, Stack, Grid, Chip, TableContainer, Table, TableCell, TableBody, styled, TableHead, Paper, TableRow, Card, CardMedia, IconButton, Button, ButtonGroup, Box } from '@mui/material'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img7.jpg'


import { Delete, Description } from '@mui/icons-material'


const StyledCell = styled(TableCell)(({ theme }) => ({
    padding: "0 !important",
}))



const myData = [
    {
        icon: img1,
        title: "Description Here",
        description: "this is the description for the item above and more imformation for the item",
        price: "300$",
        offPrice: "400$",
    },
    {
        icon: img2,
        title: "Description Here",
        description: "this is the description for the item above and more imformation for the item",
        price: "300$",
        offPrice: "400$",
    },
    {
        icon: img3,
        title: "Description Here",
        description: "this is the description for the item above and more imformation for the item",
        price: "300$",
        offPrice: "400$",
    },
    {
        icon: img4,
        title: "Description Here",
        description: "this is the description for the item above and more imformation for the item",
        price: "300$",
        offPrice: "400$",
    },
    {
        icon: img5,
        title: "Description Here",
        description: "this is the description for the item above and more imformation for the item",
        price: "300$",
        offPrice: "400$",
    },
    {
        icon: img6,
        title: "Description Here",
        description: "this is the description for the item above and more imformation for the item",
        price: "300$",
        offPrice: "400$",
    },
]


const Mycart = () => {
    return (
        <>
            <Typography
                variant="h5"
                sx={{
                    px: { xs: 2, sm: 6 },
                    fontWeight: "bold",
                    mt: '5rem'
                }}
            >
                Your Shopping
            </Typography >


            <Typography
                sx={{
                    px: { xs: 2, sm: 6 },
                    mt: '4rem'
                }}
            >
                home / My Cart
            </Typography>


            <Stack direction="row" sx={{ mt: '4rem' }}>




                <TableContainer sx={{ px: 6, }} >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" sx={{ p: "0 !important", }}  ><Chip label="Items" /></TableCell>
                                <TableCell align="left" sx={{ p: "0 !important", }}><Chip label="Description" /></TableCell>
                                <TableCell align="left" sx={{ p: "0 !important", }}><Chip label="Quantity" /></TableCell>
                                <TableCell align="left" sx={{ p: "0 !important", }}><Chip label="Price" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <div style={{ marginTop: "2rem" }} />
                        <TableBody >

                            {

                                myData.map(({icon,title,description,price,offPrice}) => {

                                    return <>
                                        <TableRow>

                                            {/* item image */}
                                            <TableCell sx={{ padding: "0 !important", }}>
                                                <img src={icon} style={{ width: "13rem", height: "9rem", borderRadius: "0.8rem" }} />
                                            </TableCell>

                                            {/* item description */}

                                            <TableCell sx={{ padding: "0 !important", }}>

                                                <Stack sx={{ gap: 2 }} >
                                                    <Typography variant="h6" fontWeight="bold">{title}</Typography>
                                                    <p style={{ fontSize: "12px", color: "gray", maxWidth: "10rem", wordBreak: "break-word" }}>{description} </p>
                                                </Stack>

                                            </TableCell>

                                            {/* item quntity */}

                                            <TableCell sx={{ padding: "0 !important", }}>
                                                <Stack alignItems="start" gap="1rem"  >

                                                    <Button>
                                                        <Delete />
                                                    </Button>

                                                    <ButtonGroup>
                                                        <Button >-</Button>
                                                        <Button disableRipple >100</Button>
                                                        <Button>+</Button>
                                                    </ButtonGroup>


                                                </Stack>
                                            </TableCell>


                                            {/* item price */}
                                            <TableCell sx={{ padding: "0 !important", }}>

                                                <Typography variant="h6" fontWeight="bold">{price}</Typography>
                                                <Typography variant="body2" sx={{ textDecoration: "line-through" }} >{offPrice}</Typography>

                                            </TableCell>
                                        </TableRow>
                                        <div style={{ marginBottom: "1.5rem" }} />

                                    </>

                                })
                            }

                        </TableBody>
                    </Table>
                </TableContainer>


                <Stack pr={6} width={'25rem'}>


                    <Typography variant="h5" fontWeight="bold">Order Summary</Typography>

                    <Stack mt="3rem" direction="row" justifyContent="space-between">
                        <Typography variant="body2">Subtotal</Typography>
                        <Typography variant="body2">555$</Typography>
                    </Stack>
                    <hr />
                    <Stack mt="2rem" direction="row" justifyContent="space-between">
                        <Typography variant="body2">Discount (20%)</Typography>
                        <Typography variant="body2">555$</Typography>
                    </Stack>
                    <hr />
                    <Stack mt="2rem" direction="row" justifyContent="space-between">
                        <Typography variant="body2">Delivery Fee</Typography>
                        <Typography variant="body2">555$</Typography>
                    </Stack>
                    <hr />

                    <Stack mt="3rem" mb="3rem" direction="row" justifyContent="space-between">
                        <Typography variant="body1" fontWeight="bold">Total</Typography>
                        <Typography variant="body1" fontWeight="bold">555$</Typography>
                    </Stack>

                    <Button sx={{ backgroundColor: "black", color: "white", borderRadius: "10rem" }}>Go to Checkout</Button>
                    <Button variant='outlined' sx={{ color: "black", borderRadius: "10rem", marginTop: '1rem' }}>Go to Checkout</Button>

                </Stack>


            </Stack>

        </>

    )
}
export default Mycart
