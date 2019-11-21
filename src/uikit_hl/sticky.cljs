(ns uikit-hl.sticky
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-sticky! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-sticky! elem key val))

(defn- format-sticky [sticky]
  (str "uk-sticky-" sticky))

(defmethod uk-sticky! ::default
  [elem kw v]
  (elem :class {(format-sticky (name kw)) v}))

(defmethod uk-sticky! ::sticky
  [elem _ v]
  (.sticky uk/uikit elem (clj->js v)))
