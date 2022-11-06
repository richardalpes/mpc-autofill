import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './cardSlotSlice'
import { RootState } from "./store";
import {CardSlot} from "./cardSlot";
// import styles from './Counter.module.css'

export function CardGrid() {
  // const selectedImage = useSelector((state: RootState) => state.cardSlot.selectedImage)
  // const face = useSelector((state: RootState) => state.cardSlot.face)
  const dispatch = useDispatch()

  return (
      <div className="col-lg-8 col-md-8 col-sm-6 col-6">
        <div id="card-container"
             className="row g-0 row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1"
        >
          <CardSlot ></CardSlot>
          <CardSlot ></CardSlot>
          <CardSlot ></CardSlot>
        </div>
      </div>
  )
}