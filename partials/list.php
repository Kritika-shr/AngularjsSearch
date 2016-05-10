<div class="col-md-12">
			<div class="col-md-3"></div>
			<div class="col-md-6">
			<label><h2>Search</h2></label>
			<input ng-model="query" class="form-control" placeholder="Search For Capital" autofocus>
			</div>
			<div class="col-md-3"></div>
		</div>
		<div class="col-md-12">
			<div class="col-md-3"></div>
			<div class="col-md-6">
				<table class="table table-condensed">
					<tr class="info">
						<td>Country</td>
						<td>Capital</td>
					</tr>
		  			<tr ng-repeat = "items in country |filter: query">
			  			
						<td class="active"><a href="#/details/{{country.indexOf(items)}}">{{ items.Country }}</a></td>
			  			<td class="success">{{ items.CapitalCity }}</td>
			 		 </tr>
				</table>
			</div>
			<div col-md-3></div>
		</div>	
		