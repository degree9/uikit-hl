(ns uikit-hl.image
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-image! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-image! elem key val))

(defn- format-image [image]
  (str "uk-image-" image))

(defmethod uk-image! ::default
  [elem kw v]
  (h/do! elem :class {(format-image (name kw)) v}))

(defmethod uk-image! ::image
  [elem _ v]
  (.img uk/uikit elem (clj->js v)))
