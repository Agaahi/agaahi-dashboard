/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function ActiveDevices(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="314px"
      height="466px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ActiveDevices")}
      {...rest}
    >
      <View
        width="314px"
        height="466px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="25px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244,244,244,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Text
        fontFamily="SF Pro Text"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="23.8671875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="14px"
        left="87px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Active Devices"
        {...getOverrideProps(overrides, "Active Devices")}
      ></Text>
      <View
        width="266px"
        height="35px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="59px"
        left="24px"
        borderRadius="25px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <View
        width="243px"
        height="58px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="115px"
        left="35px"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></View>
      <Icon
        width="40px"
        height="35px"
        viewBox={{ minX: 0, minY: 0, width: 40, height: 35 }}
        paths={[
          {
            d: "M40 8.75L40 31.25C40 33.3203 38.3203 35 36.25 35L3.75 35C1.67969 35 0 33.3203 0 31.25L0 8.75C0 6.67969 1.67969 5 3.75 5L10.625 5L11.5859 2.42969C12.1328 0.96875 13.5312 0 15.0938 0L24.8984 0C26.4609 0 27.8594 0.96875 28.4062 2.42969L29.375 5L36.25 5C38.3203 5 40 6.67969 40 8.75ZM29.375 20C29.375 14.8281 25.1719 10.625 20 10.625C14.8281 10.625 10.625 14.8281 10.625 20C10.625 25.1719 14.8281 29.375 20 29.375C25.1719 29.375 29.375 25.1719 29.375 20ZM26.875 20C26.875 23.7891 23.7891 26.875 20 26.875C16.2109 26.875 13.125 23.7891 13.125 20C13.125 16.2109 16.2109 13.125 20 13.125C23.7891 13.125 26.875 16.2109 26.875 20Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="27.04%"
        bottom="65.45%"
        left="14.97%"
        right="72.29%"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
      <Text
        fontFamily="SF Pro Text"
        fontSize="15px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="17.900390625px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="125px"
        left="117px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="36th Street &#xA;@ Memorial Drive"
        {...getOverrideProps(overrides, "36th Street @ Memorial Drive")}
      ></Text>
    </View>
  );
}
