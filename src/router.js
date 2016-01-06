import Router from 'abyssa'
import State from 'abyssa'
import inscription from './views/ApplicationComponent'

Router({
	inscription: State('', inscription)
  }).init();

console.log('OK');