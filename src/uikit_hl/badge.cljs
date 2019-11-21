(ns uikit-hl.badge
  (:require [hoplon.core :as h]))

(defn- format-badge [badge]
  (str "uk-badge-" badge))

(defmethod h/do! ::default
  [elem kw v]
  (h/do! elem :class {(format-badge (name kw)) v}))

(defmethod h/do! ::badge
  [elem kw v]
  (h/do! elem :class {:uk-badge v}))

(h/defelem badge [attr kids]
  (h/span attr ::badge true kids))

(h/defelem a-badge [attr kids]
  (h/a attr ::badge true kids))
