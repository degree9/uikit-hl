(ns uikit-hl.margin
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-margin! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-margin! elem key val))

(defn- format-margin [margin]
  (str "uk-margin-" margin))

(defmethod uk-margin! ::default
  [elem kw v]
  (h/do! elem :class {(format-margin (name kw)) v}))

(defmethod uk-margin! ::margin
  [elem _ v]
  (.margin uk/uikit elem (clj->js v)))
