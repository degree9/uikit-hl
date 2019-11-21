(ns uikit-hl.description-list
  (:require [hoplon.core :as h]))

(defmulti uk-description-list! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-description-list! elem key val))

(defn- format-description-list [description-list]
  (str "uk-description-list-" description-list))

(defmethod uk-description-list! ::default
  [elem kw v]
  (h/do! elem :class {(format-description-list (name kw)) v}))

(defmethod uk-description-list! ::description-list
  [elem kw v]
  (h/do! elem :class {:uk-description-list v}))

(h/defelem description-list [attr kids]
  (h/dl attr ::description-list true kids))

(h/defelem term [attr kids]
  (h/dt  attr kids))

(h/defelem definition [attr kids]
  (h/dd  attr kids))
