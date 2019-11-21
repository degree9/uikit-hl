(ns uikit-hl.placeholder
  (:require [hoplon.core :as h]))

(defmulti uk-placeholder! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-placeholder! elem key val))

(defn- format-placeholder [placeholder]
  (str "uk-placeholder-" placeholder))

(defmethod uk-placeholder! ::default
  [elem kw v]
  (h/do! elem :class {(format-placeholder (name kw)) v}))

(defmethod uk-placeholder! ::placeholder
  [elem _ v]
  (h/do! elem :class {:uk-placeholder v}))

(h/defelem placeholder [attr kids]
  (h/div attr ::placeholder true kids))
