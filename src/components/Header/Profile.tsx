import { Flex, Box, Text, Avatar} from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile( { showProfileData = true }: ProfileProps) {
    return(
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Vinicius Telles</Text>
                    <Text 
                    color="gray.300" 
                    fontSize="small">
                        vctelles09@gmail.com
                    </Text>
                </Box>
            )}
                <Avatar size="md" name="Vinicius Telles"/>
        </Flex>
    );
}