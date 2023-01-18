import { StyleSheet, Text, ScrollView, View, Dimensions, Button, Image, ImageBackground, StatusBar, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import styles from './Styles'

import { createStackNavigator } from '@react-navigation/stack';

import IconV from './assets/images/article_approved.svg';
import IconDS from './assets/images/article_original.svg';

const CompendiumScreens = createStackNavigator();
const onPressHandler2 = () => { navigation.navigate(ReadArticle) }

export default function ScreenCompendium({ }) {
  return (

    <View style={styles.body_compendium}>
      <CompendiumScreens.Navigator initialRouteName="Compendium" screenOptions={{ headerShown: 0 }}>
        <CompendiumScreens.Screen name="Compendium" component={CompendiumMain} options={{ animationEnabled: false, }} />
        <CompendiumScreens.Screen name="Article" component={ReadArticle} options={{ animationEnabled: false, }} />
        <CompendiumScreens.Screen name="Disclaimer" component={DisclaimerScreen} options={{ animationEnabled: false, }} />
      </CompendiumScreens.Navigator>
    </View>

  )
};

function CompendiumMain({ navigation }) {
  return (
    <View style={styles.cmp_view}>
      <ScrollView style={styles.cmp_list}>

        <View style={styles.cmp_sep}>
          <View style={styles.cmp_sep_line}></View>
          <Text style={styles.cmp_sep_text}>Introductive articles</Text>
          <View style={styles.cmp_sep_line}></View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Article')}>
          <View style={styles.cmp_article}>
            <Text style={styles.cmp_articlename}>Welcome to the dreams</Text>
            <Text style={styles.cmp_articledesc}>Introductive article about dreaming</Text>
            <View style={styles.cmp_articleauth}>
              <Text style={styles.cmp_articleauthtext}>Added by </Text>
              <IconDS style={styles.cmp_articlestatus} />
              <Text style={styles.cmp_articleauthtextH}>Dreamscape</Text>
              <Text style={styles.cmp_articleauthtext}> | something</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Article')}>
          <View style={styles.cmp_article}>
            <Text style={styles.cmp_articlename}>Dreamscape</Text>
            <Text style={styles.cmp_articledesc}>App overview and features</Text>
            <View style={styles.cmp_articleauth}>
              <Text style={styles.cmp_articleauthtext}>Added by </Text>
              <IconDS style={styles.cmp_articlestatus} />
              <Text style={styles.cmp_articleauthtextH}>Dreamscape</Text>
              <Text style={styles.cmp_articleauthtext}> | something</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Article')}>
          <View style={styles.cmp_article}>
            <Text style={styles.cmp_articlename}>Theory baselines</Text>
            <Text style={styles.cmp_articledesc}>Dreamscape's view on a subject</Text>
            <View style={styles.cmp_articleauth}>
              <Text style={styles.cmp_articleauthtext}>Added by </Text>
              <IconDS style={styles.cmp_articlestatus} />
              <Text style={styles.cmp_articleauthtextH}>Dreamscape</Text>
              <Text style={styles.cmp_articleauthtext}> | something</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Article')}>
          <View style={styles.cmp_article}>
            <Text style={styles.cmp_articlename}>General suggestions</Text>
            <Text style={styles.cmp_articledesc}>Tips to improve dreaming performance</Text>
            <View style={styles.cmp_articleauth}>
              <Text style={styles.cmp_articleauthtext}>Added by </Text>
              <IconDS style={styles.cmp_articlestatus} />
              <Text style={styles.cmp_articleauthtextH}>Dreamscape</Text>
              <Text style={styles.cmp_articleauthtext}> | something</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Article')}>
          <View style={styles.cmp_article}>
            <Text style={styles.cmp_articlename}>Journaling</Text>
            <Text style={styles.cmp_articledesc}>Setting up dream properties and tags</Text>
            <View style={styles.cmp_articleauth}>
              <Text style={styles.cmp_articleauthtext}>Added by </Text>
              <IconDS style={styles.cmp_articlestatus} />
              <Text style={styles.cmp_articleauthtextH}>Dreamscape</Text>
              <Text style={styles.cmp_articleauthtext}> | something</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.cmp_sep}>
          <View style={styles.cmp_sep_line}></View>
          <Text style={styles.cmp_sep_text}>Advanced articles</Text>
          <View style={styles.cmp_sep_line}></View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Article')}>
          <View style={styles.cmp_article}>
            <Text style={styles.cmp_articlename}>Methods of lucid dreaming</Text>
            <Text style={styles.cmp_articledesc}>List of popular established practices</Text>
            <View style={styles.cmp_articleauth}>
              <Text style={styles.cmp_articleauthtext}>Added by </Text>
              <Text style={styles.cmp_articleauthtextH}>r/luciddreaming</Text>
              <Text style={styles.cmp_articleauthtext}> | something</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Article')}>
          <View style={styles.cmp_article}>
            <Text style={styles.cmp_articlename}>Some article</Text>
            <Text style={styles.cmp_articledesc}>Some article description</Text>
            <View style={styles.cmp_articleauth}>
              <Text style={styles.cmp_articleauthtext}>Added by </Text>
              <IconDS style={styles.cmp_articlestatus} />
              <Text style={styles.cmp_articleauthtextH}>Dreamscape</Text>
              <Text style={styles.cmp_articleauthtext}> | something</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.cmp_sep}>
          <View style={styles.cmp_sep_line}></View>
          <Text style={styles.cmp_sep_text}>Professional articles</Text>
          <View style={styles.cmp_sep_line}></View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Article')}>
          <View style={styles.cmp_article}>
            <Text style={styles.cmp_articlename}>Mutual dreams</Text>
            <Text style={styles.cmp_articledesc}>List of popular established practices</Text>
            <View style={styles.cmp_articleauth}>
              <Text style={styles.cmp_articleauthtext}>Added by </Text>
              <IconDS style={styles.cmp_articlestatus} />
              <IconV style={styles.cmp_articlestatus} />
              <Text style={styles.cmp_articleauthtextH}>Highgates</Text>
              <Text style={styles.cmp_articleauthtext}> | something</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.cmp_sep}>
          <View style={styles.cmp_sep_line}></View>
          <Text style={styles.cmp_sep_text}>Custom articles</Text>
          <View style={styles.cmp_sep_line}></View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Article')}>
          <View style={styles.cmp_article}>
            <Text style={styles.cmp_articlename}>Some article</Text>
            <Text style={styles.cmp_articledesc}>Some article description</Text>
            <View style={styles.cmp_articleauth}>
              <Text style={styles.cmp_articleauthtext}>Added by </Text>
              <IconV style={styles.cmp_articlestatus} />
              <Text style={styles.cmp_articleauthtextH}>Some dude</Text>
              <Text style={styles.cmp_articleauthtext}> | something</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Article')}>
          <View style={styles.cmp_article}>
            <Text style={styles.cmp_articlename}>Some article</Text>
            <Text style={styles.cmp_articledesc}>Some article description</Text>
            <View style={styles.cmp_articleauth}>
              <Text style={styles.cmp_articleauthtext}>Added by </Text>
              <IconV style={styles.cmp_articlestatus} />
              <Text style={styles.cmp_articleauthtextH}>Some dude</Text>
              <Text style={styles.cmp_articleauthtext}> | something</Text>
            </View>
          </View>
        </TouchableOpacity>

      </ScrollView>

      <View style={styles.seph}></View>
      <TouchableOpacity onPress={() => navigation.navigate('Disclaimer')}>
        <Text style={styles.cmp_disclaimertest}>DISCLAIMER</Text>
      </TouchableOpacity>

    </View>
  );
}

function ReadArticle({ navigation }) {
  return (
    <View style={styles.body_list}>
      <Text style={styles.splashheader} >Some article screen</Text>
    </View>
  );
}

function DisclaimerScreen({ navigation }) {
  return (
    <View style={styles.body_list}>
      <Text style={styles.splashheader} >Disclaimer text</Text>
    </View>
  );
}