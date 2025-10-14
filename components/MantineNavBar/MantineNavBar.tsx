'use client';

import { Navbar } from 'nextra-theme-docs';
import { Group, Text } from '@mantine/core';
import { ColorSchemeControl } from '../ColorSchemeControl/ColorSchemeControl';
import { MantineNextraThemeObserver } from '../MantineNextraThemeObserver/MantineNextraThemeObserver';

/**
 * You can customize the Nextra NavBar component.
 * Don't forget to use the MantineProvider and MantineNextraThemeObserver components.
 *
 * @since 1.0.0
 *
 */
export const MantineNavBar = () => {
  return (
    <>
      <MantineNextraThemeObserver />
      <Navbar
        logo={
          <Group align="center" gap={4}>
            <Text size="lg" fw={800} c="blue" visibleFrom="xl">
              FiveM スクリプト開発用ドキュメント
            </Text>
          </Group>
        }
        // Mantine discord server
        chatLink="https://discord.com/invite/wbH82zuWMN"
        projectLink="https://github.com/webya-jp/fivemdevjp"
      >
        <>
          <ColorSchemeControl />
        </>
      </Navbar>
    </>
  );
};
