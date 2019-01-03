import React from 'react';
import {
  View, ListItem, Text, Left, Right, Badge,
} from 'native-base';

export default (content, idx) => {
  const color = idx % 2;
  return (
    <View key={content.label}>
      <ListItem style={{ marginLeft: 0 }}>
        <Left style={{ marginLeft: 10 }}>
          <Text>{content.label}</Text>
        </Left>
        <Right>
          <Badge
            primary={color === 0}
            success={color !== 0}
          >
            <Text>
              { color !== 0 ? `$ ${1.09}` : 1}
            </Text>
          </Badge>
        </Right>
      </ListItem>
    </View>
  );
};
