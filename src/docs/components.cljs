(ns docs.components
  (:require [hoplon.core :as hl]
            [javelin.core :as j]
            [hoplon.jquery]
            [uikit-hl.accordion :as accordion]
            [uikit-hl.alert :as alert]
            [uikit-hl.article :as article]
            [uikit-hl.tab :as tab]
            [uikit-hl.table :as table]
            [uikit-hl.text :as text]
            [uikit-hl.switcher :as switcher]
            ))

(hl/defelem index [attr kids]
  (hl/div
    (hl/h1 "Introduction")
    (text/text :lead true "Get started using UIkit with Hoplon.")
    (text/text "First of all you need to add uikit-hl to your dependencies.
                This will enable you to use prefabricated Hoplon elements already styled with UIkit.")))

(hl/defelem attributes [attr kids]
  (hl/div
    (hl/h1 "Attribute Providers")
    (text/text :lead true "uikit-hl is a great example of Hoplon Attribute Providers.")
    (text/text "Many components within uikit-hl are attribute providers. This means they have a custom
                attribute which applies specific behaviours to Hoplon elements.")
    (text/text "Any attribute providers are documented on their component pages.")))

(hl/defelem demo [attr kids]
  (let [example (:example attr)
        source  (:source  attr)]
    (hl/div :class [:uk-position-relative :uk-margin-medium]
      (tab/tab :uk-switcher {}
        (tab/item :title "Demo")
        (tab/item :title "Source"))
      (switcher/switcher
        (switcher/item example)
        (switcher/item (hl/pre (hl/code (map hl/span source))))))))

(hl/defelem accordion [attr kids]
  (hl/div
    (hl/h1 "Accordion")
    (text/text :lead true "Create a list of items that can be shown individually by clicking an item's header.")
    (hl/h3 "Usage")
    (text/text "The Accordion component consists of a parent container and item(s), with a title and child elements for each accordion item.")
    (hl/div
      (table/table :divider true
        :headers [["Element" "Attribute" "Description"]]
        :data    [[(hl/code "item") (hl/code ":title") "Text for the item header."]
                  [(hl/code "item") "" "Child elements are used for item content."]]))
    (demo
      :example
      (accordion/accordion
        (accordion/item :title "My Item" "my content." :active true)
        (accordion/item :title "My Second Item" "my other content."))
      :source
      ["(ns app.index \n"
       "  (:require [uikit-hl.accordion :refer [accordion item]])) \n\n"
       "(accordion \n"
       "  (item :title \"My Item\" \"my content.\") \n"
       "  (item :title \"My Second Item\" \"my other content.\"))"]
    )))

(hl/defelem alert [attr kids]
  (hl/div
    (hl/h1 "Alert")
    (text/text :lead true "Display success, warning and error messages.")
    (hl/h3 "Usage")
    (text/text "")
    (hl/div
      (table/table :divider true
        :headers [["Element" "Attribute" "Description"]]
        :data    [[(hl/code "alert") "" "Child elements are used for item content."]]))
    (demo
      :example
      (alert/alert "Message content.")
      :source
      ["(ns app.index \n"
       "  (:require [uikit-hl.alert :refer [alert]])) \n\n"
       "(alert \"Message content.\") \n"]
    )))

(hl/defelem align [attr kids]
  (hl/div
    (hl/h1 "Align")
    (text/text :lead true "Control the alignment of inline elements depending on the viewport size.")
    (hl/h3 "Usage")
    (text/text "To align images or other elements with spacing between the text and the element, add one of these attributes.")
    (hl/div
      (table/table :divider true
        :headers [["Attribute" "Description"]]
        :data    [[(hl/code ":uk-align")       "A map of alignments."]
                  [(hl/code ":align-left")     "A convenience attribute."]
                  [(hl/code ":align-left-s")   "A convenience attribute."]
                  [(hl/code ":align-left-m")   "A convenience attribute."]
                  [(hl/code ":align-left-l")   "A convenience attribute."]
                  [(hl/code ":align-left-xl")  "A convenience attribute."]
                  [(hl/code ":align-right")    "A convenience attribute."]
                  [(hl/code ":align-right-s")  "A convenience attribute."]
                  [(hl/code ":align-right-m")  "A convenience attribute."]
                  [(hl/code ":align-right-l")  "A convenience attribute."]
                  [(hl/code ":align-right-xl") "A convenience attribute."]
                  [(hl/code ":align-center")   "A convenience attribute."]
                  ]))
    (demo
      :source
      ["(ns app.index \n"
       "  (:require [uikit-hl.align])) \n\n"
       "(div :align-left true \"Content.\") \n"]
    )))

(hl/defelem animation [attr kids]
  (hl/div
    (hl/h1 "Animation")
    (text/text :lead true "A collection of smooth animations to use within your page.")
    (hl/h3 "Usage")
    (text/text "Add one of the animation classes to any element. The animation is
                shown when the class is added, so usually immediately on page load. To show the animation at another point,
                toggle the animation with a cell.")
    (hl/div
      (table/table :divider true
        :headers [["Attribute" "Description"]]
        :data    [[(hl/code ":uk-animation")                  "A map of animations."]
                  [(hl/code ":animation-fade")                "A convenience attribute."]
                  [(hl/code ":animation-scale-up")            "A convenience attribute."]
                  [(hl/code ":animation-scale-down")          "A convenience attribute."]
                  [(hl/code ":animation-slide-top")           "A convenience attribute."]
                  [(hl/code ":animation-slide-bottom")        "A convenience attribute."]
                  [(hl/code ":animation-slide-left")          "A convenience attribute."]
                  [(hl/code ":animation-slide-right")         "A convenience attribute."]
                  [(hl/code ":animation-slide-top-small")     "A convenience attribute."]
                  [(hl/code ":animation-slide-bottom-small")  "A convenience attribute."]
                  [(hl/code ":animation-slide-left-small")    "A convenience attribute."]
                  [(hl/code ":animation-slide-right-small")   "A convenience attribute."]
                  [(hl/code ":animation-slide-top-medium")    "A convenience attribute."]
                  [(hl/code ":animation-slide-bottom-medium") "A convenience attribute."]
                  [(hl/code ":animation-slide-left-medium")   "A convenience attribute."]
                  [(hl/code ":animation-slide-right-medium")  "A convenience attribute."]
                  [(hl/code ":animation-kenburns")            "A convenience attribute."]
                  [(hl/code ":animation-shake")               "A convenience attribute."]
                  ]))
    (demo
      :source
      []
    )))

(hl/defelem article [attr kids]
  (hl/div
    (hl/h1 "Article")
    (text/text :lead true "Create articles within your page.")
    (hl/h3 "Usage")
    (text/text "The article component consists of the article itself, a title and meta data.")
    (hl/div
      (table/table :divider true
        :headers [["Element" "Attribute" "Description"]]
        :data    [[(hl/code "article") ":title" "Article title."]
                  [(hl/code "article") ":meta" "Article meta data."]
                  [(hl/code "article") "" "Child elements are used for article content."]]))
    (demo
      :example
      (article/article :title "Title" :meta "Meta Data" "Message content.")
      :source
      ["(ns app.index \n"
       "  (:require [uikit-hl.article :refer [article]])) \n\n"
       "(article :title \"Title\" :meta \"Meta Data\" \"Message content.\") \n"]
    )))
