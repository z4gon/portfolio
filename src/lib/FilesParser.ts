import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export type ParserFunction<ParsedType> = (
    fileNameNoExt: string,
    frontMatterData: {
        [key: string]: any
    },
    markdownContent: string,
    full: boolean
) => ParsedType

export default class FilesParser<ParsedType> {
    private directory: string

    constructor(directory: string) {
        this.directory = directory
    }

    getFileNames(): string[] {
        return fs.readdirSync(this.directory)
    }

    parseFile(
        fileIdentifier: string,
        parserFunction: ParserFunction<ParsedType>,
        full: boolean = false
    ) {
        const fileNameNoExt = fileIdentifier.replace(/\.md$/, '')
        const fileName = `${fileNameNoExt}.md`
        const fileNames = this.getFileNames()

        if (!fileNames.includes(fileName)) {
            return null
        }

        const fullPath = join(this.directory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return parserFunction(fileNameNoExt, data, content, full)
    }

    parseAllFiles(dataParser: ParserFunction<ParsedType>): ParsedType[] {
        const fileNames = this.getFileNames()
        const parsedElements = fileNames.map((fileName) =>
            this.parseFile(fileName, dataParser)
        )
        return parsedElements
    }
}
