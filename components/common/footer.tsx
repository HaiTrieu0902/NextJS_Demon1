import { Facebook, Instagram , Twitter, LinkedIn } from '@mui/icons-material';
import { Box, Icon, Stack, Typography } from '@mui/material';
type Props = {};

const socialIcon = [
    {
        icon: Facebook,
        url: 'https://www.facebook.com',
    },
    {
        icon: Instagram,
        url: 'https://www.facebook.com',
    },
    {
        icon: Twitter,
        url: 'https://www.facebook.com',
    },
    {
        icon: LinkedIn,
        url: 'https://www.facebook.com',
    },
];

const Footer = () => {
    return (
        <Box component={'footer'} py={2} textAlign={'center'}  sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',  
            alignItems: 'center', 
            gap: '10px' 
            
        }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} textAlign={'center'} >
                {socialIcon.map((social,index) => (
                    <Box key={index} component={'a'}> 
                        <Icon component={social.icon} fontSize='medium'  />
                    </Box>
                ))}

            </Stack>

            <Typography>Copyright &copy; {new Date().getFullYear()}</Typography>
        </Box>
    );
};

export default Footer;
