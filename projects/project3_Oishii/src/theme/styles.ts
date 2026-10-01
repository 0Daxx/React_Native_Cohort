import { StyleSheet, Platform, Dimensions } from 'react-native';
import { AppTheme } from './theme';

const { width, height } = Dimensions.get('window');

// Responsive sizing helpers
export const responsive = {
  width: (percentage: number) => (width * percentage) / 100,
  height: (percentage: number) => (height * percentage) / 100,
  fontSize: (size: number) => size,
  spacing: (multiplier: number) => multiplier * 8, // Base unit: 8px
};

// Common spacing values
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Typography scale
export const typography = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

// Border radius
export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

// Shadow configurations
export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
};

export const styles = (theme: AppTheme) => {
  const { colors } = theme;
  
  return StyleSheet.create({
    // ========== LAYOUT ==========

    background: {
      backgroundColor: colors.background,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    
    containerSecondary: {
      flex: 1,
      backgroundColor: colors.backgroundSecondary,
    },
    
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    
    scrollContainer: {
      flex: 1,
      backgroundColor: colors.background,
    },
    
    content: {
      padding: spacing.md,
    },
    
    contentHorizontal: {
      paddingHorizontal: spacing.md,
    },
    
    contentVertical: {
      paddingVertical: spacing.md,
    },
    
    // ========== FLEXBOX ==========
    row: {
      flexDirection: 'row',
    },
    
    column: {
      flexDirection: 'column',
    },
    
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    centerHorizontal: {
      alignItems: 'center',
    },
    
    centerVertical: {
      justifyContent: 'center',
    },
    
    between: {
      justifyContent: 'space-between',
    },
    
    around: {
      justifyContent: 'space-around',
    },
    
    wrap: {
      flexWrap: 'wrap',
    },
    
    
    // ========== SPACING ==========
    mXs: { margin: spacing.xs },
    mSm: { margin: spacing.sm },
    mMd: { margin: spacing.md },
    mLg: { margin: spacing.lg },
    mXl: { margin: spacing.xl },
    
    mtXs: { marginTop: spacing.xs },
    mtSm: { marginTop: spacing.sm },
    mtMd: { marginTop: spacing.md },
    mtLg: { marginTop: spacing.lg },
    mtXl: { marginTop: spacing.xl },
    
    mbXs: { marginBottom: spacing.xs },
    mbSm: { marginBottom: spacing.sm },
    mbMd: { marginBottom: spacing.md },
    mbLg: { marginBottom: spacing.lg },
    mbXl: { marginBottom: spacing.xl },
    
    mlXs: { marginLeft: spacing.xs },
    mlSm: { marginLeft: spacing.sm },
    mlMd: { marginLeft: spacing.md },
    mlLg: { marginLeft: spacing.lg },
    mlXl: { marginLeft: spacing.xl },
    
    mrXs: { marginRight: spacing.xs },
    mrSm: { marginRight: spacing.sm },
    mrMd: { marginRight: spacing.md },
    mrLg: { marginRight: spacing.lg },
    mrXl: { marginRight: spacing.xl },
    
    pXs: { padding: spacing.xs },
    pSm: { padding: spacing.sm },
    pMd: { padding: spacing.md },
    pLg: { padding: spacing.lg },
    pXl: { padding: spacing.xl },
    
    ptXs: { paddingTop: spacing.xs },
    ptSm: { paddingTop: spacing.sm },
    ptMd: { paddingTop: spacing.md },
    ptLg: { paddingTop: spacing.lg },
    ptXl: { paddingTop: spacing.xl },
    
    pbXs: { paddingBottom: spacing.xs },
    pbSm: { paddingBottom: spacing.sm },
    pbMd: { paddingBottom: spacing.md },
    pbLg: { paddingBottom: spacing.lg },
    pbXl: { paddingBottom: spacing.xl },
    
    plXs: { paddingLeft: spacing.xs },
    plSm: { paddingLeft: spacing.sm },
    plMd: { paddingLeft: spacing.md },
    plLg: { paddingLeft: spacing.lg },
    plXl: { paddingLeft: spacing.xl },
    
    prXs: { paddingRight: spacing.xs },
    prSm: { paddingRight: spacing.sm },
    prMd: { paddingRight: spacing.md },
    prLg: { paddingRight: spacing.lg },
    prXl: { paddingRight: spacing.xl },
    
    gapXs: { gap: spacing.xs },
    gapSm: { gap: spacing.sm },
    gapMd: { gap: spacing.md },
    gapLg: { gap: spacing.lg },
    gapXl: { gap: spacing.xl },
    
    // ========== TYPOGRAPHY ==========
    text: {
      color: colors.text,
      fontSize: typography.base,
    },
    
    textSecondary: {
      color: colors.textSecondary,
      fontSize: typography.base,
    },
    
    textTertiary: {
      color: colors.textTertiary,
      fontSize: typography.base,
    },
    
    heading1: {
      color: colors.text,
      fontSize: typography.xxxl,
      fontWeight: 'bold',
    },
    
    heading2: {
      color: colors.text,
      fontSize: typography.xxl,
      fontWeight: 'bold',
    },
    
    heading3: {
      color: colors.text,
      fontSize: typography.xl,
      fontWeight: '600',
    },
    
    heading4: {
      color: colors.text,
      fontSize: typography.lg,
      fontWeight: '600',
    },
    
    bodyLarge: {
      color: colors.text,
      fontSize: typography.lg,
    },
    
    body: {
      color: colors.text,
      fontSize: typography.base,
    },
    
    bodySmall: {
      color: colors.textSecondary,
      fontSize: typography.sm,
    },
    
    caption: {
      color: colors.textTertiary,
      fontSize: typography.xs,
    },
    
    textBold: {
      fontWeight: 'bold',
    },
    
    textSemiBold: {
      fontWeight: '600',
    },
    
    textCenter: {
      textAlign: 'center',
    },
    
    textRight: {
      textAlign: 'right',
    },
    
    // ========== BUTTONS ==========
    buttonPrimary: {
      backgroundColor: colors.primary,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderRadius: borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
      ...shadows.small,
    },
    
    buttonSecondary: {
      backgroundColor: colors.backgroundSecondary,
      borderWidth: 1,
      borderColor: colors.border,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderRadius: borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    buttonOutline: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.primary,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderRadius: borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    buttonText: {
      color: colors.textInverse,
      fontSize: typography.base,
      fontWeight: '600',
    },
    
    buttonTextSecondary: {
      color: colors.text,
      fontSize: typography.base,
      fontWeight: '600',
    },
    
    buttonDisabled: {
      opacity: 0.5,
    },
    
    // ========== CARDS ==========
    card: {
      backgroundColor: colors.card,
      borderRadius: borderRadius.lg,
      padding: spacing.md,
      borderWidth: 1,
      borderColor: colors.cardBorder,
      ...shadows.small,
    },
    
    cardSimple: {
      backgroundColor: colors.card,
      borderRadius: borderRadius.md,
      padding: spacing.md,
      borderWidth: 1,
      borderColor: colors.borderLight,
    },
    
    // ========== INPUTS ==========
    input: {
      backgroundColor: colors.backgroundSecondary,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: borderRadius.md,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.md,
      fontSize: typography.base,
      color: colors.text,
    },
    
    inputFocused: {
      borderColor: colors.primary,
      borderWidth: 2,
    },
    
    inputError: {
      borderColor: colors.error,
      borderWidth: 2,
    },
    
    inputLabel: {
      color: colors.textSecondary,
      fontSize: typography.sm,
      marginBottom: spacing.xs,
    },
    
    inputPlaceholder: {
      color: colors.textTertiary,
    },
    
    // ========== BADGES ==========
    badge: {
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.xs,
      borderRadius: borderRadius.full,
      backgroundColor: colors.primary,
    },
    
    badgeText: {
      color: colors.textInverse,
      fontSize: typography.xs,
      fontWeight: '600',
    },
    
    badgeSuccess: {
      backgroundColor: colors.success,
    },
    
    badgeWarning: {
      backgroundColor: colors.warning,
    },
    
    badgeError: {
      backgroundColor: colors.error,
    },
    
    // ========== DIVIDERS ==========
    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginVertical: spacing.md,
    },
    
    dividerVertical: {
      width: 1,
      backgroundColor: colors.border,
      marginHorizontal: spacing.md,
    },
    
    // ========== STATUS INDICATORS ==========
    statusDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
    },
    
    statusSuccess: {
      backgroundColor: colors.success,
    },
    
    statusWarning: {
      backgroundColor: colors.warning,
    },
    
    statusError: {
      backgroundColor: colors.error,
    },
    
    // ========== MISC ==========
    rounded: {
      borderRadius: borderRadius.md,
    },
    
    roundedFull: {
      borderRadius: borderRadius.full,
    },
    
    overflowHidden: {
      overflow: 'hidden',
    },
    
    absoluteFill: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    
    zIndex1: {
      zIndex: 1,
    },
    
    zIndex10: {
      zIndex: 10,
    },
    
    // ========== SCREEN SPECIFIC ==========
    authContainer: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      padding: spacing.lg,
    },
    
    tabBar: {
      backgroundColor: colors.card,
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    
    header: {
      backgroundColor: colors.background,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.md,
    },
  });
};

export type AppStyles = ReturnType<typeof styles>;
