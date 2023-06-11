import FeatureWorks from '@/components/home/feature-works';
import HeroSection from '@/components/home/hero';
import RecentPosts from '@/components/home/recent-posts';
import MainLayout from '@/components/layout/main';
import { Box } from '@mui/material';

const Home = () => {
    return (
        <Box component={'main'}>
            <HeroSection></HeroSection>
            <div className="pt-3"></div>
            <RecentPosts></RecentPosts>
            <div className="pt-4"></div>
            <FeatureWorks></FeatureWorks>
        </Box>
    );
};

Home.Layout = MainLayout;

export default Home;
