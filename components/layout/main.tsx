import { LayoutProps } from '@/models/commom';
import { Box, Container, Stack } from '@mui/material';
import Link from 'next/link';
import Footer from '../common/footer';
import Header from '../common/header';

type Props = {};

const MainLayout = ({ children }: LayoutProps) => {
    return (
        <Stack minHeight={'100vh'}>
            <Header />

            <Box component={'main'} flexGrow={1}>
                {/* <Container
                    maxWidth="lg"
                    sx={{
                        bgcolor: 'primary.main',
                    }}
                >
                    LG container
                </Container>

                <Container
                    maxWidth="md"
                    sx={{
                        bgcolor: 'primary.main',
                        marginTop: '10px',
                    }}
                >
                    SD container
                </Container>

                <Container
                    fixed
                    sx={{
                        bgcolor: 'primary.main',
                        marginTop: '10px',
                    }}
                >
                    SD container
                </Container> */}

                <div>{children}</div>
            </Box>

            <Footer />
        </Stack>
    );
};

export default MainLayout;
