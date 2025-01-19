// * --> this indicates those colors which are not changing with theme

const lightThemeBGColors = {
    signatureBG: '#FF4700',
    themeBG: '#FFFFFF',
    primaryBG: '#FFFFFF',
    secondaryBG: '#F1F1F1',
    weakBorderBG: '#D1D5DB',
    contraryThemeBG: '#000000',
    contraryPrimaryBG: '#232323',
    contrarySecondaryBG: '#273239',
    contrarWeakBorderBG: '#4B5563',
}

const lightThemeTextColors = {
    signatureText: '#FF4700',
    extraWeakText: '#D1D5DB',
    weakText: '#9CA3AF',
    normalText: '#4B5563',
    strongText: '#1F2937',
    extraStrongText: '#000000',
    contraryWeakText: '#787878',
    contraryNormalText: '#A0A0A0',
    contraryStrongText: '#BFBFBF',
    yellowText: '#DAA520',
}

const lightThemeBorderColors = {
    signatureBorder: '#FF4700',
    weakBorder: '#D1D5DB',
    contraryWeakBorder: '#4B5563',
}

const darkThemeBGColors = {
    signatureBG: '#FF4700',
    themeBG: '#111111',
    primaryBG: '#232323',
    secondaryBG: '#273239',
    weakBorderBG: '#4B5563',
    contraryThemeBG: '#FFFFFF',
    contraryPrimaryBG: '#FFFFFF',
    contrarySecondaryBG: '#E7F0FD',
    contrarWeakBorderBG: '#D1D5DB',
}

const darkThemeTextColors = {
    signatureText: '#FF4700',
    extraWeakText: '#323232',
    weakText: '#787878',
    normalText: '#A0A0A0',
    strongText: '#BFBFBF',
    extraStrongText: '#FFFFFF',
    contraryWeakText: '#9CA3AF',
    contraryNormalText: '#4B5563',
    contraryStrongText: '#1F2937',
    yellowText: '#FFFF00',
}

const darkThemeBorderColors = {
    signatureBorder: '#FF4700',
    weakBorder: '#4B5563',
    contraryWeakBorder: '#D1D5DB',
}

const immutableBGColors = {
    // standard
    '_yellowBG': '#FFFF00',
    '_redBG': '#FF0000',
    '_tomatoBG': '#FF6347',
    '_lightCoralBG': '#F08080',
    '_lightSeaGreenBG': '#20B2AA',
    '_thickBlueBG': '#0070C0',
    '_hardBlueBG': '1F497D',
    '_dodgerBlueBG': '1E90FF',
    '_purpleBG': '#B96AD9',
    '_blackBG': '#000000',
    '_whiteBG': '#FFFFFF',
    // shades of blue
    '_blueBG': '#0000FF',
    '_cornflowerBlueBG': '#6495ED',
    '_royalBlueBG': '#4169E1',
    '_lightBlueBG': '#00B0F0',
    '_aquaAccent5BG': '#4BACC6',
    '_skyBlueBG': '#87CEEB',
    // blue to pink to red
    '_pinkBG': '#FFC0CB',
    '_hotPinkBG': '#FF69B4',
    '_deepPinkBG': '#FF1493',
    '_magentaBG': '#FF00FF',
    '_paleVioletRedBG': '#DB7093',
    '_mediumVioletRedBG': '#C71585',
    '_violetBG': '#EE82EE',
    '_darkPurpleBG': '#800080',
    '_indigoBG': '#4B0082',
    // red to yellow
    '_maroonBG': '#800000',
    '_darkRed1BG': '#8B0000',
    '_darkRed2BG': '#C00000',
    '_brownBG': '#A52A2A',
    '_orangeRedBG': '#FF4500',
    '_coralBG': '#FF7F50',
    '_carrotBG': '#C0504D',
    '_darkGoldenRodBG': '#B8860B',
    '_goldenRodBG': '#DAA520',
    '_lightGoldenRodBG': '#FAFAD2',
    '_goldBG': '#FFD700',
    '_orangeBG': '#FFA500',
    '_orangeAccent6BG': '#F79646',
    // yellow to green
    '_greenYellowBG': '#ADFF2F',
    '_chartreuseBG': '#7FFF00',
    '_limeBG': '#00FF00',
    '_limeGreenBG': '#32CD32',
    '_lightGreenBG': '#92D050',
    '_greenBG': '#00B050',
    '_leafGreenBG': '#008000',
    '_darkGreenBG': '#006400',
    '_oliveGreenAccent3BG': '#9BBB59',
    // green to blue
    '_seaGreenBG': '#2E8B57',
    '_mediumSeaGreenBG': '#3CB371',
    '_darkTurquoiseBG': '#00CED1'

}

const immutableTextColors = {
    // standard
    '_redText': '#FF0000',
    '_tomatoText': '#FF6347',
    '_lightCoralText': '#F08080',
    '_lightSeaGreenText': '#20B2AA',
    '_thickBlueText': '#0070C0',
    '_hardBlueText': '1F497D',
    '_dodgerBlueText': '1E90FF',
    '_purpleText': '#B96AD9',
    '_blackText': '#000000',
    '_whiteText': '#FFFFFF',
    // shades of blue
    '_blueText': '#0000FF',
    '_cornflowerBlueText': '#6495ED',
    '_royalBlueText': '#4169E1',
    '_lightBlueText': '#00B0F0',
    '_aquaAccent5Text': '#4BACC6',
    '_skyBlueText': '#87CEEB',
    // blue to pink to red
    '_pinkText': '#FFC0CB',
    '_hotPinkText': '#FF69B4',
    '_deepPinkText': '#FF1493',
    '_magentaText': '#FF00FF',
    '_paleVioletRedText': '#DB7093',
    '_mediumVioletRedText': '#C71585',
    '_violetText': '#EE82EE',
    '_darkPurpleText': '#800080',
    '_indigoText': '#4B0082',
    // red to yellow
    '_maroonText': '#800000',
    '_darkRed1Text': '#8B0000',
    '_darkRed2Text': '#C00000',
    '_brownText': '#A52A2A',
    '_orangeRedText': '#FF4500',
    '_coralText': '#FF7F50',
    '_carrotText': '#C0504D',
    '_darkGoldenRodText': '#B8860B',
    '_goldenRodText': '#DAA520',
    '_goldText': '#FFD700',
    '_orangeText': '#FFA500',
    '_orangeAccent6Text': '#F79646',
    // yellow to green
    '_greenYellowText': '#ADFF2F',
    '_chartreuseText': '#7FFF00',
    '_limeText': '#00FF00',
    '_limeGreenText': '#32CD32',
    '_lightGreenText': '#92D050',
    '_greenText': '#00B050',
    '_leafGreenText': '#008000',
    '_darkGreenText': '#006400',
    '_oliveGreenAccent3Text': '#9BBB59',
    // green to blue
    '_seaGreenText': '#2E8B57',
    '_mediumSeaGreenText': '#3CB371',
    '_darkTurquoiseText': '#00CED1',
}

// combined attributes
export const lightModeAttributes = {
    name: 'light',
    ...lightThemeBGColors,
    ...immutableBGColors,
    ...lightThemeTextColors,
    ...immutableTextColors,
    ...lightThemeBorderColors,
}
export const darkModeAttributes = {
    name: 'dark',
    ...darkThemeBGColors,
    ...immutableBGColors,
    ...darkThemeTextColors,
    ...immutableTextColors,
    ...darkThemeBorderColors,
}