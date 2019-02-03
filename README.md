# Nativescript Rotating Menu

This app is a demonstration on how to create a rotating menu animation.

![mock ups](https://github.com/williamjuan027/ns-menu-rotate-template/blob/master/screenshots/animatedMenu.gif)

Link to playground - https://play.nativescript.org/?template=play-ng&id=B8bnYx&v=33

## Development
This app is built with the NativeScript CLI. Once you have the [CLI](https://docs.nativescript.org/start/quick-setup) installed, start by cloning the repo:  
```
git clone https://github.com/williamjuan027/ns-menu-rotate-template
cd ns-menu-rotate-template
```

From there you can use the `run` command to run the app on iOS:  
```
tns run ios
```

And the same command to run the app on Android:  
```
tns run android
```

## Walkthrough

**Architecture**  
`/home` - This is where the rotating menu and the `router-outlet` is set up  
`/home/*/` - These are placeholder modules that can be navigated from `home` through the menu

**Animation**

