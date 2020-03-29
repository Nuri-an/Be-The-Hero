import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

import logoImg from '../../assets/logo.png'; //Há 3 tamanhos de logo, deixando assim ele importa o melhor a ser utilizado. Pois os nomes estão com @2x e @3x, o sw entende


export default function Detail(){

    const route = useRoute();
    const navigation = useNavigation();

    const incident = route.params.incident;
    const massege = `Olá ${ incident.name }, estou entrando em contato pois gostaria de ajudar no caso "${ incident.title }" com o valor de ${ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value) }`;

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Héroi do caso: ${ incident.title }.`,
            recipients: [incident.email],
            body:  massege,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${ incident.whatsapp }&text=${massege}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                    
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>

            </View>

            <View style={styles.incident}>
            <Text style={[styles.incidentProperty, { marginTop: 0}]}>
                        ONG:
                    </Text>
                    <Text style={styles.incidentValue}>
                        {incident.name} de {incident.city}/{incident.uf}
                    </Text>

                    <Text style={styles.incidentProperty}>
                        CASO:
                    </Text>
                    <Text style={styles.incidentValue}>
                        {incident.title}
                    </Text>

                    <Text style={styles.incidentProperty}>
                        VALOR:
                    </Text>
                    <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('pt-BR', 
                        { style: 'currency', currency: 'BRL'}
                        ).format(incident.value)
                    }
                    </Text>
            </View>

            <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>
                        Salve o dia!
                    </Text>
                    <Text style={styles.heroTitle}>
                        Seja o héroi deste caso.
                    </Text>

                    <Text style={styles.heroDesccripion}>
                        Entre em contato
                    </Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                            <Text style={styles.actionText}>
                                Whatsapp
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.action} onPress={sendMail}>
                            <Text style={styles.actionText}>
                                E-mail
                            </Text>
                        </TouchableOpacity>
                    </View>
            </View>

            
        </View>
    );
}