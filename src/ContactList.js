import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import * as Contacts from "expo-contacts";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getContactsAsync();
  }, []);

  const getContactsAsync = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access contacts was denied");
      return;
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
    });

    if (data.length > 0) {
      setContacts(data);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>Name: {item.name}</Text>
        {item.phoneNumbers && (
          <FlatList
            data={item.phoneNumbers}
            keyExtractor={(phoneNumber) => phoneNumber.id}
            renderItem={({ item }) => <Text>Phone: {item.number}</Text>}
          />
        )}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {errorMsg && <Text>{errorMsg}</Text>}
      <FlatList
        data={contacts}
        keyExtractor={(contact) => contact.id}
        renderItem={renderItem}
      />
      <Button title="Refresh Contacts" onPress={getContactsAsync} />
    </View>
  );
}
