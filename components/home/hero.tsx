import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Logo from '../../src/assets/images/cotolam.jpg';
const HeroSection = () => {
    return (
        <Box>
            <Container className="mt-4">
                <Stack direction={'row'} alignItems={'center'}>
                    <Box
                        sx={{
                            paddingRight: '20px',
                        }}
                    >
                        <Typography className="text-2xl font-medium" component={'h3'} variant="h3">
                            Hi, I'm Hai Trieu
                            <br />
                            Pro Gamer LMHT
                        </Typography>

                        <Typography component={'p'}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus nemo unde
                            commodi. Dolorem perspiciatis cupiditate dolor ipsam, magni ducimus vero, id placeat tenetur
                            harum a fugiat suscipit quae quidem? Ratione possimus tenetur architecto consequatur, quia
                        </Typography>

                        <Button className="!bg-red-600 text-gray-100 mt-2 capitalize">Download Resume</Button>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            align: 'center',
                            justifyContent: 'center',
                            minWidth: '240px',
                            boxShadow: '-5px 13px',
                            color: 'gray',
                            borderRadius: '50%',
                        }}
                    >
                      
                        <Image className="w-60 h-60 rounded-[50%] " src={Logo} alt="khoc"></Image>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};
export default HeroSection;
