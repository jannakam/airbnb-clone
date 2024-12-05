import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Box } from "@/components/ui/box";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Divider } from "@/components/ui/divider";

const MenuSection = ({ title, items }) => {
  const getIcon = (itemText) => {
    const iconMap = {
      // Settings section
      "Personal information": "person-outline",
      "Payments and payouts": "payment",
      "Taxes": "receipt-long",
      "Notifications": "notifications-none",
      "Login and security": "security",
      "Accessibility": "accessibility",
      "Translation": "translate",
      "Privacy and sharing": "privacy-tip",
      
      // Hosting section
      "List your space": "home",
      "Find a co-host": "people-outline",
      "Host an experience": "explore",
      
      // Tools section
      "Siri Settings": "settings-voice",
      
      // Support section
      "Visit the Help Center": "help-outline",
      "Get help with a safety issue": "health-and-safety",
      "Report a neighborhood concern": "report-problem",
      "How Airbnb works": "info-outline",
      "Give us feedback": "feedback",
      
      // Legal section
      "Terms of Service": "description",
      "Privacy Policy": "policy",
      "Open source licenses": "integration-instructions",
    };

    return iconMap[itemText] || "chevron-right";
  };

  return (
    <Box className="mb-6">
      <Text className="text-lg font-semibold mb-2">{title}</Text>
      {items.map((item, index) => (
        <TouchableOpacity key={index}>
          <View className="flex-row justify-between items-center py-3">
            <View className="flex-row items-center gap-3">
              <Icon name={getIcon(item)} size={24} color="#717171" />
              <Text className="text-base">{item}</Text>
            </View>
            <Icon name="chevron-right" size={20} color="#717171" />
          </View>
          {index < items.length - 1 && (
            <Divider orientation="horizontal" className="bg-primary-500 opacity-50" />
          )}
        </TouchableOpacity>
      ))}
    </Box>
  );
};

const Profile = () => {
  const userName = "Khaled";
  const userInitials = userName.charAt(0);

  return (
    <ScrollView className="flex-1 bg-white p-5">
      <Text className="text-3xl font-semibold mb-6">Profile</Text>

      {/* Profile Header */}
      <TouchableOpacity>
        <Box className="py-4">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center space-x-3 gap-5 p-5">
              <Avatar size="lg">
                <AvatarFallbackText>{userInitials}</AvatarFallbackText>
              </Avatar>
              <View>
                <Text className="text-xl font-semibold">{userName}</Text>
                <Text className="text-gray-500">Show profile</Text>
              </View>
            </View>
            <Icon name="chevron-right" size={24} color="#717171" />
          </View>
          <Divider orientation="horizontal" className="bg-primary-500 opacity-50" />
        </Box>
      </TouchableOpacity>

      {/* Hosting Section */}
      <MenuSection
        title="Settings"
        items={[
          "Personal information",
          "Payments and payouts",
          "Taxes",
          "Notifications",
          "Login and security",
          "Accessibility",
          "Translation",
          "Privacy and sharing",
        ]}
      />

      {/* Account Settings */}
      <MenuSection
        title="Hosting"
        items={[
          "List your space",
          "Find a co-host",
          "Host an experience",
        ]}
      />

      {/* Hosting Tools */}
      <MenuSection
        title="Tools"
        items={["Siri Settings"]}
      />

      {/* Support */}
      <MenuSection
        title="Support"
        items={[
          "Visit the Help Center",
          "Get help with a safety issue",
          "Report a neighborhood concern",
          "How Airbnb works",
          "Give us feedback"
        ]}
      />

      {/* Legal */}
      <MenuSection
        title="Legal"
        items={["Terms of Service", "Privacy Policy", "Open source licenses"]}
      />

      {/* Logout */}
      <TouchableOpacity className="py-4 mb-8">
        <Text className=" text-primary-500 underline text-lg">Log out</Text>
      </TouchableOpacity>

      {/* Version */}
      <Text className="text-gray-400 text-md mb-8">Version 1.0.0</Text>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
