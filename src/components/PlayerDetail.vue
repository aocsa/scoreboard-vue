<template>
  		<div>
				<h3>{{selectedPlayer.name}}</h3>
				<ul>
					<li>
						<span>Score: </span>
						{{selectedPlayer.score}}
					</li>
					<li>
						<span>Created: </span>
						{{selectedPlayer.created}}
					</li>
					<li>
						<span>Updated: </span>
						{{selectedPlayer.updated}}
					</li>
				</ul>
			</div>
	
</template>

<script>

export default {
   props:  ['selectedPlayer']
};
</script>

<style>

.player-detail {
   font-size: 1.1em;
   padding: 1.65em 0 1.4em 1.65em;
}
.player-detail p {
   margin: 0;
   color: rgba(255, 255, 255, 0.75);
}

.player-detail ul {
   padding: 0;
   text-transform: initial;
}

.player-detail ul span {
   color: rgba(255, 255, 255, 0.43);
   display: inline-block;
   padding-right: 0.6em;
   width: 3.8em;
}
</style>