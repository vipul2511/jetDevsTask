import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const GenericIcon = ({  name, style, active=false, disabled = false, onPress, show}) => (
show ?<FontAwesome
	    name={`${name}`} 
	    style={style}
	    onPress={onPress}
	    active={!disabled}
	/>  :
	<Icon 
	    name={`${name}`} 
	    style={style}
	    onPress={onPress}
	    active={!disabled}
    /> 

	


	
)

export default GenericIcon;
