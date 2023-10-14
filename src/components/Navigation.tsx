import { Anchor, Box, Button, Group } from "@mantine/core";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { TFunction } from "i18next";
import { NavigationMenuDropdown } from "./NavigationMenuDropdown";

export type NavigationProps = {
  isLoggedIn: boolean;
  username?: string;
  t: TFunction;
  locale: string;
};

export const Navigation = ({
  isLoggedIn,
  username,
  t,
  locale,
}: NavigationProps) => {
  return (
    <Group>
      <Group gap={15} align="center" className={styles.navigation}>
        <Group>
          {isLoggedIn ? (
            <>
              <Anchor component={Link} href={`/${locale}`}>
                {t("navbar.dashboard")}
              </Anchor>
              <Anchor component={Link} href={`/${locale}/friends`}>
                {t("navbar.friends")}
              </Anchor>
              <Anchor component={Link} href={`/${locale}/leaderboards`}>
                {t("navbar.leaderboards")}
              </Anchor>
              <NavigationMenuDropdown
                username={username}
                texts={{
                  account: t("navbar.account"),
                  settings: t("navbar.settings"),
                  extensions: t("navbar.extensions"),
                  logOut: t("navbar.logOut"),
                }}
                locale={locale}
              />
            </>
          ) : (
            <>
              <Anchor component={Link} href={`/${locale}/extensions`}>
                {t("navbar.extensions")}
              </Anchor>
              <Box className={styles.spacer} />
              <Anchor component={Link} href={`/${locale}/login`}>
                {t("navbar.login")}
              </Anchor>
              <Button component={Link} href={`/${locale}/register`}>
                {t("navbar.register")}
              </Button>
            </>
          )}
        </Group>
        <ThemeToggle label={false} />
      </Group>
    </Group>
  );
};
