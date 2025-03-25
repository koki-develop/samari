import { Accordion, Box, Divider, Text } from "@mantine/core";
import { useMemo } from "react";
import { useLocation } from "react-router";
import { useActivePostGroup } from "@/lib/postGroup";
import { postGroupCategories } from "@/lib/postGroupCategory";
import NavListFooter from "./NavListFooter";
import NavListItem from "./NavListItem";

export type NavListProps = {
  onSelectPostGroup: () => void;
};

export default function NavList({ onSelectPostGroup }: NavListProps) {
  const { pathname } = useLocation();

  const activePostGroup = useActivePostGroup();
  const activePostGroupCategory = useMemo(() => {
    return postGroupCategories.find((category) =>
      category.groups.some((group) => group.id === activePostGroup?.id),
    );
  }, [activePostGroup]);

  return (
    <>
      <Box className="flex-grow overflow-auto overscroll-none">
        <NavListItem
          id={null}
          icon={null}
          name="All"
          active={pathname === "/" && activePostGroup == null}
          onSelectPostGroup={onSelectPostGroup}
        />

        <Accordion
          classNames={{
            control:
              "bg-[var(--mantine-color-gray-0)] hover:bg-[var(--mantine-color-gray-1)] border-b border-solid border-[var(--mantine-color-gray-3)] mb-[-1px] pl-2",
            content: "p-0",
            panel: "mt-[1px]",
            label: "py-2",
          }}
          multiple
          defaultValue={[activePostGroupCategory?.name ?? ""]}
        >
          {postGroupCategories.map((category) => (
            <Accordion.Item key={category.name} value={category.name}>
              <Accordion.Control>
                <Box className="flex items-center gap-2 px-2 py-1">
                  {category.icon}
                  <Text
                    classNames={{ root: "text-[var(--mantine-color-gray-7)]" }}
                    size="sm"
                  >
                    {category.name}
                  </Text>
                </Box>
              </Accordion.Control>

              <Accordion.Panel>
                {category.groups.map((group) => (
                  <NavListItem
                    key={group.id}
                    id={group.id}
                    icon={group.icon}
                    name={group.name}
                    active={group.id === activePostGroup?.id}
                    onSelectPostGroup={onSelectPostGroup}
                  />
                ))}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>

      <Divider visibleFrom="sm" />

      <NavListFooter />
    </>
  );
}
