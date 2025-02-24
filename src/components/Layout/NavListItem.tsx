import { Anchor } from "@mantine/core";
import clsx from "clsx/lite";
import { Link } from "react-router";

type NavListItemProps = {
  id: string | null;
  icon: string | null;
  name: string;

  active: boolean;
};

export default function NavListItem({
  id,
  icon,
  name,
  active,
}: NavListItemProps) {
  const to = id == null ? "/" : `/?g=${id}`;

  return (
    <Anchor
      classNames={{
        root: clsx(
          "flex items-center gap-2",
          "py-3 px-4",
          "border-0 border-solid border-[var(--mantine-color-gray-3)] border-b last:border-b-0",
          "transition",
          // active
          active &&
            "bg-[var(--mantine-color-blue-1)]/80 hover:bg-[var(--mantine-color-blue-1)]/80 font-semibold",
          // not active
          !active && "hover:bg-[var(--mantine-color-blue-0)]",
        ),
      }}
      c="dark"
      underline="never"
      component={Link}
      to={to}
    >
      {icon && <img className="size-6 object-contain" src={icon} alt="" />}
      {name}
    </Anchor>
  );
}
