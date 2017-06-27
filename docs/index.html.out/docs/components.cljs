(ns docs.components
  (:require [hoplon.core :as hl]
            [javelin.core :as j]
            [hoplon.jquery]
            [uikit-hl.accordion :as accordion]
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
    (hl/p)
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
