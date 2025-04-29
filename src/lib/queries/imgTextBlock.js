export const imageTextBlockQuery = `*[_type == "imageTextBlock"][0]{
    leftImage1 {
      asset->{
        url
      }
    },
    leftImage2 {
      asset->{
        url
      }
    },
    heading,
    paragraph
  }`
  