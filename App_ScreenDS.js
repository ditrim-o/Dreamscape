import { StyleSheet, TouchableOpacity, Text, View, Dimensions, Button, Image, ImageBackground, StatusBar, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './Styles'

import IconDot from './assets/images/list_depleted.svg';


export default function ScreenDS() {
  return (

    <View style={styles.body_ds}>

      <View style={{ flex: 1, flexGrow: 1, }}>
        <ScrollView fadingEdgeLength={50}>

          <Text style={styles.ds_header}>Hi!</Text>

          <Text style={styles.home_list_content}>
            Dreamscape is an indie project. At start it was intended to be just a small app for personal usage, just a bit better than a paper notepad, but now it has awesome plans.
          </Text>
          <Text style={styles.home_list_content}>
            It is absolutely free for use, and there is even no ads, because they can easily defocus your dream memory and ruin a bit of practice, also me as author takes strong anti-marketing position.
          </Text>

          <Text style={styles.cmp_article_in_elementbold}> • Free and ad-free</Text>
          <Text style={styles.cmp_article_in_elementbold}> • Completely offline</Text>
          <Text style={styles.cmp_article_in_elementbold}> • No trackers, metrics and other marketing BS</Text>
          <Text style={styles.cmp_article_in_elementbold}> • No shady user agreements that noone reads</Text>

          <Text style={styles.ds_note}>
            Note: For any future planned features that involve online connection, payment or data collection there will be straightforward switches in settings that are off by default.
          </Text>

          <Text style={styles.home_list_content}>
            So if you liked Dreamscape, please appreciate it with some donation. It will also allow to work on further development to bring you better experience and useful features, and to implement Dreamscape as how i see it complete.
          </Text>
          <Text style={styles.home_list_content}>
            Here is what I would like to bring with your support:
          </Text>

          <Text style={styles.ds_header}>Basic features</Text>

          <Text style={styles.cmp_article_in_elementbold}> • Dream world maps</Text>
          <Text style={styles.home_list_content}>
            Mapping is one of the most powerful tools in recollecting dreams...
          </Text>

          <Text style={styles.cmp_article_in_elementbold}> • Relative map</Text>
          <Text style={styles.home_list_content}>
            An experimental AI-generated map screen that draws relation of your dreams between each other...
          </Text>

          <Text style={styles.cmp_article_in_elementbold}> • Various tweaks, features and widgets</Text>
          <Text style={styles.home_list_content}>
            Lots of UI tweaks and features to customize Dreamscape for your needs. For example..
          </Text>

          <Text style={styles.cmp_article_in_elementbold}> • Research participation</Text>
          <Text style={styles.home_list_content}>
            We would like to help the world to understand dreaming and dreams better. We never share any of your information until you decide to do so, so if you would like your dreams to be (anonymously) taken for study, you can opt...
          </Text>

          <Text style={styles.ds_header}>Dreamscape for any device</Text>

          <Text style={styles.cmp_article_in_elementbold}> • Vertical layout for tablets</Text>
          <Text style={styles.cmp_article_in_elementbold}> • PC and Web apps</Text>

          <Text style={styles.ds_header}>Account and Community</Text>

          <Text style={styles.cmp_article_in_elementbold}> • Dreams sharing and commenting</Text>
          <Text style={styles.cmp_article_in_elementbold}> • Community forum</Text>
          <Text style={styles.cmp_article_in_elementbold}> • Profile and PMs</Text>
          <Text style={styles.cmp_article_in_elementbold}> • Compendium articles submission</Text>

          <Text style={styles.ds_note}>
            Note: It will never be obligatory to have an account so all the basic features will keep working as they are now.
          </Text>

          <Text style={styles.ds_header}>Paid subscription and special features</Text>

          <Text style={styles.cmp_article_in_elementbold}> • Encrypted cloud storage</Text>
          <Text style={styles.home_list_content}>
            Sync to access your dreams from any device...
          </Text>

          <Text style={styles.cmp_article_in_elementbold}> • Analytics and suggestions</Text>
          <Text style={styles.home_list_content}>
            More dream switches based on which Dreamscape will provide some suggestions to adjust your day a bit for better resting and dreaming performance...
          </Text>

          <Text style={styles.cmp_article_in_elementbold}> • Community blog page</Text>
          <Text style={styles.home_list_content}>
            Personal blog page that...
          </Text>

          <Text style={styles.cmp_article_in_elementbold}> • Some handy content</Text>
          <Text style={styles.home_list_content}>
            Additional map templates and compendium articles...
          </Text>

          <Text style={styles.ds_note}>
            Note: Keep in mind that all or some of these features may not be released. It is dependent from various factors like spare time and efficiency of donations.
          </Text>

        </ScrollView>
      </View>

      <TouchableOpacity style={[styles.tags_newtag_window_btn]} >
        <Text style={styles.tags_newtag_btn_text}>Support Dreamscape</Text>
      </TouchableOpacity>

    </View>

  )
};

