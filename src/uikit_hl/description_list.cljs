(ns uikit-hl.description-list
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *divider* nil)

(hl/defelem description-list [attr kids]
  (let [divider (:divider attr *divider*)
        attr    (dissoc attr :divider)]
    (hl/dl (core/assoc-class attr {:uk-description-list true}) kids)))

(hl/defelem term [attr kids]
  (hl/dt attr kids))

(hl/defelem description [attr kids]
  (hl/dd attr kids))
