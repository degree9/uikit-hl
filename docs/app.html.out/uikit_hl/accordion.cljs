(ns uikit-hl.accordion
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-accordion* "")
(def ^:dynamic *title* "")

(defmethod hl/do! :uk-accordion
  [elem _ v]
  (.accordion js/UIkit elem (clj->js v)))

(hl/defelem accordion [attr kids]
  (let [accordion (:uk-accordion attr *uk-accordion*)
        attr      (assoc attr :uk-accordion accordion)]
    (hl/ul attr kids)))

(hl/defelem item [attr kids]
  (let [title (:title attr *title*)
        attr  (dissoc attr :title)]
    (hl/li attr
      (hl/h3  :class [:uk-accordion-title] (hl/text "~{title}"))
      (hl/div :class [:uk-accordion-content] kids))))
