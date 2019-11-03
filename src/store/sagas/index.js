import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
// import { getDataTest } from '@/services/index'

const effects = {
  //延迟执行number监听
  *fetchIncrement({ payload }){
    yield delay(2000)
    yield put({ type: 'INCREMENT' })
  }
}

export function* watcher() {
  //number监听
  yield takeEvery('fetchIncrement', effects.fetchIncrement)
}
