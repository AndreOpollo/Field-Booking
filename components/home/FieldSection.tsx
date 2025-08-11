import { FlashList } from '@shopify/flash-list'
import React from 'react'
import { View } from 'react-native'
import FieldCard from './FieldCard'
import { Field } from './types'

const fields = [
    {
    id:'1',    
    image: ['https://thumbs.dreamstime.com/b/tennis-court-596084.jpg',
        'https://media.istockphoto.com/id/1056806530/photo/huge-rugby-stadium-with-fans-and-green-grass.jpg?s=612x612&w=0&k=20&c=weS2eBKdelupv7jEqhlMXNA4JWsDIfCT-pOFlRj6ouY=',
        'https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=',
         'https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc='
    ],
    location: 'Kennington Oval, London',
    rating: 5,
    time: 'Aug 16, 11:00am - 12:30pm',
    price: "145.9",
    gameTags: [
      { name: 'Badminton', color: 'cyan' },
      { name: 'Football', color: 'yellow' },
    ],
  },
  {
    id:'2',
    image: ['https://thumbs.dreamstime.com/b/tennis-court-596084.jpg',
        'https://media.istockphoto.com/id/1056806530/photo/huge-rugby-stadium-with-fans-and-green-grass.jpg?s=612x612&w=0&k=20&c=weS2eBKdelupv7jEqhlMXNA4JWsDIfCT-pOFlRj6ouY=',
        'https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc='
    ],
    location: 'Kennington Oval, London',
    rating: 5,
    time: 'Aug 16, 11:00am - 12:30pm',
    price: "145.9",
    gameTags: [
      { name: 'Badminton', color: 'cyan' },
      { name: 'Football', color: 'yellow' },
    ],
  },
  {
    id:'3',
    image: ['https://thumbs.dreamstime.com/b/tennis-court-596084.jpg',
        'https://media.istockphoto.com/id/1056806530/photo/huge-rugby-stadium-with-fans-and-green-grass.jpg?s=612x612&w=0&k=20&c=weS2eBKdelupv7jEqhlMXNA4JWsDIfCT-pOFlRj6ouY=',
        'https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc='
    ],
    location: 'Kennington Oval, London',
    rating: 5,
    time: 'Aug 16, 11:00am - 12:30pm',
    price: "145.9",
    gameTags: [
      { name: 'Badminton', color: 'cyan' },
      { name: 'Football', color: 'yellow' },
    ],
  },
  {
    id:'4',
    image: ['https://thumbs.dreamstime.com/b/tennis-court-596084.jpg',
        'https://media.istockphoto.com/id/1056806530/photo/huge-rugby-stadium-with-fans-and-green-grass.jpg?s=612x612&w=0&k=20&c=weS2eBKdelupv7jEqhlMXNA4JWsDIfCT-pOFlRj6ouY=',
        'https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc='
    ],
    location: 'Kennington Oval, London',
    rating: 5,
    time: 'Aug 16, 11:00am - 12:30pm',
    price: "145.9",
    gameTags: [
      { name: 'Badminton', color: 'cyan' },
      { name: 'Football', color: 'yellow' },
    ],
  },
  {
    id:'5',
    image: ['https://thumbs.dreamstime.com/b/tennis-court-596084.jpg',
        'https://media.istockphoto.com/id/1056806530/photo/huge-rugby-stadium-with-fans-and-green-grass.jpg?s=612x612&w=0&k=20&c=weS2eBKdelupv7jEqhlMXNA4JWsDIfCT-pOFlRj6ouY=',
        'https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc='
    ],
    location: 'Kennington Oval, London',
    rating: 5,
    time: 'Aug 16, 11:00am - 12:30pm',
    price: "145.9",
    gameTags: [
      { name: 'Badminton', color: 'cyan' },
      { name: 'Football', color: 'yellow' },
    ],
  },
]
const FieldSection = () => {
    const renderItem = ({item,index}:{item:Field,index:number})=>(
        <FieldCard field={item} index={index}/>
    )
  return (
    <View>
      <FlashList
      data={fields}
      renderItem={renderItem}
      estimatedItemSize={300}
      />
    </View>
  )
}

export default FieldSection