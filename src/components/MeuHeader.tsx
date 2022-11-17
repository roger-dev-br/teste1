import { Box, Typography } from "@mui/material";

interface MeuHeaderProps {
    titulo: string;
}

const MeuHeader: React.FC<MeuHeaderProps> = ({ titulo }) => {
    return (
        <>
            <Box sx={{ mt: 2, mb: 2 }}>
                <Typography variant="h3">
                    { titulo }
                </Typography>
            </Box>
        </>
    );
}

export default MeuHeader;