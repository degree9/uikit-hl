(ns uikit-hl.padding
  (:require [hoplon.core :as h]))

(defmulti uk-padding! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-padding! elem key val))

(defn- format-padding [padding]
  (str "uk-padding-" padding))

(defmethod uk-padding! ::default
  [elem kw v]
  (h/do! elem :class {(format-padding (name kw)) v}))

(defmethod uk-padding! ::padding
  [elem kw v]
  (h/do! elem :class {:uk-padding v}))
