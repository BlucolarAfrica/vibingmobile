import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text } from '../../General';

import { useHeaderHeight } from 'hooks';
import { layout, pallets } from 'constant';
import { Icon } from 'assets';

const { padding } = layout.spacing;
// const { subhead } = layout.fonts;

interface Props {
  backgroundColor?: string;
  onPress?: () => void;
  hideBackIcon?: boolean;
  label?: string;
  iconColor?: string;
  icon?: IconName;
  right?: JSX.Element;
}

export default function Header({
  onPress,
  hideBackIcon,
  backgroundColor = pallets.background,
  iconColor,
  icon,
  label,
}: Props): JSX.Element | null {
  const { insets, headerHeight } = useHeaderHeight();
  const navigation = useNavigation();

  const handleBackIcon = () => navigation.canGoBack() && navigation.goBack();

  return (
    <>
      <View style={{ backgroundColor, height: insets.top }} />
      <View
        style={[
          styles.header,
          {
            backgroundColor,
            height: headerHeight - insets.top,
            paddingHorizontal: padding / 2,
          },
        ]}>
        {navigation.canGoBack() && !hideBackIcon && (
          <TouchableOpacity
            style={styles.iconBox}
            onPress={() => {
              handleBackIcon();
              onPress && onPress();
            }}>
            <Icon
              color={iconColor}
              size={18}
              name={
                icon
                  ? icon
                  : Platform.OS === 'ios'
                  ? 'chevron-left-outline'
                  : 'arrow-left-outline'
              }
            />
          </TouchableOpacity>
        )}
        {label && (
          <Text
            color={iconColor}
            variant="medium"
            // family="QS"
            textTransform="capitalize"
            style={{ marginLeft: 10 }}>
            {label}
          </Text>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconBox: {
    alignItems: 'center',
    height: 24,
    justifyContent: 'center',
    width: 24,
  },
});
