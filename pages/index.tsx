import AnimationsContent from "@/components/animations/AnimationsContent";
import RootLayout from "@/layouts/RootLayout";
import { Box, Container } from "@mui/material";

const IndexPage = () => (
  <RootLayout title="React Spring">
    <Container>
      <AnimationsContent />
    </Container>
  </RootLayout>
);

export default IndexPage;
