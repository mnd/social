/*
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import axios from 'nextcloud-axios'
import Vue from 'vue'

const state = {
	accounts: {}
}
const mutations = {
	addAccount(state, { uid, data }) {
		Vue.set(state.accounts, uid, data)
	}
}
const getters = {
	getAccount(state) {
		return (uid) => state.accounts[uid]
	}
}
const actions = {
	fetchAccountInfo(context, uid) {
		axios.get(OC.generateUrl('apps/social/local/account/' + uid)).then((response) => {
			context.commit('addAccount', { uid: uid, data: response.data })
		})
	}
}

export default { state, mutations, getters, actions }