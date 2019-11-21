(ns uikit-hl.animation
  (:require [hoplon.core :as h]))

(defn- format-animation [animation]
  (str "uk-animation-" animation))

(defmethod h/do! ::default
  [elem kw v]
  (h/do! elem :class {(format-animation (name kw)) v}))
