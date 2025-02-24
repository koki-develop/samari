import Logo from "@/assets/logo/logo.png";
import { ActionIcon, AppShell, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react";
import { Outlet } from "react-router";

export default function Layout() {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <AppShell
      classNames={{ header: "flex items-center gap-3 px-4" }}
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <ActionIcon
          c="gray"
          hiddenFrom="sm"
          onClick={toggle}
          variant="transparent"
        >
          <IconMenu2 />
        </ActionIcon>
        <img className="h-7" src={Logo} alt="SAMARI" />
      </AppShell.Header>

      {/* navbar for desktop */}
      <AppShell.Navbar visibleFrom="sm">NAVBAR_FOR_DESKTOP</AppShell.Navbar>

      {/* navbar for mobile */}
      <Drawer
        styles={{
          header: { borderBottom: "1px solid var(--mantine-color-gray-3)" },
        }}
        size="xs"
        hiddenFrom="sm"
        opened={opened}
        onClose={close}
      >
        NAVBAR_FOR_MOBILE
      </Drawer>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
