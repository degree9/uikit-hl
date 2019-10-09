(ns uikit-hl.tab
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-tab! h/kw-dispatcher :default ::default)

(defn format-tab [grid]
  (str "uk-tab-" grid))

(defmethod h/do! ::default
  [elem key val]
  (uk-tab! elem key val))

(defmethod uk-tab! ::default
  [elem key val]
  (h/do! elem :class {(format-tab (name key)) val}))

(defmethod uk-tab! ::tab
  [elem _ v]
  (.tab uk/uikit elem (clj->js v)))

(defmethod uk-tab! ::active
  [elem _ v]
  (h/do! elem :class {:uk-active v}))

(defmethod uk-tab! ::disabled
  [elem _ v]
  (h/do! elem :class {:uk-disabled v}))

(h/defelem tab [{:keys [uk-tab left right bottom] :as attr} kids]
  (h/ul
    (dissoc attr :bottom :left :right :uk-tab)
    ::tab    uk-tab
    ::left   left
    ::right  right
    ::bottom bottom
    kids))

(h/defelem item [{:keys [active disabled] :as attr} kids]
  (h/li
    (h/a
      (dissoc attr :active :disabled)
      ::active   active
      ::disabled disabled
      kids)))
