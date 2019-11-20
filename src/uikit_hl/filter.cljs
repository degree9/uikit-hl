(ns uikit-hl.filter
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-filter! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-filter! elem key val))

(defn- format-filter [filter]
  (str "uk-filter-" filter))

(defmethod uk-filter! ::default
  [elem kw v]
  (h/do! elem :class {(format-filter (name kw)) v}))

(defmethod h/do! ::filter
  [elem _ v]
  (.filter uk/uikit elem (clj->js v)))
