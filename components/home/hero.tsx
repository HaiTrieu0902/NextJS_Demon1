import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Logo from '../../src/assets/images/cotolam.jpg';
import RecentPosts from './recent-posts';
import FeatureWorks from './feature-works';
const HeroSection = () => {
    return (
        <Box component={'section'} pt={{ xs: 4, md: 12 }} pb={{ xs: 7, md: 9 }}>
            <Container>
                <Stack
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    alignItems={{ xs: 'center', md: 'flex-start' }}
                    textAlign={{ xs: 'center', md: 'left' }}
                >
                    <Box
                        pt={{ xs: 4 }}
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
                            minWidth: '200px',
                            boxShadow: '-5px 13px',
                            color: 'gray',
                            borderRadius: '50%',
                        }}
                    >
                        <Image className="w-52 h-52 rounded-[50%] " src={Logo} alt="khoc"></Image>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};
export default HeroSection;
