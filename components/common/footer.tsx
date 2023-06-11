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
        <Box component={'footer'} py={2} textAlign={'center'}>
            <Stack>
                {socialIcon.map((social,index) => (
                    <Box key={index} component={'a'}> 
                        <Icon component={social.icon} fontSize='large'  />

                    </Box>
                ))}

            </Stack>

            <Typography>Copyright &copy; {new Date().getFullYear()}</Typography>
        </Box>
    );
};

export default Footer;
