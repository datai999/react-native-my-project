/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { Component } from "react";
import { Image } from "react-native";

export default class MyImage extends Component{
    render() {
        const img =  {uri:"https://hoso.wiki/wp-content/uploads/2020/05/duong-tam.jpg"}
        return (
            <Image source={img}
                style={{width: 200, height: 200}}></Image>
        );
    }
}
