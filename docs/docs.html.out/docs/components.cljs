(ns docs.components
  (:require [hoplon.core :as hl]
            [javelin.core :as j]
            [hoplon.jquery]
            [uikit-hl.accordion :as accordion]
            [uikit-hl.alert :as alert]
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
       "(alert/alert \"Message content.\") \n"]
    )))
