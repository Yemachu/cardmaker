# [Card maker](https://yemachu.github.io/cardmaker/)
Various trading card games have fans who wish to create their own cards... even if they can only be used among friends. Which would normally require usage of an image editing program. This project aims to lower the barrier for creating fan-made cards by providing templates for some common options.

## Project structure
The project consists of various folders which each contain their designated type of files. Following is a basic rundown of what each folder contains.
- **build** - Configuration files for creating a minimized JavaScript file from the source code. Also contains said build if the command relevant command has been issued.
- **css** - Cascading style sheets. These give the site its appearance.
- **lib** - References to, or builds of, other projects on which this project depends. See ""[Cloning the project](#cloning-the-project)" for how to make sure all relevant files from the projects on which this one depends are downloaded.
- **res** - Resource folder. This includes images used by the style sheets to make the site look more appealing, but also the resources needed for the card maker to render.
- **src** - Contains the source code which is used to make the card maker function.


## Working on the project
There are multiple reasons thinkable to work on this project, though it will most likely boil down to wanting to improve it... at least from the point of view from the person who wishes to help.

Some people might want custom templates for certain trading card games. While amiable, they won't be accepted for this project; it could quickly grow out of hand. Though feel free to create a derivate in such a case.

### Other stuf
Since the site works with mostly static content, it should be possible to test it by simply opening it in the browser from the filesystem. There however is no guarantee everything will work as expected. It is advised that anyone who wishes to work on (a derivative of) the application installs a server on their device for development. [NGINX](https://nginx.org/) was used for the development.

### Cloning the project

This project references some other projects. Cloning it will usually leave the relevant folders empty. The following commands should populate the repository with the relevant files. People more savvy with Git might know better ways to get the same result, but it does its job.

```bash
git clone https://github.com/Yemachu/cardmaker.git
cd cardmaker
git submodule update --init --recursive
```
