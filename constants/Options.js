import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export const SelectTravelsList=[
    {
        id: 1,
        title: 'Single',
        desc: 'A solo trip',
        icon: <MaterialCommunityIcons name="human-male" size={25} color="black" />,
        people: '1 person'
    },
    {
        id: 2,
        title: 'Couple',
        desc: 'A trip date',
        icon: <MaterialCommunityIcons name="human-male-female" size={25} color="black" />,
        people: '2 people'
    },
    {
        id:3,
        title: 'Family',
        desc: 'A little family trip',
        icon: <MaterialCommunityIcons name="human-male-female-child" size={25} color="black" />,
        people: '3-5 people'
    },
    {
        id:4,
        title: 'Group',
        desc: 'A bunch of friends',
        icon: <FontAwesome6 name="people-group" size={25} color="black" />,
        people: '3 & above'
    }

]