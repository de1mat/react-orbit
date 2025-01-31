import React from "react";
import {
  Button,
  Stack,
  Text,
  Card,
  CardSection,
  CarrierLogo,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalSection,
  SkipLink,
  Illustration,
} from "@kiwicom/orbit-components";
import { FlightDirect } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => {
    const [showModal, setShowModal] = React.useState(true);
    return (
      <>
        {showModal && (
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
            fixedFooter
          >
            <SkipLink
              links={[
                {
                  href: "#outbound",
                  name: "Go to the outbound sector of your trip",
                },
                {
                  href: "#inbound",
                  name: "Go to the inbound sector of your trip",
                },
              ]}
            />
            <ModalHeader
              title="Enjoy a meal while you travel"
              illustration={<Illustration name="Meal" size="small" />}
              description="See what’s available for each segment of your trip."
            />
            <ModalSection suppressed>
              <Stack>
                <Text uppercase weight="bold" id="outbound">
                  Outbound
                </Text>
                <Card>
                  <CardSection
                    icon={
                      <CarrierLogo carriers={[{ code: "G9", name: "Air Arabia" }]} size="large" />
                    }
                    title={
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Cairo CAI</Text>
                        <FlightDirect size="small" />
                        <Text weight="bold">Dubai SHJ</Text>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        See meals
                      </Button>
                    }
                  />
                  <CardSection
                    icon={
                      <CarrierLogo carriers={[{ code: "G9", name: "Air Arabia" }]} size="large" />
                    }
                    title={
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Dubai SHJ</Text>
                        <FlightDirect size="small" />
                        <Text weight="bold">Mumbai BOM</Text>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        See meals
                      </Button>
                    }
                  />
                  <CardSection
                    icon={<CarrierLogo carriers={[{ code: "G8", name: "Go Air" }]} size="large" />}
                    title={
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Mumbai BOM</Text>
                        <FlightDirect size="small" />
                        <Text weight="bold">Malé MLE</Text>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        See meals
                      </Button>
                    }
                  />
                </Card>
              </Stack>
            </ModalSection>
            <ModalSection>
              <Stack>
                <Text uppercase weight="bold" id="inbound">
                  Inbound
                </Text>
                <Card>
                  <CardSection
                    icon={<CarrierLogo carriers={[{ code: "G8", name: "Go Air" }]} size="large" />}
                    title={
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Malé MLE</Text>
                        <FlightDirect size="small" />
                        <Text weight="bold">Mumbai BOM</Text>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        See meals
                      </Button>
                    }
                  />
                  <CardSection
                    icon={
                      <CarrierLogo carriers={[{ code: "G9", name: "Air Arabia" }]} size="large" />
                    }
                    title={
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Mumbai BOM</Text>
                        <FlightDirect size="small" />
                        <Text weight="bold">Dubai SHJ</Text>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        See meals
                      </Button>
                    }
                  />
                  <CardSection
                    icon={
                      <CarrierLogo carriers={[{ code: "G9", name: "Air Arabia" }]} size="large" />
                    }
                    title={
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Dubai SHJ</Text>
                        <FlightDirect size="small" />
                        <Text weight="bold">Cairo CAI</Text>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        See meals
                      </Button>
                    }
                  />
                </Card>
              </Stack>
            </ModalSection>
            <ModalFooter>
              <Stack justify="end">
                <Button>Save meals</Button>
              </Stack>
            </ModalFooter>
          </Modal>
        )}
        {!showModal && (
          <Button
            onClick={() => {
              setShowModal(true);
            }}
          >
            Show modal
          </Button>
        )}
      </>
    );
  },
  info: {
    title: "Skip links in modals",
    description:
      "Skip links work well for any component with repeated structure, such as a modal. Use skip links to off quick navigation directly inside the modal.",
  },
};
