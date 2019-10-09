(ns uikit-hl.dropdown
  (:require [hoplon.core :as hl]
            ["uikit" :as uikit]))

(def ^:dynamic *uk-dropdown* "")

(defmethod hl/do! :uk-dropdown
  [elem _ v]
  (.dropdown uikit elem (clj->js v)))

(defmethod hl/do! :uk-dropdown-grid
  [elem _ v]
  (hl/do! elem :class {:uk-dropdown-grid v}))

(defmethod hl/do! :uk-dropdown-nav
  [elem _ v]
  (hl/do! elem :class {:uk-dropdown-nav v}))

(hl/defelem dropdown [attr kids]
  (let [dropdown (:uk-dropdown attr *uk-dropdown*)]
    (hl/div {:uk-dropdown dropdown} attr kids)))
