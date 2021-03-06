var db = window.openDatabase("Database", "1.0", "LogDB", 2 * 1024 * 1024);

$(document).ready(function(){
	dummy();
});

function dummy() {
	db.transaction(function(tx) {
		tx.executeSql('DROP TABLE IF EXISTS ACTION ');
		tx.executeSql('create table if not exists ACTION (id integer primary key, TITLE text, CLASSNAME text, START_TIME date, END_TIME date, WHILE integer)');
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
				+ " VALUES ('home', 'fa fa-home', '2014-03-19T07:00:00.332Z', 7)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('book', 'fa fa-book', '2014-03-19T08:08:18.011Z', 776)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('tv', 'li li_tv', '2014-03-19T09:55:16.222Z', 9596)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('shirt', 'li li_t-shirt', '2014-03-19T11:25:31.333Z', 4)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('flask', 'fa fa-flask', '2014-03-19T14:05:01.220Z', 3780)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('book', 'fa fa-book', '2014-03-19T16:23:32.516Z', 1972)");		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('coffee', 'fa fa-coffee', '2014-03-19T19:00:08.217Z', 55)");
		
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('child', 'fa fa-child', '2014-03-22T20:21:33.152Z', 3727)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('book', 'fa fa-book', '2014-03-22T23:32:58.311Z', 19)");
			
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('bulb', 'li li_bulb', '2014-03-27T16:49:26.218Z', 1279)");
						
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('automobile', 'fa fa-automobile', '2014-03-30T09:09:10.440Z', 5729)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('flask', 'fa fa-flask', '2014-03-30T10:33:26.330Z', 12)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('moon', 'fa fa-moon-o', '2014-03-30T11:45:06.444Z', 924)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('pen', 'li li_pen', '2014-03-30T15:05:11.238Z', 19)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('book', 'fa fa-book', '2014-03-30T19:48:37.135Z', 3892)");
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('pen', 'li li_pen', '2014-03-30T20:05:11.238Z', 3600)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('book', 'fa fa-book', '2014-03-30T21:48:37.135Z', 60)");
			
			
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('home', 'fa fa-home', '2014-04-13T07:31:06.559Z', 2558)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('phone', 'fa fa-phone', '2014-04-13T08:23:06.459Z', 1030)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('gamepad', 'fa fa-gamepad', '2014-04-13T11:43:02.152Z', 403)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('cutlery', 'fa fa-cutlery', '2014-04-13T16:23:06.359Z', 3019)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('home', 'fa fa-home', '2014-04-13T20:56:16.339Z', 555)");
		
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('home', 'fa fa-home', '2014-04-18T04:31:06.559Z', 1242)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('plane', 'fa fa-plane', '2014-04-18T05:23:06.459Z', 315)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('trash', 'li li_trash', '2014-04-18T10:43:02.152Z', 4352)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('scissors', 'fa fa-scissors', '2014-04-18T15:23:06.359Z', 112)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('pen', 'li li_pen', '2014-04-18T22:56:16.339Z', 5305)");
		
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('home', 'fa fa-home', '2014-04-24T05:51:06.229Z', 244)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('comment', 'fa fa-comment', '2014-04-24T07:13:46.439Z', 301)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('hospital', 'fa fa-hospital-o', '2014-04-24T11:13:42.142Z', 1237)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('mobile', 'fa fa-mobile', '2014-04-24T14:12:36.320Z', 518)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('home', 'fa fa-home', '2014-04-24T23:02:31.319Z', 6215)");
		
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('home', 'fa fa-home', '2014-04-30T05:51:06.229Z', 4139)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('coffee', 'fa fa-coffee', '2014-04-30T06:13:16.429Z', 301)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('child', 'fa fa-child', '2014-04-30T12:32:12.242Z', 30)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('stethoscope', 'fa fa-stethoscope', '2014-04-30T17:52:26.120Z', 28)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('code', 'fa fa-code', '2014-04-30T23:52:21.219Z', 32666)");
		
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('leaf', 'fa fa-leaf', '2014-05-03T03:21:36.215Z', 3312)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('book', 'fa fa-book', '2014-05-03T05:22:56.322Z', 1)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('flask', 'fa fa-flask', '2014-05-03T11:22:44.212Z', 522)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('spoon', 'fa fa-spoon', '2014-05-03T13:23:15.426Z', 46)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('code', 'fa fa-code', '2014-05-03T18:23:51.119Z', 215)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('shirt', 'li li_t-shirt', '2014-05-03T19:53:51.315Z', 426)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('home', 'fa fa-home', '2014-05-03T22:22:31.449Z', 5535)");
		
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('beer', 'fa fa-beer', '2014-05-07T02:33:46.115Z', 2)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('home', 'fa fa-home', '2014-05-07T09:32:26.302Z', 521)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('hospital', 'fa fa-hospital-o', '2014-05-07T13:44:44.444Z', 32323)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('keyboard', 'fa fa-keyboard-o', '2014-05-07T18:31:25.426Z', 11)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('code', 'fa fa-code', '2014-05-07T22:43:11.319Z', 111)");
		
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('puzzle', 'fa fa-puzzle-piece', '2014-05-12T07:21:06.215Z', 532)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('video', 'li li_video', '2014-05-12T09:59:56.442Z', 42324)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('bulb', 'li li_bulb', '2014-05-12T17:42:24.304Z', 55)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('book', 'fa fa-book', '2014-05-12T21:21:15.521Z', 4332)");
		
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('comment', 'fa fa-comment', '2014-05-21T06:51:31.113Z', 2333)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('dribbble', 'fa fa-dribbble', '2014-05-21T10:27:52.357Z', 123)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('coffee', 'fa fa-coffee', '2014-05-21T13:52:44.254Z', 34)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('bookmark', 'fa fa-bookmark', '2014-05-21T17:46:49.323Z', 4345)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('pen', 'li li_pen', '2014-05-21T19:23:45.521Z', 5823)");
		
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('music', 'fa fa-music', '2014-05-25T07:26:55.451Z', 21)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('glass', 'fa fa-glass', '2014-05-25T08:44:52.357Z', 43123)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('flask', 'fa fa-flask', '2014-05-25T12:38:27.450Z', 75)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('tv', 'li li_tv', '2014-05-25T15:06:10.300Z', 12432)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('child', 'fa fa-child', '2014-05-25T20:08:05.426Z', 2)");
		
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('moon', 'fa fa-moon-o', '2014-05-30T01:21:01.123Z', 527)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('beer', 'fa fa-beer', '2014-05-30T03:31:00.234Z', 93232)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('desktop', 'fa fa-desktop', '2014-05-30T15:33:44.348Z', 17)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('leaf', 'fa fa-leaf', '2014-05-30T19:55:59.320Z', 5)");
		
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('video', 'li li_video', '2014-06-08T09:33:32.463Z', 12324)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('pen', 'li li_pen', '2014-06-08T11:52:20.211Z', 29)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('trash', 'li li_trash', '2014-06-08T16:55:24.348Z', 1124)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('home', 'fa fa-home', '2014-06-08T21:25:39.320Z', 52)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('book', 'fa fa-book', '2014-06-08T23:32:31.310Z', 3231)");
		
		
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('home', 'fa fa-home', '2014-06-11T10:44:28.532Z', 3)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('book', 'fa fa-book', '2014-06-11T14:01:13.211Z', 911)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('moon', 'fa fa-moon-o', '2014-06-11T15:22:36.328Z', 2239)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('puzzle', 'fa fa-puzzle-piece', '2014-06-11T17:55:10.100Z', 59)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('book', 'fa fa-book', '2014-06-11T19:55:21.310Z', 386)");
		tx.executeSql("INSERT INTO ACTION (TITLE, CLASSNAME, START_TIME, WHILE) "
			+ " VALUES ('code', 'fa fa-code', '2014-06-11T21:07:31.310Z', 22)");
			
	});
}
