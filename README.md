<div style="text-align: center;">
    <a href="https://elttob.uk/Fusion/latest">
        <img src="./.gh/favicon.png" alt="berry" style="width: 95px; height: 95px;">
    </a>
    <div style="margin-top: 1px; font-size: 24px;"><b>Berry Registry</b></div>
</div>

**What is this?**

This repository is the registry for all the packages you install with `berry`. You can submit a package with a pull request; in the following format:

**Package name:** Package name
<br>
**Package version:** Package version
<br>
(<i>if it is a new package</i>) **What this package is and what functionality does it offer:** Paragraph
<br>
(<i>if you're updating a package</i>) **Changelog** Paragraph

Your package should be in the following format:

```
> root
    > package-name
        > 0.0.1
            > src
            > utils
            > Berry.toml

        > latest.txt
```

Your package should consist of versions, along with a `latest.txt`, which is a plain string containing the latest version that the user can install (in this case, it would be "0.0.1"). There should also be a folder with that name; containing the source code. You can see "example-package" for an example.

> [!TIP]
> Keep in mind that you're not allowed to update other peoples packages without permission; you must ask them first.
