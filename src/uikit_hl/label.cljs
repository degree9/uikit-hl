(ns uikit-hl.label
  (:require [hoplon.core :as h]))

(defmulti uk-label! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-label! elem key val))

(defn- format-label [label]
  (str "uk-label-" label))

(defmethod uk-label! ::default
  [elem kw v]
  (h/do! elem :class {(format-label (name kw)) v}))

(defmethod uk-label! ::label
  [elem kw v]
  (h/do! elem :class {:uk-label v}))

(h/defelem label [attr kids]
  (h/span attr ::label true kids))
