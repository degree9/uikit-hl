(ns uikit-hl.badge
  (:require [hoplon.core :as h]))

(defmulti uk-badge! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-badge! elem key val))

(defn- format-badge [badge]
  (str "uk-badge-" badge))

(defmethod uk-badge! ::default
  [elem kw v]
  (h/do! elem :class {(format-badge (name kw)) v}))

(defmethod uk-badge! ::badge
  [elem kw v]
  (h/do! elem :class {:uk-badge v}))

(h/defelem badge [attr kids]
  (h/span attr ::badge true kids))

(h/defelem a-badge [attr kids]
  (h/a attr ::badge true kids))
