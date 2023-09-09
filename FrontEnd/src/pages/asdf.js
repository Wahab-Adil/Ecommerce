


<TableContainer sx={{ px: 6, mt: '3rem' }} >
<Table >
    <TableHead>
        <TableRow>
            <TableCell align="left" sx={{ p: "0 !important", }}  ><Chip label="Items" /></TableCell>
            <TableCell align="left" sx={{ p: "0 !important", }}><Chip label="Description" /></TableCell>
            <TableCell align="left" sx={{ p: "0 !important", }}><Chip label="Quantity" /></TableCell>
            <TableCell align="left" sx={{ p: "0 !important", }}><Chip label="Price" /></TableCell>
        </TableRow>
    </TableHead>
    <div style={{ marginTop: "3rem" }} />
    <TableBody >


        <TableRow>

            {/* item image */}
            <TableCell sx={{ padding: "0 !important", }}>
                <img src={img1} style={{ width: "13rem", height: "9rem", borderRadius: "0.8rem" }} />
            </TableCell>

            {/* item description */}

            <TableCell sx={{ display: "flex", padding: "0 !important", }}>

                <Stack sx={{ gap: 2 }} >
                    <Typography variant="h6" fontWeight="bold">Description Here</Typography>
                    <p style={{ fontSize: "12px", color: "gray" }}> afa;sdkfa;sdlfkajs;dlfkajsd;flkasjdf;laskdfjas;ldkfjasd;lfkjasd;flkasjdfa </p>
                </Stack>

            </TableCell>

            {/* item quntity */}

            <TableCell sx={{ padding: "0 !important", }}>
                <Stack alignItems="center" >

                <Button>
                    <Delete />
                </Button>

                <ButtonGroup>
                    <Button>-</Button>
                    <Button disableRipple >100</Button>
                    <Button>+</Button>
                </ButtonGroup>


                </Stack>
            </TableCell>



            {/* item price */}
            <TableCell sx={{ padding: "0 !important", }}>
            </TableCell>
        </TableRow>



    </TableBody>
</Table>
</TableContainer>