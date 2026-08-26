import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { Uniwind, useUniwind } from 'uniwind';

export const ThemeToggle = () => {
  const { theme, hasAdaptiveThemes } = useUniwind();
  
  const activeTheme = hasAdaptiveThemes ? 'system' : theme;

  const themes = [
    { name: 'light', label: '☀️', tooltip: 'Light' },
    { name: 'dark', label: '🌙', tooltip: 'Dark' },
    { name: 'system', label: '⚙️', tooltip: 'System' },
  ] as const;

  return (
    <View className="flex-row items-center gap-2">
      {themes.map((t) => (
        <Pressable
          key={t.name}
          onPress={() => Uniwind.setTheme(t.name)}
          className={`
            w-10 h-10 rounded-full items-center justify-center
            ${activeTheme === t.name
              ? 'bg-primary border-2 border-primary'
              : 'bg-card border border-border'
            }
          `}
          accessibilityLabel={`Switch to ${t.tooltip} theme`}
          accessibilityRole="button"
        >
          <Text 
            className={`text-lg ${
              activeTheme === t.name 
                ? 'text-white' 
                : 'text-foreground'
            }`}
          >
            {t.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};
