(ns ^{:hoplon/page "docs.html"} docs.index
  (:require [hoplon.core :as hl]
            [javelin.core :as j]
            [hoplon.jquery]
            [uikit-hl.core :as core]
            [uikit-hl.container :as container]
            [uikit-hl.offcanvas :as offcanvas]
            [uikit-hl.nav :as nav]
            [uikit-hl.navbar :as navbar]
            [uikit-hl.section :as section]
            [uikit-hl.sticky :as sticky]
            [docs.components :as comp]
            ))

(def route
  (let [r (hl/route-cell "#")]
    (j/cell= (clojure.string/lower-case r))))

(j/cell= (.log js/console route))

(def components-list (j/cell ["Accordion" "Alert" "Align" "Animation" "Article" "Background"
                              "Badge" "Base" "Breadcrumb" "Button" "Card" "Close" "Column"
                              "Comment" "Container" "Countdown" "Cover" "Description List"
                              "Divider" "Dotnav" "Drop" "Dropdown" "Flex" "Form" "Grid"
                              "Grid Parallax" "Heading" "Icon" "Iconnav" "Inverse" "Label"
                              "Link" "List" "Margin" "Marker" "Modal" "Nav" "Navbar"
                              "Notification" "Off-Canvas" "Overlay" "Padding" "Pagination"
                              "Parallax" "Placeholder" "Position" "Print" "Progress"
                              "Scroll" "Scrollspy" "Search" "Section" "Slidenav" "Sortable"
                              "Spinner" "Sticky" "Subnav" "Switcher" "Tab" "Table" "Text"
                              "Tile" "Toggle" "Tooltip" "Totop" "Transition" "Upload" "Utility"
                              "Visibility" "Width"]))

(hl/html
  (hl/head
    (core/include-css)
    (hl/link :rel "stylesheet" :href "css/theme.css"))
  (hl/body
    (offcanvas/content
      (navbar/container :uk-sticky {:media 960} :class [:tm-navbar-container]
        (container/container :expand true
          (navbar/navbar
            (navbar/left
              (hl/a :class [:uk-navbar-item :uk-logo] "UIkit for Hoplon"))
            (navbar/right
              (navbar/nav
                (navbar/nav-item :parent true
                  :href "https://github.com/degree9/uikit-hl"
                  :title "View on Github"))))))
      (hl/div :class [:tm-sidebar-left]
        (hl/h3 "Documentation")
        (nav/nav :default true :class [:tm-nav]
          (nav/header "Getting Started")
          (nav/item :title "Introduction" :href "#")
          (nav/item :title "Attribute Providers" :href "#attributes"))
        (nav/nav :default true :class [:tm-nav]
          (nav/header "Components")
          (hl/for-tpl [component components-list]
            (nav/item :title component :href (str "#" @component)))))
      (section/section :default true :class [:tm-main]
        (container/container :small true
          (hl/div
            (hl/case-tpl route
              "#"           (comp/index)
              "#attributes" (comp/attributes)
              "#accordion"  (comp/accordion)
              "#alert"      (comp/alert)))
          (hl/div :class [:tm-sidebar-right]
            (hl/div :uk-sticky {:offset 160}
              ))))
      (offcanvas/offcanvas))))
