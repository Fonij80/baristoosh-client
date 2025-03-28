import { Link } from '@mui/material';

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
}

export const SocialLink = ({ href, icon }: SocialLinkProps) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                '&:hover': {
                    color: 'secondary.main',
                },
            }}
        >
            {icon}
        </Link>
    );
};
