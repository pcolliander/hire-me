
## Design Decisions

I tried to keep things separated with files for api, types and components separated from each other. 

## Dependencies

The dependencies in the project are postcss plugins. I enjoy writing css using postcss plugins as it lets me add functionality to css to make it easier to maintain.

The notable decisions here were tailwind and precss. I like using Tailwind as it comes with a succint syntax, lots of sensible defaults and a built in design system. And precess lets me write dry and more maintanable css in a Sass-like style with features like imports and using `&` to denote the current selector.

To use postcss without ejecting from create-react-app I also had to install react-app-rewired and react-app-rewire-postcss.

## Usability Decisions

I worked primarily with tablet-viewport and tried to make items big enough to press on with fingers without accidentally clicking on something else.

I added a simple search to make it faster to find a child in the list.

Also added some styling with a border + checkmark to make it farily easy to see whether a child is checkin or not, and added a slight opacity to children who aren't checked in.

