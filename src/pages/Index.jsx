import { Box, Flex, Text, Button, Image, VStack, HStack, Heading, Link, Container, Spacer } from "@chakra-ui/react";
import { FaHome, FaInfo, FaEnvelope, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="teal.500" color="white" p={4} align="center">
        <FaHome />
        <Text ml={2} fontWeight="bold">
          Home
        </Text>
        <Spacer />
        <Link href="#about" p={2}>
          About
        </Link>
        <Link href="#contact" p={2}>
          Contact
        </Link>
      </Flex>

      {/* Hero Section */}
      <Flex bg="teal.100" align="center" justify="center" p={10} minHeight="70vh">
        <VStack>
          <Heading>Welcome to Our Website!</Heading>
          <Text fontSize="xl">Your journey to excellence starts here.</Text>
          <Button colorScheme="teal" size="lg" mt={4}>
            Get Started
          </Button>
        </VStack>
      </Flex>

      {/* About Section */}
      <Container id="about" p={10}>
        <Heading as="h2" size="xl" mb={6}>
          About Us
        </Heading>
        <Text fontSize="lg">We are committed to delivering the best experience. Our team is dedicated to providing top-notch services and products.</Text>
        <Image src="https://images.unsplash.com/photo-1708882308480-9188ed7e7d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMHRvZ2V0aGVyfGVufDB8fHx8MTcxNDEzOTgxOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Our Team" mt={4} />
      </Container>

      {/* Contact Section */}
      <Container id="contact" p={10}>
        <Heading as="h2" size="xl" mb={6}>
          Contact Us
        </Heading>
        <HStack spacing={4}>
          <FaEnvelope />
          <Text>info@example.com</Text>
        </HStack>
      </Container>

      {/* Social Media Links */}
      <Flex as="footer" bg="gray.200" p={4} align="center" justify="center">
        <Link href="https://instagram.com" isExternal>
          <FaInstagram />
        </Link>
        <Link href="https://twitter.com" isExternal ml={4}>
          <FaTwitter />
        </Link>
        <Link href="https://facebook.com" isExternal ml={4}>
          <FaFacebookF />
        </Link>
      </Flex>
    </Box>
  );
};

export default Index;
