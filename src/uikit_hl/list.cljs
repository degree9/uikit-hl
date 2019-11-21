(ns uikit-hl.list
  (:require [hoplon.core :as h]))

(defmulti uk-list! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-list! elem key val))

(defn- format-list [list]
  (str "uk-list-" list))

(defmethod uk-list! ::default
  [elem kw v]
  (h/do! elem :class {(format-list (name kw)) v}))

(defmethod uk-list! ::list
  [elem kw v]
  (h/do! elem :class {:uk-list v}))

(h/defelem list [attr kids]
  (h/ul attr ::list true kids))

(h/defelem item [attr kids]
  (h/li attr kids))
