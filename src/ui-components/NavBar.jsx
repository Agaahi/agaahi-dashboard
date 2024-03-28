/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="300px"
      height="1024px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <View
        width="300px"
        height="1024px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(66,62,59,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Text
        fontFamily="SF Pro Text"
        fontSize="32px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="38.1875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="399px"
        left="106px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Home"
        {...getOverrideProps(overrides, "Home")}
      ></Text>
      <Text
        fontFamily="SF Pro Text"
        fontSize="32px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="38.1875px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="167px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="482px"
        left="77px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Analytics"
        {...getOverrideProps(overrides, "Analytics")}
      ></Text>
      <Text
        fontFamily="SF Pro Text"
        fontSize="32px"
        fontWeight="400"
        color="rgba(216,219,226,1)"
        lineHeight="38.1875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="576px"
        left="106px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Map"
        {...getOverrideProps(overrides, "Map")}
      ></Text>
      <Icon
        width="50px"
        height="50px"
        viewBox={{ minX: 0, minY: 0, width: 50, height: 50 }}
        paths={[
          {
            d: "M49.3614 31.008L44.8755 28.5282C45.3283 26.1895 45.3283 23.7903 44.8755 21.4516L49.3614 18.9718C49.8774 18.6895 50.109 18.1048 49.9406 17.5605C48.7717 13.9718 46.7815 10.7258 44.1805 8.02423C43.7803 7.61093 43.1275 7.51012 42.622 7.79238L38.1361 10.2722C36.2512 8.7198 34.0819 7.5202 31.7337 6.73392L31.7337 1.78434C31.7337 1.21983 31.323 0.725875 30.7438 0.604908C26.8792 -0.221701 22.9198 -0.181379 19.2448 0.604908C18.6656 0.725875 18.2549 1.21983 18.2549 1.78434L18.2549 6.744C15.9172 7.54037 13.748 8.73996 11.8525 10.2823L7.37714 7.80246C6.86115 7.52021 6.21881 7.61093 5.81865 8.03432C3.21768 10.7258 1.22745 13.9718 0.0585871 17.5706C-0.120428 18.1149 0.121769 18.6996 0.637753 18.9819L5.12366 21.4617C4.67085 23.8004 4.67085 26.1996 5.12366 28.5383L0.637753 31.0181C0.121769 31.3004 -0.109897 31.885 0.0585871 32.4294C1.22745 36.0181 3.21768 39.264 5.81865 41.9656C6.21881 42.3789 6.87168 42.4798 7.37714 42.1975L11.863 39.7177C13.748 41.2701 15.9172 42.4697 18.2655 43.256L18.2655 48.2156C18.2655 48.7801 18.6761 49.2741 19.2553 49.3951C23.1199 50.2217 27.0793 50.1813 30.7544 49.3951C31.3335 49.2741 31.7442 48.7801 31.7442 48.2156L31.7442 43.256C34.0819 42.4596 36.2512 41.26 38.1466 39.7177L42.6325 42.1975C43.1485 42.4798 43.7909 42.389 44.191 41.9656C46.792 39.2741 48.7822 36.0282 49.9511 32.4294C50.109 31.875 49.8774 31.2903 49.3614 31.008ZM24.9943 33.0544C20.3505 33.0544 16.5701 29.4354 16.5701 24.9899C16.5701 20.5444 20.3505 16.9254 24.9943 16.9254C29.6382 16.9254 33.4185 20.5444 33.4185 24.9899C33.4185 29.4354 29.6382 33.0544 24.9943 33.0544Z",
            fill: "rgba(216,219,226,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="75.68%"
        bottom="19.43%"
        left="41.67%"
        right="41.67%"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
      <Text
        fontFamily="SF Pro Text"
        fontSize="20px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
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
        top="881px"
        left="113px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Log Out"
        {...getOverrideProps(overrides, "Log Out")}
      ></Text>
      <Image
        width="125px"
        height="125px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="124px"
        left="27px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image 1")}
      ></Image>
      <Icon
        width="116.02px"
        height="0px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 2.0000001397909273,
          height: 116.00000292149889,
        }}
        paths={[
          {
            d: "M0 -5.55112e-17L116.017 -5.55112e-17L116.017 -1L0 -1L0 -5.55112e-17Z",
            stroke: "rgba(255,255,255,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="133px"
        left="150px"
        transformOrigin="top left"
        transform="rotate(89.01deg)"
        {...getOverrideProps(overrides, "Line 2")}
      ></Icon>
      <Text
        fontFamily="SF Pro Text"
        fontSize="32px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="38.1875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="167px"
        left="168px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Agaahi"
        {...getOverrideProps(overrides, "Agaahi")}
      ></Text>
    </View>
  );
}
