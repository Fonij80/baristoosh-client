import { useState, useRef } from 'react';
import { Box, useMediaQuery, useTheme as useMuiTheme } from '@mui/material';
import { Recipe } from '../types/Recipe';

interface RecipeMediaProps {
    currentRecipe: Recipe;
}

export const RecipeMedia = ({ currentRecipe }: RecipeMediaProps) => {
    const muiTheme = useMuiTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);


    const handleMouseOver = () => {
        console.log("handleMouseOver");
        if (!isMobile && videoRef.current) {
            videoRef.current.play();
            setShowVideo(true);
        }
    };

    const handleMouseOut = () => {
        console.log("handleMouseOut");
        if (!isMobile && videoRef.current) {
            videoRef.current.pause();
            setShowVideo(false);
        }
    };

    const handleImageClick = () => {
        console.log("handleImageClick");
        if (isMobile && videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setShowVideo(true);
            } else {
                videoRef.current.pause();
                setShowVideo(false);
            }
        }
    };


    return (
        <Box
            sx={{
                width: isMobile ? '100%' : '50%',
                height: isMobile ? '40%' : '100%',
                position: 'relative'
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleImageClick}
        >
            {showVideo ? (
                <video
                    ref={videoRef}
                    src={currentRecipe.videoUrl} // Add a `videoUrl` field in your Recipe type
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                    muted
                    loop
                />
            ) : (
                <Box
                    component="img"
                    src={currentRecipe.imageUrl}
                    alt={currentRecipe.title}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            )}
        </Box>
    )
}