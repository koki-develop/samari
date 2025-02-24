import Logo from "@/assets/logo/logo.png";
import { ActionIcon, AppShell, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react";
import { Outlet } from "react-router";
import NavList from "./NavList";

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
      <AppShell.Navbar visibleFrom="sm">
        <NavList />
      </AppShell.Navbar>

      {/* navbar for mobile */}
      <Drawer
        classNames={{
          body: "p-0 flex-grow flex flex-col",
          content: "flex flex-col",
          header: "border-b border-solid border-[var(--mantine-color-gray-3)]",
        }}
        size="xs"
        hiddenFrom="sm"
        opened={opened}
        onClose={close}
      >
        <NavList />
      </Drawer>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
