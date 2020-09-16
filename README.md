
## Design Decisions

## Dependencies

The dependencies in the project are postcss plugins. I enjoy writing css using postcss plugins as it lets me add functionality to css to make it easier to maintain.

The notable decisions here were tailwind and precss. I like using Tailwind as it comes with a succint syntax, lots of sensible defaults and a built in design system. And precess lets me write dry and more maintanable css in a Sass-like style with features like imports and using `&` to denote the current selector.

To use postcss without ejecting from create-react-app I also had to install react-app-rewired and react-app-rewire-postcss.

## Usability Decisions

I worked primarily with tablet-viewport and tried to make items big enough to press on with fingers without accidentally clicking on something else.

