(ns uikit-hl.overlay
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-overlay! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-overlay! elem key val))

(defn- format-overlay [overlay]
  (str "uk-overlay-" overlay))

(defmethod uk-overlay! ::default
  [elem kw v]
  (h/do! elem :class {(format-overlay (name kw)) v}))

(defmethod uk-overlay! ::overlay
  [elem _ v]
  (h/do! elem :class {:uk-overlay v}))
