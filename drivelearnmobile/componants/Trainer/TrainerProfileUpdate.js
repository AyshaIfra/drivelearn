import React, {useEffect, useState} from 'react';
import {
    ImageBackground,
    Keyboard, Modal,
    ScrollView, StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {Formik} from "formik";
import {Picker} from "@react-native-picker/picker";
import {Base} from "../../urls/base";




function TrainerProfileUpdate({navigation,route}) {

    const { username } = route.params;

    // this is the count for notification count
    const [notificCount,setNotificCount]=useState('0');

    // getting student
    // let url1=Base+'student/getStudent';
    let url1=Base+'employee/getemployee';
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(()=>{


        // this is employ loading
        fetch(url1, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username
            })
        })
            .then((response) => response.json())
            .then((json) => {
                setData(json)
                console.log(json);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));



        // here the notification number calling at the be begining
        let notificUrl=Base+'notification/unreads';
        fetch(notificUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                receiverUserId:0,
                receiverUsername: username,
                receiverType:2

            })
        })
            .then((response) => response.json())
            .then((json) => {
                //code here
                if(json<10){
                    setNotificCount(json.toString());
                }else if (json>=10){
                    setNotificCount('9+');
                }
                console.log(json);
            })
            .catch((error) => console.error(error))




        //here is the notification updating
        const setNotificUpdate=setInterval(()=>{
            fetch(notificUrl, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    receiverUserId:0,
                    receiverUsername: username,
                    receiverType:2

                })
            })
                .then((response) => response.json())
                .then((json) => {
                    //code here
                    if(json<10){
                        setNotificCount(json.toString());
                    }else if (json>=10){
                        setNotificCount('9+');
                    }
                    console.log(json);
                })
                .catch((error) => console.error(error))

        },10000);

        return()=>{
            clearInterval(setNotificUpdate);
        }
    },[]);

    const [navModal,setNavModal]=useState(false);


    return (

        <TouchableWithoutFeedback >
            <ScrollView>
                <ImageBackground source={require('../../asets/background/StudentView.png')} style={styles.imageBac}>
                    <View style={styles.headerView}>
                        {/*logo*/}
                        <ImageBackground source={require('../../asets/logo/Logo_Box.png')} style={styles.logo}></ImageBackground>

                        {/*nav div*/}
                        <View style={styles.navbar}>


                            {/*home navigation*/}
                            <TouchableOpacity onPress={()=>navigation.navigate('TrainerFrontPage',{username:username})} >
                                <ImageBackground source={require('../../asets/icons/home.png')} style={styles.iconStyle}></ImageBackground>
                            </TouchableOpacity>

                            {/*notification navigation*/}
                            <TouchableOpacity onPress={()=>navigation.navigate('TrainerNotification',{username:username})}>
                                <ImageBackground source={require('../../asets/icons/notification.png')} style={styles.iconStyle}>
                                    {notificCount==='0'?null:<View style={styles.notificWarnView}><Text style={styles.notificWarn}>{notificCount}</Text></View>}
                                </ImageBackground>
                            </TouchableOpacity>


                            {/*location navigation*/}
                            <TouchableOpacity onPress={()=>navigation.navigate('TrainerProfileUpdate',{username:username})}>
                                <ImageBackground source={require('../../asets/icons/user.png')} style={styles.iconStyle}></ImageBackground>
                            </TouchableOpacity>

                        </View>


                    </View>

                    <View style={styles.middleVIew}>

                        <TextInput
                            placeholder={'Full Name'}
                            style={styles.inputone}
                            placeholderTextColor={'white'}
                            // value={name}
                            // onChangeText={(text)=>{
                            //     setName(text);
                            // }}

                        />
                        

                        <TextInput
                            placeholder={'Contact'}
                            style={styles.inputone}
                            placeholderTextColor={'white'}
                            // value={contact}
                            // onChangeText={(text)=>{
                            //     setContact(text);
                            // }}
                            //
                        />
                        <TextInput
                            placeholder={'Id Number'}
                            style={styles.inputone}
                            placeholderTextColor={'white'}
                            // value={id}
                            // onChangeText={(text)=>{
                            //     setId(text);
                            // }}

                        />
                        <View style={styles.fillerMiddle}></View>
                        <TouchableOpacity style={styles.submitBtn}>
                            <Text style={styles.middleButtonText}>Update</Text>
                        </TouchableOpacity>
                        <View style={styles.fillerMiddle}></View>
                    </View>
















                    {/*space for body*/}








                </ImageBackground>
            </ScrollView>
        </TouchableWithoutFeedback>

    );
};


const styles =StyleSheet.create({
    imageBac:{
        width:'100%',
        minHeight:800,
    },
    headerView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    logo:{
        width:70,
        height:70,
        margin:5
    },
    navbar:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems:'center',
        backgroundColor: '#ffffff25',
        // width:220,
        height: 40,
        margin:10,
        borderRadius:10,
        paddingEnd:10
    },
    iconStyle:{
        width:21,
        height:21,
        padding:10,
        margin: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    modalMainView:{
        flex:1,
        backgroundColor:'#ffffff20',
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    modalView:{
        minHeight: 800,
        backgroundColor:'black',
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    modalBox:{
        width:250,
        height:230,
        backgroundColor: '#000000',
        marginTop:60,
        marginEnd:10,
        borderRadius: 10,
        // borderColor:'white',
        // borderWidth:1
    },
    nameBox:{
        width:'100%',
        height:100,
        backgroundColor:'#ffffff10',
        borderRadius:10
    },
    textStyles:{
        color:'white',
        fontSize:25,
        padding:4,
        alignItems:'baseline'
    },
    nameView:{
        flexDirection:'row',
        justifyContent:'flex-end',
        fontWeight:'bold',
    },
    modalHeader:{
        color: 'white',
        fontSize: 15,
        paddingLeft:15,
        paddingTop:10,
        fontWeight: 'bold',
        paddingBottom:30,

    },
    modelIndex:{
        color:'white',
        fontSize: 15,
        paddingLeft:15,
        // paddingTop:10,
        paddingBottom:15,
    },
    notificWarn:{
        color:'red',
        fontSize:10,
        fontWeight:'bold'
    },
    notificWarnView:{
        width:12,
        height:12,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00ff49',
        borderRadius:10

    },
    newCourceOuterView:{
        width:'95%',
        height:150,
        backgroundColor:'#ffffff20',
        marginLeft:'2.5%',
        marginRight:'2.5%',
        borderRadius:12,
        marginTop: 20,
        padding:15,
    },
    courceHeaderView:{
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    headerStyle:{
        color:'white',
        fontSize:19,
    },
    descStyle:{
        color:'white',
        paddingTop: 12,
    },
    startButton:{
        backgroundColor:'#32DE3B',
        width:75,
        height:35,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7
    },
    inputone: {
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        width: 300,
        paddingBottom: 3,
        marginBottom:10,
        marginTop:20,
    },
    middleVIew:{
        width:'95%',
        marginLeft:'2.5%',
        marginRight:'2.5%',
        alignItems:'center',
        marginTop:50,
        marginBottom:10,
        paddingBottom:10,
        backgroundColor:'#ffffff20',
        borderRadius:20

    },
    fillerMiddle:{
        height:30
    },
    submitBtn:{
        width:120,
        height:50,
        backgroundColor:'red',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    middleButtonText:{
        color:'green',
        fontSize:18
    }



})


export default TrainerProfileUpdate;
