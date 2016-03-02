
# Meteor Revision

## About
Meteor Revision allows you to access your local git repository metadata anywhere within your application, allowing you to show a tag or commit id within your templates.

## Installation

You can install the revision package globally using the following

```shell
meteor add centiq:revision
```

or you can install as a package dependency using the following in your `package.js`

```js
api.use('centiq:revision');
```

## How it works
Unlike other git revision packages out there, this works by using the built in meteor compilation process in order to fetch the current git revision during every build, it works during development staging and production builds via `meteor build`.

It does require you to run your project from a git repository though.

## Example Usage

```js
Template.Footer.helpers({
	revision: function () {
		return Revision.revision()
	}
})

```

```html
<template name="Footer">
	<div id="footer">
		<div class="revision">Revision: {{revision}}</div>
	</div>
</template>
```

## API

### Current Branch

```js
Revision.branch() // => master
```

### Latest Tag

```js
Revision.tag() // => 2.1.0
```
**Note:** fetching the latest tag created in the whole repository, not for your current branch.

### Current commit (short)
```js
Revision.short() // => b3b03e4
```

### Current commit (long)

```js
Revision.revision() // => b3b03e41e13ced023e1fd2cb330db1053e6ff649
```

### id

```js
Revision.id() // => 2.1.0-1-b3b03
```

## License - MIT
Please see LICENSE file for more details.