(ns uikit-hl.sortable
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-sortable! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-sortable! elem key val))

(defn- format-sortable [sortable]
  (str "uk-sortable-" sortable))

(defmethod uk-sortable! ::default
  [elem kw v]
  (h/do! elem :class {(format-sortable (name kw)) v}))

(defmethod uk-sortable! ::sortable
  [elem _ v]
  (.sortable uk/uikit elem (clj->js v)))
