(this.webpackJsonpproject_poc=this.webpackJsonpproject_poc||[]).push([[0],{51:function(e,t,n){e.exports=n(79)},56:function(e,t,n){},61:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),c=n.n(r),o=(n(56),n(24)),l=n.n(o),s=n(37),u=n(38),m=n(39),d=n(47),p=n(45),v=n(113),h=n(46),f=n(108),E=n(114),b=function(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(h.a)(n,2),c=r[0],o=r[1];return i.a.createElement(f.a,{elevation:6,style:{padding:"25px"}},i.a.createElement(E.a,{fullWidth:!0,label:"Search...",value:c,onChange:function(e){return o(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&t(c)}}))},g=n(112),y=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var n="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{elevation:6,style:{height:"70%"}},i.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:n})),i.a.createElement(f.a,{elevation:6,style:{padding:"12px"}},i.a.createElement(g.a,{variant:"h4"},t.snippet.title," - ",t.snippet.channelTitle),i.a.createElement(g.a,{variant:"subtitle1"},t.snippet.channelTitle),i.a.createElement(g.a,{variant:"subtitle2"},t.snippet.description)))},S=function(e){var t=e.video,n=e.onVideoSelect;return i.a.createElement(v.a,{item:!0,xs:12},i.a.createElement(f.a,{style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){return n(t)}},i.a.createElement("img",{style:{marginRight:"5px"},alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),i.a.createElement(g.a,{variant:"subtitle1"},i.a.createElement("b",null,t.snippet.title))))},w=function(e){var t=e.videos,n=e.onVideoSelect,a=t.map((function(e){return i.a.createElement(S,{onVideoSelect:n,key:e.id.videoId,video:e})}));return i.a.createElement(v.a,{container:!0,spacing:10},a)},k=(n(61),n(44)),x=n.n(k).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),V=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={videos:[],selectedVideo:null},e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e.setSelectedVideo=function(t){e.setState({selectedVideo:t})},e.handleSubmit=function(){var t=Object(s.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("search",{params:{part:"snippet",maxResults:5,key:"AIzaSyBFj8LyuNi9Zbbg9iSa8FERsU7fcLHMf5k",q:n}});case 2:a=t.sent,e.setState({videos:a.data.items,selectedVideo:a.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.handleSubmit("macbook")}},{key:"render",value:function(){var e=this.state,t=e.selectedVideo,n=e.videos;return i.a.createElement(v.a,{style:{justifyContent:"center"},container:!0,spacing:12},i.a.createElement(v.a,{item:!0,xs:10},i.a.createElement(v.a,{container:!0,spacing:10},i.a.createElement(v.a,{item:!0,xs:8},i.a.createElement(b,{onSubmit:this.handleSubmit})),i.a.createElement(v.a,{item:!0,xs:8},i.a.createElement(y,{video:t})),i.a.createElement(v.a,{item:!0,xs:2},i.a.createElement(w,{videos:n,onVideoSelect:this.onVideoSelect})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.d33f6147.chunk.js.map