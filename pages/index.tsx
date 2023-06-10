import HeroSection from '@/components/home/hero';
import MainLayout from '@/components/layout/main';
import { Box } from '@mui/material';

const Home = () => {
    return (
        <Box component={'main'}>
            <HeroSection></HeroSection>
        </Box>
    );
};

Home.Layout = MainLayout;

export default Home;
