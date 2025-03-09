import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  /// Special Case for Homepage:
  if (fileData.slug === "index") {
    return <h1 class={classNames(displayClass, "article-title")}><img src="\images\wolverinemascotrev.png" alt="Wolverine Icon" style="vertical-align:middle"></img>{title}<img src="\images\wolverinemascot.png" alt="Wolverine Icon" style="vertical-align:middle"></img></h1>
  }
  if (title) {
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
