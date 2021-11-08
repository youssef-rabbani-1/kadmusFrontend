import Router from "next/router";
import NProgress from "nprogress";



NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart',()=>{
  console.log("start")
  NProgress.start();
});
Router.events.on('routeChangeComplete',()=>{
  console.log("done");
  NProgress.done();
});
Router.events.on('routeChangeError',()=>{
  console.log('on error')
});

export default function App () {
  return null;
}